package todo.todofullstack.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Repository.TodoRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public void saveTodoEntry( TodoModel todoModel){
        todoRepository.save(todoModel);
    }

    public ArrayList<TodoModel> getAllEntries(){
        ArrayList<TodoModel> allEntriesInStore = (ArrayList<TodoModel>) todoRepository.findAll();

        return allEntriesInStore;
    }
}
