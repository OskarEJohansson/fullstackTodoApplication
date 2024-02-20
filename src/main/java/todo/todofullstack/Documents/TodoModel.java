package todo.todofullstack.Documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "TodoRepository")
public class TodoModel {

    @Id
    private String id;
    private String user;
    private String text;
    private boolean taskCompleted;
}


