import { ListTypes } from "../Interfaces/ListTypes";

interface showEntriesInterface {
  singleEntryParameter: ListTypes;
}

function ShowEntriesComponent({ singleEntryParameter }: showEntriesInterface) {
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

export default ShowEntriesComponent;
