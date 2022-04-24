package vn.techmaster.user_backend.service;

import org.springframework.stereotype.Service;
import vn.techmaster.user_backend.dto.UserDto;
import vn.techmaster.user_backend.exception.NotFoundException;
import vn.techmaster.user_backend.mapper.UserMapper;
import vn.techmaster.user_backend.model.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class UserService {
    private List<User> users;

    public UserService() {
        init();
    }

    public void init() {
        users = new ArrayList<>();
        users.add(new User(1, "Nguyễn Quốc Thái", "thaipro@gmail.com", "0912349999", "Tỉnh Hà Nam", null, "123456"));
        users.add(new User(2, "Phạm Minh Khải", "khaibest@gmail.com", "0912349999", "Tỉnh Bắc Giang", null, "123456"));
        users.add(new User(3, "Trần Anh Tuấn", "tuantop@gmail.com", "0912349999", "Tỉnh Sóc Trăng", null, "123456"));
    }

    public List<UserDto> getUsers() {
        return users
                .stream()
                .map(user -> UserMapper.toUserDto(user))
                .collect(Collectors.toList());
    }

    public UserDto getUserById(int id) {
        Optional<User> userOptional = findById(id);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            return UserMapper.toUserDto(user);
        }
        throw new NotFoundException("User with id = " + id + " không tồn tại");
    }

    public User createUser(User user){
        Random rd = new Random();
        user.setId(rd.nextInt(100));
        users.add(user);
        return user;
    }

    public User updateUser(int id, User user){
        for(User curentUser: users){
            if(curentUser.getId() == id){
                curentUser.setName(user.getName());
                curentUser.setEmail(user.getEmail());
                curentUser.setPhone(user.getPhone());
                curentUser.setAddress(user.getAddress());
                return curentUser;
            }
        }
        return null;
    }

    public void deleteUser(int id){
        Optional<User> userOptional = findById(id);
        if(userOptional.isEmpty()){
            throw new NotFoundException("User with id = " + id + " không tồn tại");
        }
        users.removeIf(user -> user.getId() == id);
    }


    public Optional<User> findById(int id) {
        return users.stream().filter(user -> user.getId() == id).findFirst();
    }

    public Optional<User> findByEmail(String email) {
        return users.stream().filter(user -> user.getEmail().equals(email)).findFirst();
    }
}
