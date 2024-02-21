import { ListTypes } from "../Interfaces/ListTypes";

interface showMyEntriesInterface {
  showSingelEntryParamter: ListTypes;
}

function ShowMyEntriesComponent({
  showSingelEntryParamter,
}: showMyEntriesInterface) {
  try {
    return (
      <div>
        <p>{showSingelEntryParamter.user}</p>
        <p>{showSingelEntryParamter.text}</p>
        <input
          type="checkbox"
          checked={showSingelEntryParamter.taskCompleted}
        />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ShowMyEntriesComponent;
