package todo.todofullstack.Repository.Implementation;

import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import todo.todofullstack.Documents.TodoModel;
import todo.todofullstack.Repository.CustomTodoRepository;
import org.springframework.data.mongodb.core.query.Query;

import static org.springframework.data.mongodb.core.query.Criteria.where;

@Repository
public class CustomTodoRepositoryImplementation implements CustomTodoRepository {

    @Autowired
    private MongoTemplate mongoTemplate;


    // ADD TRY CATCH AND ERROR HANDLING
    @Override
    public UpdateResult toggleTaskCompleted(String id) {
        Query query = new Query(where("_id").is(id));
        TodoModel todoModel = mongoTemplate.findOne(query, TodoModel.class);

        if(todoModel != null){
            boolean currentTaskCompleted = todoModel.taskCompleted();
            Update update = new Update().set("taskCompleted", !currentTaskCompleted);
            UpdateResult updateResult = mongoTemplate.updateFirst(query, update, TodoModel.class);
            return updateResult;
        } else
//        Update update = new Update();
//        update.set("taskCompleted", !"taskCompleted");
//        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, TodoModel.class);
        return null;

    }
}
