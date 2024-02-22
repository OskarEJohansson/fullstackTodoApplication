import { useState } from "react";
import axios from "axios";
import useGlobalState from "../GlobalState";

function AddData() {
  const apiFunctions = useGlobalState((state) => state);
  const [user, setUser] = useState("Oskar");
  const [newEntry, setNewEntry] = useState("");

  const URL = "http://localhost:8080/api";

  const saveNewEntry = async () => {
    if (!newEntry) return;

    const requestBody = {
      user: `${user}`,
      text: `${newEntry}`,
      taskCompleted: false,
      localDateTime: new Date().toISOString(),
    };

    const response = await axios.post(`${URL}/save-entry`, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      alert("Entry  saved!");

      apiFunctions.addEntry(response.data);
      setNewEntry("");
    } else alert("Entry not saved");
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Add Todo Text"
      />

      <br />
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Add Todo Text"
      />

      <br />
      <button className="btn-add" onClick={saveNewEntry}>
        Lägg till Todo
      </button>
    </div>
  );
}

export default AddData;
