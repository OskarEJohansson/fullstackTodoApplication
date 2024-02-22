import { ListTypes } from "../Interfaces/ListTypes";
import axios from "axios";
import useGlobalState from "../GlobalState";
import { useEffect } from "react";

// Ideomatisk namngivning, kompoonenter är, inte gör!

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
      <div>
        <p>{singleEntryParameter.user}</p>
        <p>{singleEntryParameter.text}</p>
        <input type="checkbox" checked={singleEntryParameter.taskCompleted} />
        <p onClick={deleteEntry}>X</p>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Entries;
