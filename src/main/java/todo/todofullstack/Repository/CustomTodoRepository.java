package todo.todofullstack.Repository;

import com.mongodb.client.result.UpdateResult;
import org.springframework.data.mongodb.repository.MongoRepository;
import todo.todofullstack.Documents.TodoModel;

public interface CustomTodoRepository {

    UpdateResult toggleTaskCompleted(String id);

}
