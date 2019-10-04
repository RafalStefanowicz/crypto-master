import React from "react";

interface SwitchButtonsProps {
  showCurrent: boolean;
  setShowCurrent: (showCurrent: boolean) => void;
}
export const SwitchButtons = ({
  showCurrent,
  setShowCurrent
}: SwitchButtonsProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setShowCurrent(true);
        }}
      >
        Current
      </button>
      <button
        onClick={() => {
          setShowCurrent(false);
        }}
      >
        Completed
      </button>
    </div>
  );
};
