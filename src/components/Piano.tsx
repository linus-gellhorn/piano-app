// TODO:
// 1. Add piano on button to simulate necessary initial click to enable sound

import { useState } from "react";
import { noteData } from "../types";
import findMatchingNoteData from "../utils/findMatchingNoteData";
import PianoKey from "./PianoKey";

export const notesData: noteData[] = [
  { note: "C4", sound: "/sounds/C4.wav", keyboardPress: "z" },
  { note: "C#4", sound: "/sounds/Csharp4.wav", keyboardPress: "s" },
  { note: "D4", sound: "/sounds/D4.wav", keyboardPress: "x" },
  { note: "D#4", sound: "/sounds/Dsharp4.wav", keyboardPress: "d" },
  { note: "E4", sound: "/sounds/E4.wav", keyboardPress: "c" },
  { note: "F4", sound: "/sounds/F4.wav", keyboardPress: "v" },
  { note: "F#4", sound: "/sounds/Fsharp4.wav", keyboardPress: "g" },
  { note: "G4", sound: "/sounds/G4.wav", keyboardPress: "b" },
  { note: "G#4", sound: "/sounds/Gsharp4.wav", keyboardPress: "h" },
  { note: "A4", sound: "/sounds/A4.wav", keyboardPress: "n" },
  { note: "A#4", sound: "/sounds/Asharp4.wav", keyboardPress: "j" },
  { note: "B4", sound: "/sounds/B4.wav", keyboardPress: "m" },
];

export default function Piano(): JSX.Element {
  const [activeNotes, setActiveNotes] = useState<{
    [noteName: string]: boolean;
  }>({});

  function updateActiveNote(eventKey: string, newActiveNote: boolean) {
    const matchedNoteData = findMatchingNoteData(notesData, eventKey);
    if (matchedNoteData) {
      const activeNotesCopy = { ...activeNotes };
      activeNotesCopy[matchedNoteData.note] = newActiveNote;
      setActiveNotes(activeNotesCopy);
    }
  }

  const handleKeyDown = (key: string) => {
    updateActiveNote(key, true);
  };

  const handleKeyUp = (key: string) => {
    updateActiveNote(key, false);
  };

  return (
    <>
      <h1>Piano App</h1>
      <p>Click the piano first to start using the keys</p>
      <p>Press 'z' for middle C, 's' for C#, 'x' for 'D', etc.</p>
      <div
        onKeyDown={(event) => handleKeyDown(event.key)}
        onKeyUp={(event) => handleKeyUp(event.key)}
      >
        {notesData.map((noteData) => (
          <PianoKey
            key={noteData.note}
            name={noteData.note}
            sound={noteData.sound}
            keyboardPress={noteData.keyboardPress}
            active={activeNotes[noteData.note] ?? false}
          />
        ))}
      </div>
    </>
  );
}
