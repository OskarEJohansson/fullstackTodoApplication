package todo.todofullstack.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Repository.TodoRepository;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public TodoModel saveTodoEntry(TodoModel todoModel) {

        TodoModel savedEntry = todoRepository.save(todoModel);

        return savedEntry;
    }

    public ArrayList<TodoModel> getAllEntries() {
        ArrayList<TodoModel> allEntriesInStore = (ArrayList<TodoModel>) todoRepository.findAll();

        return allEntriesInStore;
    }

    public Optional<TodoModel> findEntryById(String id) {

        try {
            Optional<TodoModel> todoEntry = todoRepository.findById(id);

            return todoEntry;

        }catch (EmptyResultDataAccessException ex){
            return Optional.empty();
        }
    }

    public boolean deleteEntryById(String id) {

        try {
            if(todoRepository.existsById(id)){
                todoRepository.deleteById(id);
                return true;
            }else return false;

        } catch (EmptyResultDataAccessException ex) {
            return false;
        }
    }

}
