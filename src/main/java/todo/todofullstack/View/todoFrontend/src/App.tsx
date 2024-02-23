import "./App.css";
import useGlobalState from "./GlobalState";
import FetchAllDataComponent from "./Components/FetchAllData";
import Entries from "./Components/Entries";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./Components/Header";
import { useEffect } from "react";
import AddData from "./Components/AddData";

function App() {
  const apiFunctions = useGlobalState((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <header className="header-app">
        <HeaderNav />
      </header>
      <br />
      <div>Welcome to Notes </div>
      <div>
        {apiFunctions.entries.map((singleEntryObject) => (
          <Entries
            key={singleEntryObject.id}
            singleEntryParameter={singleEntryObject}
          />
        ))}
      </div>
      <div>
        <FetchAllDataComponent />
      </div>

      <AddData />

      <button onClick={() => navigate("/add")}>Add new Entry </button>
    </>
  );
}

export default App;
