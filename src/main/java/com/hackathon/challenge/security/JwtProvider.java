package com.hackathon.challenge.security;

import com.hackathon.challenge.exception.CustomException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.cert.CertificateException;

/*On terminal:
        keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks -keysize 2048
        keystore password: secret
        keystore alias: jwt
 * */

@Service
public class JwtProvider {

    private KeyStore keyStore;

    @PostConstruct // create the key only one time for all usages
    public void init(){
        //key = Keys.secretKeyFor(SignatureAlgorithm.HS512); //hashing algorithm to sign the secretKey
        try {
            keyStore = KeyStore.getInstance("JKS");
            InputStream inputStream = getClass().getResourceAsStream("/jwt.jks");
            keyStore.load(inputStream,"secret".toCharArray());
        } catch (IOException | CertificateException | NoSuchAlgorithmException | KeyStoreException e) {
            throw new CustomException("Exception occurred while loading keystore");
        }
    }

    public String generateToken(Authentication authenticate) {
        User principal = (User) authenticate.getPrincipal();
        return Jwts.builder()
                .setSubject(principal.getUsername())
                .signWith(getPrivateKey())
                .compact();
    }

    private PrivateKey getPrivateKey() {
        try{
            return (PrivateKey) keyStore.getKey("jwt","secret".toCharArray());
        } catch (UnrecoverableKeyException | KeyStoreException | NoSuchAlgorithmException e) {
            throw new CustomException("Exception occurred while retrieving private key from keystore");
        }
    }

    public boolean validateToken(String jwtFromRequest){
        boolean isValid=false;
        Jws<Claims> claimsJws;
        try{
            claimsJws = Jwts.parserBuilder()
                            .setSigningKey(getPublicKey())
                            .build()
                            .parseClaimsJws(jwtFromRequest);
            //We can safely trust the JwtFromRequest
            isValid=true;
        } catch (ExpiredJwtException | MalformedJwtException | SignatureException | IllegalArgumentException | UnsupportedJwtException e) {
            e.printStackTrace();
        }
        return isValid;
    }

    private PublicKey getPublicKey() {
        try {
            return keyStore.getCertificate("jwt").getPublicKey();
        } catch (KeyStoreException e) {
            throw new CustomException("Exception occurred while retrieving public key from keystore");
        }
    }

    public String getUsernameFromJWT(String jwtFromRequest) {
        Claims claims = Jwts.parserBuilder()
                            .setSigningKey(getPublicKey()).build()
                            .parseClaimsJws(jwtFromRequest)
                            .getBody();
        return claims.getSubject();
    }
}
