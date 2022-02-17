import { notesData } from "../components/Piano";
import findMatchingNoteData from "./findMatchingNoteData";

test("Finds the note data that corresponds to a particular key press", () => {
  expect(findMatchingNoteData(notesData, "z")).toStrictEqual({
    note: "C4",
    sound: "/sounds/C4.wav",
    keyboardPress: "z",
  });

  expect(findMatchingNoteData(notesData, "m")).toStrictEqual({
    note: "B4",
    sound: "/sounds/B4.wav",
    keyboardPress: "m",
  });

  expect(findMatchingNoteData(notesData, "q")).toBeUndefined();
});
