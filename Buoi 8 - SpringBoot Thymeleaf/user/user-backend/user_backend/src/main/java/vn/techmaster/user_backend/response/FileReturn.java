package vn.techmaster.user_backend.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FileReturn {
        private List<String> files;
        private int totalPage;

}
