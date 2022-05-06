package vn.techmaster.user_backend.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.techmaster.user_backend.dto.UserDto;
import vn.techmaster.user_backend.model.User;
import vn.techmaster.user_backend.request.CreateUserRequest;
import vn.techmaster.user_backend.request.UpdatePasswordRequest;
import vn.techmaster.user_backend.request.UpdateUserRequest;
import vn.techmaster.user_backend.response.FileReturn;
import vn.techmaster.user_backend.service.FileService;
import vn.techmaster.user_backend.service.UserService;

import java.util.List;
import java.util.Random;
import java.util.Scanner;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final FileService fileService;
    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        List<UserDto> userDtos = userService.getUsers();
        return ResponseEntity.ok(userDtos);
    }
    
    @GetMapping("/users/search")
    public ResponseEntity<?> searchUser(@RequestParam String name) {
        List<UserDto> userDtos = userService.searchUser(name);
        return ResponseEntity.ok(userDtos);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        UserDto userDto = userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/users")
    public ResponseEntity<?> createUser(@RequestBody CreateUserRequest createUserRequest){
        UserDto userDto = userService.createUser(createUserRequest);
        return ResponseEntity.ok(userDto);
    }


    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody UpdateUserRequest updateUserRequest){
        UserDto userDto = userService.updateUser(id, updateUserRequest);
        return ResponseEntity.ok(userDto);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable int id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/users/update-password/{id}")
    public ResponseEntity<?> updatePassword(@PathVariable int id, @RequestBody UpdatePasswordRequest updatePasswordRequest){
        userService.updatePassword(id, updatePasswordRequest);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/users/forgot-password/{id}")
    public ResponseEntity<?> forgotPassword(@PathVariable int id){
        String password = userService.forgotPassword(id);
        return ResponseEntity.ok(password);
    }

    @PostMapping("/users/upload-file/{id}")
    public ResponseEntity<?> uploadFile(@PathVariable int id, @ModelAttribute("file")
    MultipartFile file){
        String fileUrl = fileService.uploadFile(id, file);
        return ResponseEntity.ok(fileUrl);
    }

    @GetMapping("users/files/{id}/{fileName}")
    public ResponseEntity<?> readFile(@PathVariable int id, @PathVariable String fileName){
        byte [] bytes = fileService.readFile(id, fileName);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);
    }

    @GetMapping("users/files/{id}")
    public ResponseEntity<?> getFiles(@PathVariable int id, @RequestParam int page){
        FileReturn files = fileService.getFiles(id, page);
        return ResponseEntity.ok(files);
    }
}
