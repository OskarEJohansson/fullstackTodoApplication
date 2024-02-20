package todo.todofullstack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import todo.todofullstack.Services.TodoService;

@CrossOrigin("*")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;


}
