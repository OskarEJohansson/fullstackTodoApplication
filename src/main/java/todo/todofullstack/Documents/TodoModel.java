package todo.todofullstack.Documents;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;


@Document(collection = "TodoRepository")
public class TodoModel {

    @MongoId
    private String id;
    private String user;
    private String text;
    private boolean taskCompleted;
}


