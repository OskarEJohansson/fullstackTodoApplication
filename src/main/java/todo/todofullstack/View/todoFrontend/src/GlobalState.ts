import { create } from "zustand";
import { ListTypes } from "./Interfaces/ListTypes";

interface GlobalStateInterface {
  entries: ListTypes[];
  addEntry: (saveNewEntry: ListTypes) => void;
  removeEntry: (id: string) => void;
  updateEntry: (id: string, taskCompleted?: boolean) => void;
  setEntries: (setNewEntries: ListTypes[]) => void;
}

const useGlobalState = create<GlobalStateInterface>((set) => ({
  entries: [],
  addEntry: (saveNewEntry: ListTypes) =>
    set((state) => ({
      entries: [...state.entries, saveNewEntry],
    })),

  removeEntry: (id: string) => {
    set((state) => ({
      entries: state.entries.filter(
        (singleEntryFromFilter) => singleEntryFromFilter.id !== id
      ),
    }));
  },

  updateEntry: (id: string, taskCompleted?: boolean) =>
    set((state) => ({
      entries: state.entries.map((existingEntry) => {
        if (existingEntry.id !== id) return existingEntry;

        return {
          ...existingEntry,
          ...(taskCompleted !== undefined && { taskCompleted: taskCompleted }),
        };
      }),
    })),

  setEntries: (setNewEntries: ListTypes[]) =>
    set(() => ({
      entries: setNewEntries,
    })),
}));

export default useGlobalState;
