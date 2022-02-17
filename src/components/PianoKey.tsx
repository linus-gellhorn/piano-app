import { useEffect, useState } from "react";
import useSound from "use-sound";
import { PianoKeyProps } from "../types";

export default function PianoKey(props: PianoKeyProps): JSX.Element {
  const [play, { stop }] = useSound(props.sound);
  const [active, setActive] = useState(false);

  useEffect(() => {
    props.active ? play() : false && stop();
  }, [props.active, play, stop]);

  const handleMouseDown = () => {
    play();
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
          (props.active || active ? " active" : "")
        }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></button>
    </>
  );
}
