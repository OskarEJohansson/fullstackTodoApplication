import { NoteTypes } from "../types";
import axios from "axios";
import useGlobalState from "../GlobalState";

// Ideomatisk namngivning; Kompoonenter är, de "gör" inte!

interface EntryInterface {
  singleEntryParameter: NoteTypes;
}

const Entry = ({ singleEntryParameter }: EntryInterface) => {
  const apiFunctions = useGlobalState((state) => state);

  const deleteEntry = async () => {
    const response = await axios.delete(
      `${apiFunctions.URL("/delete-entry/")}${singleEntryParameter.id}`
    );

    if (response.status === 200) {
      apiFunctions.removeEntry(singleEntryParameter.id);
    }
  };

  const isTaskCompleted = async () => {
    const response = await axios.put(
      `${apiFunctions.URL}/update-entry/${singleEntryParameter.id}`
    );

    if (response.status === 200) {
      apiFunctions.updateEntry(
        singleEntryParameter.id,
        !singleEntryParameter.taskCompleted
      );
    }
  };

  try {
    return (
      <div className="entry">
        <p>User: {singleEntryParameter.user}</p>
        <fieldset className="entry">
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
};

export default Entry;
