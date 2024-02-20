import { useState } from "react";
import axios from "axios";

import "./App.css";
import { TodoTypes } from "./Interfaces/TodoTypes";

function App() {
  const [myEntries, setMyEntries] = useState<TodoTypes[]>([]);

  const [user, setUser] = useState("Oskar");

  const [newEntry, setNewEntry] = useState("");

  const URL = "http://localhost:8080/api/";

  const fetchDataComponent = async () => {
    const response = await axios.get(`${URL}/api/get-entries`);

    if (response.status === 200) {
      setMyEntries(response.data);

      console.log(response.data);
    }
  };

  const saveNewEntryComponent = async () => {
    if (!newEntry) return;

    const requestBody = {
      user: { user },
      text: { newEntry },
      taskCompleted: false,
    };

    const respons = await axios.post(`${URL}/save-entry`, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h1>My Notes</h1>
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Add Todo Text"
      />
      <button className="btn-add" onClick={saveNewEntryComponent}>
        Lägg till Todo
      </button>
      {/* <button onClick={fetchData}>Hämta Data</button> */}
    </>
  );
}

export default App;
