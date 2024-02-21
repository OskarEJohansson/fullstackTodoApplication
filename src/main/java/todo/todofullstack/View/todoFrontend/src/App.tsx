import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { ListTypes } from "./Interfaces/ListTypes";
import ShowMyEntriesComponent from "./Components/ShowMyEntriesComponent";

function App() {
  const [myEntries, setMyEntries] = useState<ListTypes[]>([]);

  const [user, setUser] = useState("Oskar");

  const [newEntry, setNewEntry] = useState("");

  const URL = "http://localhost:8080/api";

  // *** THE COMPONENT THAT FETCHES ALL THE DATA FROM THE BACK END API *** ///

  const fetchAllDataComponent = async () => {
    try {
      const response = await axios.get(`${URL}/get-all-entries`);

      if (response.status === 200) {
        setMyEntries(response.data.entries);
        console.log(response.data.message);
      } else {
        console.log(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  // *** THE COMPONENT THAT FETCHES ALL THE DATA FROM THE BACK END API *** ///

  // *** THE COMPONENT THAT SENDS ENTRY INFORMATION TO SAVE TO THE BACK END API *** ///

  const saveNewEntryComponent = async () => {
    if (!newEntry) return;

    const requestBody = {
      user: `"${user}"`,
      text: `"${newEntry}"`,
      taskCompleted: false,
      localDateTime: new Date().toISOString(),
    };

    //
    const respons = await axios.post(`${URL}/save-entry`, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (respons.status !== 200) {
      alert("Entry not saved!");
    }
  };

  // *** THE COMPONENT THAT SENDS ENTRY INFORMATION TO SAVE TO THE BACK END API *** ///

  useEffect(() => {
    fetchAllDataComponent();
  }, []);

  return (
    <>
      <h1>My Notes</h1>
      <br />
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Add Todo Text"
      />

      <br />
      <button className="btn-add" onClick={saveNewEntryComponent}>
        Lägg till Todo
      </button>

      <br />
      <div>
        {myEntries.map((singelEntry) => (
          <ShowMyEntriesComponent
            key={singelEntry.id}
            showSingelEntryParamter={singelEntry}
          />
        ))}
      </div>

      <button onClick={fetchAllDataComponent}>Hämta Data</button>
    </>
  );
}

export default App;
