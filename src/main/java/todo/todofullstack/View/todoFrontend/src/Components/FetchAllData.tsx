import axios from "axios";
import useGlobalState from "../GlobalState";
import { useEffect } from "react";
useEffect;

const URL = "http://localhost:8080/api";

const FetchAllDataComponent = () => {
  const apiFunctions = useGlobalState((state) => state);

  const fetchAllDataFunction = async () => {
    try {
      const response = await axios.get(`${URL}/get-all-entries`);

      if (response.status === 200) {
        apiFunctions.setEntries(response.data.entries);

        console.log(response.data.message);
      } else {
        console.log(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchAllDataFunction();
  }, []);

  return <button onClick={fetchAllDataFunction}>Hämta Data</button>;
};

export default FetchAllDataComponent;
