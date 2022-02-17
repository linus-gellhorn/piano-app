import { noteData } from "../types";

export default function findMatchingNoteData(
  notesData: noteData[],
  keypress: string
): noteData | undefined {
  return notesData.find((noteData) => noteData.keyboardPress === keypress);
}
