import { ListTypes } from "../Interfaces/ListTypes";
import axios from "axios";
import useGlobalState from "../GlobalState";

// Ideomatisk namngivning; Kompoonenter är, de "gör" inte!

interface EntriesInterface {
  singleEntryParameter: ListTypes;
}

function Entries({ singleEntryParameter }: EntriesInterface) {
  const apiFunctions = useGlobalState((state) => state);
  const URL = "http://localhost:8080/api";

  const deleteEntry = async () => {
    const response = await axios.delete(
      `${URL}/delete-entry/${singleEntryParameter.id}`
    );

    if (response.status === 200) {
      apiFunctions.removeEntry(singleEntryParameter.id);
    }
  };

  try {
    return (
      <div className="entries">
        <fieldset>
          <p>User: {singleEntryParameter.user}</p>
          <div>
            {" "}
            <p>Task</p>
            <p>{singleEntryParameter.text}</p>
          </div>
          <div>
            <p>Task Completed</p>
            <input
              type="checkbox"
              checked={singleEntryParameter.taskCompleted}
            />
          </div>

          <p onClick={deleteEntry}>Delete entry</p>
        </fieldset>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Entries;
