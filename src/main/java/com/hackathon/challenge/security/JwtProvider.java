package com.hackathon.challenge.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.security.Key;

@Service
public class JwtProvider {

    private Key key;

    @PostConstruct // create the key only one time for all usages
    public void init(){
        key = Keys.secretKeyFor(SignatureAlgorithm.HS512);// hashing algorithm to sign the secretKey
    }

    public String generateToken(Authentication authenticate) {
        User principal = (User) authenticate.getPrincipal();
        return Jwts.builder()
                .setSubject(principal.getUsername())
                .signWith(key)
                .compact();
    }

    public boolean validateToken(String jwtFromRequest){
        boolean isValid=false;
        Jws<Claims> claimsJws;
        try{
            claimsJws = Jwts.parserBuilder()
                            .setSigningKey(key)
                            .build()
                            .parseClaimsJws(jwtFromRequest);
            //We can safely trust the JwtFromRequest
            isValid=true;
        } catch (ExpiredJwtException | MalformedJwtException | SignatureException | IllegalArgumentException | UnsupportedJwtException e) {
            e.printStackTrace();
        }
        return isValid;
    }

    public String getUsernameFromJWT(String jwtFromRequest) {
        Claims claims = Jwts.parserBuilder()
                            .setSigningKey(key).build()
                            .parseClaimsJws(jwtFromRequest)
                            .getBody();
        return claims.getSubject();
    }
}
