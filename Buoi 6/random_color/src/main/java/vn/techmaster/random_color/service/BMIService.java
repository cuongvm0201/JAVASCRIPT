package vn.techmaster.random_color.service;

import org.springframework.stereotype.Service;
import vn.techmaster.random_color.exception.BadRequestException;

@Service
public class BMIService {
    public double calculateBmi(double height, double weight){
        if(height <= 0 || weight <= 0){
            throw new BadRequestException("Chiều cao/Cân nặng không hợp lệ");
        }
        return weight/(height*height);
    }
}
