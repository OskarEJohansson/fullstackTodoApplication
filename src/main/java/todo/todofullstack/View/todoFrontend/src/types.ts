export interface NoteTypes {
  id: string;
  user: string;
  text: string;
  taskCompleted: boolean;
  localDateTime: Date | null;
}
