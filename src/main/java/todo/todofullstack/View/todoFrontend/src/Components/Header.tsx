import { useNavigate } from "react-router-dom";
import useGlobalState from "../GlobalState";
import { Key, useState } from "react";
import FetchAllDataComponent from "./FetchAllData";

const HeaderNav = () => {
  const navigate = useNavigate();

  const apiFunctions = useGlobalState();
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e) => {
    if (e.Key === "Enter") {
      apiFunctions.setUserName(userName);
      FetchAllDataComponent();
      navigate("/user-specific-entries");
    }
  };

  return (
    <nav className="header-nav">
      <div className="header-div">
        <section className="header-section-left">
          <button onClick={() => navigate("/")}>Home</button>
        </section>

        <section className="header-section-right">
          <button onClick={() => navigate("/user-specific-entries")}>
            Search
          </button>
          <input
            type="text"
            onKeyDown={handleKeyDown}
            placeholder="Search User specific Notes"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </section>
      </div>
    </nav>
  );
};

export default HeaderNav;
