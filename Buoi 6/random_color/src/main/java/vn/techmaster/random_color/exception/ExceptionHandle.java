package vn.techmaster.random_color.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandle {
        //Xử lý riêng BadRequestException
        @ExceptionHandler(BadRequestException.class)
        public ResponseEntity<ErrorResponse> handleBadRequestException(BadRequestException exception){
            ErrorResponse error = new ErrorResponse(HttpStatus.BAD_REQUEST, exception.getMessage());
            return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
        }


        //Xử lý chung với các Exception còn lại
        @ExceptionHandler(RuntimeException.class)
        public ResponseEntity<ErrorResponse> handleOthersException(RuntimeException exception){
            ErrorResponse error = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
}
