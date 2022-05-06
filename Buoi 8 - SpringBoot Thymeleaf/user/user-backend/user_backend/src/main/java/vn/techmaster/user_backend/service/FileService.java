package vn.techmaster.user_backend.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;
import vn.techmaster.user_backend.exception.BadRequestException;
import vn.techmaster.user_backend.exception.NotFoundException;
import vn.techmaster.user_backend.model.User;
import vn.techmaster.user_backend.response.FileReturn;
import vn.techmaster.user_backend.util.Utils;


import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service

public class FileService {
    @Autowired
    private UserService userService;
    private final Path rootDir = Paths.get("uploads");
    public FileService(){
        creatFolder(rootDir.toString());
    }
    public void creatFolder(String path){
        File folder = new File(path);
        if(!folder.exists()){
            folder.mkdirs();
        }
    }
    public String uploadFile(int id, MultipartFile file) {
        // Kiểm tra user id
        Optional<User> userOptional = userService.findById(id);
        if(userOptional.isEmpty()){
            throw new NotFoundException("User with id = " + id + " không tồn tại");
        }

        // Kiểm tra file
        String fileName = file.getOriginalFilename();
        if(fileName == null || fileName.equals("")){
            throw new BadRequestException("Tên file không hợp lệ");
        }

        // Lấy extension file
        String fileExtension = Utils.getFileExtension(fileName);

        // Kiểm tra extension file có hợp lệ không
        if(!Utils.checkFileExtension(fileExtension)){
            throw new BadRequestException("Chỉ cho upload file đuôi PNG-JPEG-JPG");
        }
        // TODO: Kiểm tra phần này
        // Check size file
        if((double) file.getSize() / 1_000_000L > 2){
            throw  new BadRequestException("File không được vượt quá 2MB");
        }

        // Tạo folder tướng ứng với userid
        Path userDir = Paths.get("uploads").resolve(String.valueOf(id));
        creatFolder(userDir.toString());

        // Tạo path tướng ứng với file Upload lên
        String genarateFileName = UUID.randomUUID() + "." + fileExtension;
        File serverFile = new File(userDir.toString() + "/" + genarateFileName);

        // Sử dụng buffer để lưu dữ liệu từ file
        try{
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));

            // Ghi từ bộ nhớ đệm vào đối tượng serverFile
            stream.write(file.getBytes());
            stream.close();

            //Tạo filePath -> fileUpload
            String filePath = "/api/v1/users/files/" + id + "/" + genarateFileName;

            //Chèn thông tin filePath cho user
            userOptional.get().setAvatar(filePath);
            return filePath;
        }catch (Exception e){
            throw new RuntimeException("Lỗi khi upload file");
        }

    }

    public byte[] readFile(int id, String fileName) {
        // Lấy đường dẫn file tướng ứng với user_id
        Path userPath = rootDir.resolve(String.valueOf(id));

        // Kiểm tra đường dẫn file có tồn tại hay không
        if(!Files.exists(userPath)){
            throw new RuntimeException("Không thể đọc file: " + fileName);
        }
        try {
            // Lấy đường dẫn file tương ứng với user_id và file_name
            Path file = userPath.resolve(fileName);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()){
                return StreamUtils.copyToByteArray(resource.getInputStream());
            }else {
                throw new RuntimeException("Không thể đọc file: " + fileName);
            }
        } catch (Exception e){
            throw new RuntimeException("Không thể đọc file: " + fileName);
        }
    }

    public FileReturn getFiles(int id, int page) {
        final int IMAGE_OF_PAGE = 10;
        // lấy đường dẫn file tương ứng với userid
        Path userPath = rootDir.resolve(String.valueOf(id));

        // kiểm tra đường dẫn file có tồn tại không
        if(!Files.exists(userPath)){
            throw new RuntimeException("Lỗi khi lấy danh sách file");
        }

        // lấy danh sách tất cả file theo userid
        List<File> files = Arrays.asList(userPath.toFile().listFiles());

        // Công thức tính page
        List<File> filesReturn = files
                .stream()
                .skip((page-1)*IMAGE_OF_PAGE)
                .limit(IMAGE_OF_PAGE)
                .collect(Collectors.toList());

        // Tính tổng số page
        int totalPage = (int) Math.ceil((double) files.size()/IMAGE_OF_PAGE);

        List<String> filesPath = filesReturn
                .stream()
                .map(file ->"/api/v1/users/files/" + id + file.getName())
                .collect(Collectors.toList());

        return new FileReturn(filesPath, totalPage);
    }
}
