package vn.techmaster.random_color.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.techmaster.random_color.request.BmiRequest;
import vn.techmaster.random_color.service.BMIService;
import vn.techmaster.random_color.service.ColorService;
@RestController
@AllArgsConstructor
public class BMIController {

    private BMIService bmiService;

    @GetMapping("/bmi")
    public ResponseEntity<?> calculateBmitGet(@RequestParam double height, @RequestParam double weight){
        double bmi = bmiService.calculateBmi(height,weight);
        return ResponseEntity.ok(bmi);
    }

    @PostMapping("/bmi")
    public ResponseEntity<?> calculateBmiPost(@RequestBody BmiRequest request){
        double bmi = bmiService.calculateBmi(request.getHeight(), request.getWeight());
        return ResponseEntity.ok(bmi);
    }

}
