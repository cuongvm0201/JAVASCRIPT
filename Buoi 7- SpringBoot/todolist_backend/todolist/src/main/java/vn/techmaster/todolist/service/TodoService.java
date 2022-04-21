package vn.techmaster.todolist.service;

import org.springframework.stereotype.Service;
import vn.techmaster.todolist.model.Todo;
import vn.techmaster.todolist.request.CreatTodoRequest;
import vn.techmaster.todolist.request.UpdateTodoRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class TodoService {
    private List<Todo> todos = new ArrayList<>();

    public TodoService(){
        Random rd = new Random();
        todos.add(new Todo(rd.nextInt(1,100), "Đi đá bóng", false));
        todos.add(new Todo(rd.nextInt(1,100), "Làm bài tập", true));
        todos.add(new Todo(rd.nextInt(1,100), "Đi chơi với bạn", true));
        todos.add(new Todo(rd.nextInt(1,100), "Đi ngủ sớm", false));
    }

    public List<Todo> getTodos(String status){
        switch (status){
            case "true":
                return todos.stream().filter(todo -> todo.isStatus()).collect(Collectors.toList());
            case "false":
                return todos.stream().filter(todo -> !todo.isStatus()).collect(Collectors.toList());
            default:
                return todos;
        }
    }

    public Todo createTodo(CreatTodoRequest request){
        //Tạo todo
        Random rd = new Random();
        Todo newTodo = new Todo();
        newTodo.setId(rd.nextInt(1,100));
        newTodo.setTitle(request.getTitle());
        newTodo.setStatus(false);


        todos.add(newTodo);
        return newTodo;
    }

    public Todo updateTodo(int id, UpdateTodoRequest request) {
        for(Todo todo: todos){
            if(todo.getId() == id){
                todo.setTitle(request.getTitle());
                todo.setStatus(request.isStatus());
                return todo;
            }
        }
        return null;
    }

    public void deleteTodo(int id) {
        todos.removeIf(todo -> todo.getId() == id);
    }
}
