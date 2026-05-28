package com.Manjari....;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/github")
@CrossOrigin("*")
public class GitHubController {

    @GetMapping("/{username}")
    public Object getUser(@PathVariable String username) {

        String url =
                "https://api.github.com/users/" + username;

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(url, Object.class);
    }

    @GetMapping("/repos/{username}")
    public Object getRepos(@PathVariable String username) {

        String url =
                "https://api.github.com/users/"
                        + username +
                        "/repos";

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(url, Object.class);
    }
}