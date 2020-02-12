package com.hackathon.challenge.service;

import com.hackathon.challenge.dto.PostDTO;
import com.hackathon.challenge.exception.CustomException;
import com.hackathon.challenge.model.Post;
import com.hackathon.challenge.repository.PostRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class PostService {

   private final AuthService authService;
   private final PostRepository postRepository;

    public PostService(AuthService authService, PostRepository postRepository) {
        this.authService = authService;
        this.postRepository = postRepository;
    }

    public void createPost(PostDTO postDTO){
        /*Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setContent((postDTO.getContent()));
        User user = authService.getCurrentUser().orElseThrow(()-> new IllegalArgumentException("No User logged in"));

        post.setUsername(user.getUsername());
        post.setCreatedOn(Instant.now());
        postRepository.save(post);*/
        Post post = mapFromDTOtoPost(postDTO);
        postRepository.save(post);
    }

    public List<PostDTO> showAllPosts(){
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDTO).collect(toList());
    }

    public PostDTO readSinglePost(Long id){
        Post post = postRepository.findById(id).orElseThrow(()-> new CustomException("For id " + id));
        return mapFromPostToDTO(post);
    }

    private PostDTO mapFromPostToDTO(Post post){
        PostDTO postDTO = new PostDTO();
        postDTO.setId(post.getId());
        postDTO.setTitle(post.getTitle());
        postDTO.setContent(post.getContent());
        postDTO.setUsername(post.getUsername());
        return postDTO;
    }

    private Post mapFromDTOtoPost(PostDTO postDTO){
        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        User loggedInUser = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("User Not Found"));
        post.setCreatedOn(Instant.now());
        post.setUsername(loggedInUser.getUsername());
        post.setUpdatedOn(Instant.now());
        return post;
    }

}
