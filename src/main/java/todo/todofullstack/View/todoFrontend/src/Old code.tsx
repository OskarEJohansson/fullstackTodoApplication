      import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { ListTypes } from "./Interfaces/ListTypes";
import ShowEntriesComponent from "./Components/Entries";
import useGlobalState from "./GlobalState";
import { useNavigate } from "react-router-dom";
useGlobalState;
import FetchAllDataComponent from "./Components/FetchAllData";

function App() {
      
       // const [entries, setEntries] = useState<ListTypes[]>([]);

  // const [user, setUser] = useState("Oskar");

  // const [newEntry, setNewEntry] = useState("");

  // const URL = "http://localhost:8080/api";

  const navigate = useNavigate();

  // *** THE COMPONENT THAT FETCHES ALL THE DATA FROM THE BACK END API *** ///

  // const fetchAllData = async () => {
  //   try {
  //     const response = await axios.get(`${URL}/get-all-entries`);

  //     if (response.status === 200) {
  //       setEntries(response.data.entries);
  //       console.log(response.data.message);
  //     } else {
  //       console.log(`Unexpected status code: ${response.status}`);
  //     }
  //   } catch (error: any) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };

  // *** THE COMPONENT THAT FETCHES ALL THE DATA FROM THE BACK END API *** ///

  // *** THE COMPONENT THAT SENDS ENTRY INFORMATION TO SAVE TO THE BACK END API *** ///

  // const saveNewEntry = async () => {
  //   if (!newEntry) return;

  //   const requestBody = {
  //     user: `${user}`,
  //     text: `${newEntry}`,
  //     taskCompleted: false,
  //     localDateTime: new Date().toISOString(),
  //   };

  //   //
  //   const respons = await axios.post(`${URL}/save-entry`, requestBody, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (respons.status !== 200) {
  //     alert("Entry not saved!");
  //   }
  // };

  // *** THE COMPONENT THAT SENDS ENTRY INFORMATION TO SAVE TO THE BACK END API *** ///

  // useEffect(() => {
  //   fetchAllData();
  // }, []);
      
      // <h1>My Notes</h1>
      // <input
      //   type="text"
      //   value={user}
      //   onChange={(e) => setUser(e.target.value)}
      //   placeholder="Add Todo Text"
      // />

      // <br />
      // <input
      //   type="text"
      //   value={newEntry}
      //   onChange={(e) => setNewEntry(e.target.value)}
      //   placeholder="Add Todo Text"
      // />

      // <br />
      // <button className="btn-add" onClick={saveNewEntry}>
      //   Lägg till Todo
      // </button>

      // <br />
      // <div>
      //   {entries.map((singleEntryObject) => (
      //     <ShowEntriesComponent
      //       key={singleEntryObject.id}
      //       singleEntryParameter={singleEntryObject}
      //     />
      //   ))}
      // </div>

