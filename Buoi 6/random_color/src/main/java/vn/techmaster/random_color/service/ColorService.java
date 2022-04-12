package vn.techmaster.random_color.service;

import java.util.Random;

import org.springframework.stereotype.Service;
import vn.techmaster.random_color.exception.BadRequestException;

@Service
public class ColorService {
    public String randomColor(int type){
        String color = "";
        switch (type) {
            case 1:
            color = randomColorName();
            break;
            case 2:
            color = randomHexColor();
            break;
            case 3:
            color = randomRgbColor();
            break;
            default:
            throw new BadRequestException("Type không hợp lệ");
        }
        return color;
    }

    private String randomColorName() {
        Random rd = new Random(); //Tạo đối tượng Random
        String [] colors = {"red", "blue","green","yellow","pink","black"}; //Tạo mảng màu string

        return colors[rd.nextInt(colors.length)]; //return lại giá trị màu ngẫu nhiên theo index mảng màu
    }

    private String randomHexColor() {
        Random rd = new Random();
        String [] characters = {"a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"};
        StringBuilder sb = new StringBuilder("#");


        //Vì màu Hex chỉ có 6 ký tự nên chỉ cần duyệt vòng for tới 6
        for(int i = 0; i < 6;i++){
            String character = characters[rd.nextInt(characters.length)];
            sb.append(character);
        }
        return sb.toString();
    }

    private String randomRgbColor() {
        Random rd = new Random();
        int r = rd.nextInt(256);
        int g = rd.nextInt(256);
        int b = rd.nextInt(256);
        return "rgb("+r+","+g+","+b+")";
    }

    
}
