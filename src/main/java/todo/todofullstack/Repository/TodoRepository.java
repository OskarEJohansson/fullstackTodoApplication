package todo.todofullstack.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import todo.todofullstack.Documents.TodoModel;

import java.util.Optional;

@Repository
public interface TodoRepository extends MongoRepository<TodoModel, String> {

    void deleteById(String id);

}
