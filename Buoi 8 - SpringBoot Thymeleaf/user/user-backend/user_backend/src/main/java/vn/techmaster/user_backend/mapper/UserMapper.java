package vn.techmaster.user_backend.mapper;

import vn.techmaster.user_backend.dto.UserDto;
import vn.techmaster.user_backend.model.User;

public class UserMapper {
    public static UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPhone(user.getPhone());
        userDto.setAddress(user.getAddress());


        return userDto;
    }
}
