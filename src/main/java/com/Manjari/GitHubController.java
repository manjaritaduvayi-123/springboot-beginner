package com.Manjari.WebProject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/github")
@CrossOrigin("*")
public class GitHubController {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/{username}")
    public ResponseEntity<?> getUser(@PathVariable String username) {

        try {

            String url =
                    "https://api.github.com/users/" + username;

            Object user =
                    restTemplate.getForObject(url, Object.class);

            return ResponseEntity.ok(user);

        }
        catch (HttpClientErrorException.NotFound e) {

            return ResponseEntity
                    .status(404)
                    .body("GitHub user not found");

        }
        catch (Exception e) {

            return ResponseEntity
                    .status(500)
                    .body("Server Error: " + e.getMessage());

        }
    }

    @GetMapping("/repos/{username}")
    public ResponseEntity<?> getRepos(@PathVariable String username) {

        try {

            String url =
                    "https://api.github.com/users/"
                            + username
                            + "/repos";

            Object repos =
                    restTemplate.getForObject(url, Object.class);

            return ResponseEntity.ok(repos);

        }
        catch (HttpClientErrorException.NotFound e) {

            return ResponseEntity
                    .status(404)
                    .body("Repositories not found");

        }
        catch (Exception e) {

            return ResponseEntity
                    .status(500)
                    .body("Server Error: " + e.getMessage());

        }
    }
}