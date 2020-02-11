package com.hackathon.challenge.controller;

import com.hackathon.challenge.dto.PostDTO;
import com.hackathon.challenge.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    final
    PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }


    @PostMapping
    public ResponseEntity createPost(@RequestBody PostDTO postDTO){
        postService.createPost(postDTO);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PostDTO>> showAllPosts(){
        return new ResponseEntity<>(postService.showAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PostDTO> getSinglePost(@PathVariable @RequestBody Long id){
        return new ResponseEntity<>(postService.readSinglePost(id), HttpStatus.OK);
    }
}
