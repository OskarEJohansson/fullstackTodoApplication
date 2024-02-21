package todo.todofullstack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Services.TodoService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/api/save-entry")
    public ResponseEntity<Map<String, String>> saveTodoEntry(@RequestBody TodoModel todoModel) {

        Map<String, String> responsbody = new HashMap<>();

        try {
            todoService.saveTodoEntry(todoModel);
            responsbody.put("message", "Entry saved successfully");

            return ResponseEntity.ok(responsbody);

        } catch (Exception e) {
            responsbody.put("message", e.getMessage());

            return ResponseEntity.badRequest().body(responsbody);

        }
    }

    @GetMapping("/api/get-all-entries")
    public ResponseEntity<Map<String, Object>> getAllEntries() {

        Map<String, Object> getAllRespons = new HashMap<>();

        try {
            ArrayList allEntries = todoService.getAllEntries();
            getAllRespons.put("message", "All entries loaded");
            getAllRespons.put("entries", allEntries);

            return ResponseEntity.ok(getAllRespons);

        } catch (Exception e) {
            getAllRespons.put("message", e.getMessage());

            return ResponseEntity.badRequest().body(getAllRespons);
        }
    }
}
