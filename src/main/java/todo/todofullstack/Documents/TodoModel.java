package todo.todofullstack.Documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@Document(collection = "TodoRepository")
public record TodoModel(
        @Id String id,
        String user,
        String text,
        Boolean taskCompleted,
        LocalDateTime localDateTime) {
}

