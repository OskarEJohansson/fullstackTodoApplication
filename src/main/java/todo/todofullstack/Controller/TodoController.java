package todo.todofullstack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Services.TodoService;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RestController
public class TodoController {

    Map<String, String> responsbody = new HashMap<>();

    @Autowired
    private TodoService todoService;


    @PostMapping("/api/save-entry")
    public ResponseEntity<Map<String, String>> saveTodoEntry(@RequestBody TodoModel todoModel){
        try{
            todoService.saveTodoEntry(todoModel);

            responsbody.put("message", "Entry saved successfully");
            return ResponseEntity.ok(responsbody);
        }catch (Exception e){
            responsbody.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(responsbody);

        }
    }

//    @GetMapping("/api/get-entry")
//    public ResponseEntity

}
