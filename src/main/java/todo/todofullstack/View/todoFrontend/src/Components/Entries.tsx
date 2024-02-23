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

  const isTaskCompleted = async () => {
    const requestBody = !singleEntryParameter.taskCompleted;
    const response = await axios.put(
      `${URL}/CREATE-ENDPOINT/${singleEntryParameter.id}`,
      requestBody
    );

    if (response.status === 200) {
      apiFunctions.updateEntry(
        singleEntryParameter.id,
        singleEntryParameter.taskCompleted
      );
    }
  };

  try {
    return (
      <div className="entries">
        <p>User: {singleEntryParameter.user}</p>
        <fieldset className="entries">
          <div>
            <p>Task</p>
            <p>{singleEntryParameter.text}</p>
          </div>
          <div>
            <p>
              Completed{" "}
              <input
                type="checkbox"
                checked={singleEntryParameter.taskCompleted}
                onChange={isTaskCompleted}
              />
            </p>
          </div>
        </fieldset>

        <button onClick={deleteEntry}>Delete entry</button>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Entries;
