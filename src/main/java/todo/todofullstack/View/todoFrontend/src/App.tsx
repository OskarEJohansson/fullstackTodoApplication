import "./App.css";
import useGlobalState from "./GlobalState";
import FetchAllDataComponent from "./Components/FetchAllData";
import Entries from "./Components/Entries";
import { useNavigate } from "react-router-dom";

function App() {
  const apiFunctions = useGlobalState((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <div>Welcome to your Notes </div>
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
      <button onClick={() => navigate("/add")}>Add new Entry </button>
    </>
  );
}

export default App;
