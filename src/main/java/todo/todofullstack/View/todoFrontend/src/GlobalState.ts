import { create } from "zustand";
import { NoteTypes } from "./types";

interface GlobalStateInterface {
  entries: NoteTypes[];
  addEntry: (saveNewEntry: NoteTypes) => void;
  removeEntry: (id: string) => void;
  updateEntry: (id: string, taskCompleted?: boolean) => void;
  setEntries: (setNewEntries: NoteTypes[]) => void;
  setUserSpecificEntries: (setNewEntries: NoteTypes[]) => void;
  URL: (path: string) => string;
  userName: string;
  setUserName: (setUserName: string) => void;
}

const useGlobalState = create<GlobalStateInterface>((set) => ({
  entries: [],
  userName: "",
  addEntry: (saveNewEntry: NoteTypes) =>
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

  setEntries: (setNewEntries: NoteTypes[]) =>
    set(() => ({
      entries: setNewEntries,
    })),

  setUserSpecificEntries: (setNewEntries: NoteTypes[]) =>
    set(() => ({
      entries: setNewEntries,
    })),

  URL: (path: string) => `http://localhost:8080/api${path}`,

  setUserName: (setUserName: string) =>
    set(() => ({
      userName: setUserName,
    })),
}));

export default useGlobalState;
