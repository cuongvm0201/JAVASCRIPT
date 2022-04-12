package vn.techmaster.random_color.bmiresponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BmiResponse {
    private double result;
    private String comment;
}
