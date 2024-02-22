package todo.todofullstack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Services.TodoService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

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

    @GetMapping("/api/get-entry/{id}")
    public ResponseEntity<Map<String, Object>> getEntryById(@PathVariable String id) {

        Map<String, Object> getEntryByIdResponse = new HashMap<>();

        try {
            Optional<TodoModel> entryById = todoService.findEntryById(id);


            System.out.println(entryById.toString());

            if (entryById.isPresent()) {
                getEntryByIdResponse.put("message", "Entry ID found");
                getEntryByIdResponse.put("entry", entryById);

                return ResponseEntity.ok(getEntryByIdResponse);

            } else {
                getEntryByIdResponse.put("message", "Entry not found");
                return ResponseEntity.badRequest().body(getEntryByIdResponse);
            }


        } catch (Exception e) {
            getEntryByIdResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(getEntryByIdResponse);
        }
    }

    @DeleteMapping("api/delete-entry/{id}")
    public ResponseEntity<Map<String, String>> deleteEntryById(@PathVariable String id) {
        Map<String, String> deleteEntryByIdResponse = new HashMap<>();
        try {


            if(todoService.deleteEntryById(id)){
                deleteEntryByIdResponse.put("message", "Entry deleted successfully");
                return ResponseEntity.ok(deleteEntryByIdResponse);

            } else {

                deleteEntryByIdResponse.put("message", "Entry not found by ID");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(deleteEntryByIdResponse);
            }

        } catch (Exception e) {

            deleteEntryByIdResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(deleteEntryByIdResponse);
        }
    }
}
