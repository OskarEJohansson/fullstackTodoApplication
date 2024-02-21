import { ListTypes } from "../Interfaces/ListTypes";

interface showMyEntriesInterface {
  singleEntryParameter: ListTypes;
}

function ShowMyEntriesComponent({
  singleEntryParameter,
}: showMyEntriesInterface) {
  try {
    return (
      <div>
        <p>{singleEntryParameter.user}</p>
        <p>{singleEntryParameter.text}</p>
        <input type="checkbox" checked={singleEntryParameter.taskCompleted} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ShowMyEntriesComponent;
