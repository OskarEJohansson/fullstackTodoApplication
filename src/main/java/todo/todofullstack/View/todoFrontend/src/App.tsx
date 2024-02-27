import "./App.css";
import useGlobalState from "./GlobalState";
import FetchAllDataComponent from "./Components/FetchAllData";
import Entries from "./Components/Entry";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./Components/Header";
import Entry from "./Components/Entry";

const App = () => {
  const apiFunctions = useGlobalState((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <header className="header-app">
        <div>Welcome to Notes </div>
      </header>

      <br />

      <div>
        {apiFunctions.entries.map((singleEntryObject) => (
          <Entry
            key={singleEntryObject.id}
            singleEntryParameter={singleEntryObject}
          />
        ))}
      </div>
      <div>
        <FetchAllDataComponent />
      </div>

      <button onClick={() => navigate("/add")}>Add new Entry </button>
    </>
  );
};
export default App;
