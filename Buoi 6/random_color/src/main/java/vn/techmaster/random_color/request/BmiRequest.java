package vn.techmaster.random_color.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BmiRequest {
    private double height;
    private double weight;
}
