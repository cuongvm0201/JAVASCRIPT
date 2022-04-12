package vn.techmaster.random_color.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import vn.techmaster.random_color.service.ColorService;

@RestController
@AllArgsConstructor
public class ColorController {

    @Autowired
    private ColorService colorService;

    @GetMapping("/random-color")
    public ResponseEntity<?> randomColor(@RequestParam int type){
        String color = colorService.randomColor(type);
        return ResponseEntity.ok(color);
    }
}
