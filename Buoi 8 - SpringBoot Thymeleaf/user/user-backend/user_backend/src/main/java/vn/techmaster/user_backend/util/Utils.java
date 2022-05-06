package vn.techmaster.user_backend.util;

import org.apache.commons.lang3.RandomStringUtils;

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class Utils {
    public static String generatePassword(int count){
        return RandomStringUtils.random(count,false,true);
    }

    public static String getFileExtension(String fileName) {
        int lastIndexOf = fileName.lastIndexOf(".");
        if (lastIndexOf == -1) {
            return ""; // empty extension
        }
        return fileName.substring(lastIndexOf + 1);
    }

    public static boolean checkFileExtension(String fileExtension){
        List<String> fileExtensions = Arrays.asList("png","jpg","jpeg");
        return fileExtension.contains(fileExtension);
    }
}
