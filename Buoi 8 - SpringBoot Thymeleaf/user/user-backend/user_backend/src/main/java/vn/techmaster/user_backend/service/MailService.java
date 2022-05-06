package vn.techmaster.user_backend.service;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class MailService {
    private JavaMailSender emailSender;

    public void sendMail(String email, String subject, String content){
        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(email);
        message.setSubject(subject);
        message.setText(content);

        // Send Message!
        emailSender.send(message);
    }
}
