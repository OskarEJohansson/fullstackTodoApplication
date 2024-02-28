import useGlobalState from "../GlobalState";
import axios from "axios";
import Entry from "./Entry";

export const FetchUserData = () => {
  const apiFunctions = useGlobalState();

  const fetchUserSpecificData = async () => {
    const response = await axios.get(
      `${apiFunctions.URL("get-userspecific-entries/")}${apiFunctions.userName}`
    );

    if (response.status === 200) {
      apiFunctions.setUserSpecificEntries(response.data);
    } else {
      console.log(response.status);
    }
  };

  return (
    <div>
      User: {apiFunctions.userName}
      <div>
        {apiFunctions.entries.map((singleEntryObject) => (
          <Entry
            key={singleEntryObject.id}
            singleEntryParameter={singleEntryObject}
          />
        ))}
      </div>
    </div>
  );
};
