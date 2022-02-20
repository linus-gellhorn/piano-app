import { useEffect, useState } from "react";
import useSound from "use-sound";
import { PianoKeyProps } from "../types";

export default function PianoKey(props: PianoKeyProps): JSX.Element {
  const [play, { stop }] = useSound(props.sound);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.pianoOn) {
      props.active ? play() : false && stop();
    }
  }, [props.active, play, stop, props.pianoOn]);

  const handleMouseDown = () => {
    if (props.pianoOn) {
      play();
    }
    setActive(!active);
  };

  const handleMouseUp = () => {
    setActive(!active);
  };

  return (
    <>
      <button
        className={
          (props.name.includes("#") ? "sharp" : "natural") +
          ((props.active || active) && props.name.includes("#")
            ? " sharp-active"
            : "") +
          ((props.active || active) && !props.name.includes("#")
            ? " natural-active"
            : "")
        }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></button>
    </>
  );
}
