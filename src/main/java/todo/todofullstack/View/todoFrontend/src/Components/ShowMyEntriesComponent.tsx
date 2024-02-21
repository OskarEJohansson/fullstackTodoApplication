import { ListTypes } from "../Interfaces/ListTypes";

interface showMyEntriesInterface {
  singelEntryParamter: ListTypes;
}

function ShowMyEntriesComponent({
  singelEntryParamter,
}: showMyEntriesInterface) {
  try {
    return (
      <div>
        <p>{singelEntryParamter.user}</p>
        <p>{singelEntryParamter.text}</p>
        <input type="checkbox" checked={singelEntryParamter.taskCompleted} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ShowMyEntriesComponent;
