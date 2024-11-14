import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface MyProgressBarProps {
  progress: number;
  color: string;
}

const MyProgressBar: React.FC<MyProgressBarProps> = ({ progress, color }) => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <ProgressBar
        completed={progress}
        bgColor={color}
        height="15px"
        labelAlignment="center"
        labelColor="#fff"
        maxCompleted={100}
        isLabelVisible={false}
        animateOnRender={true}
        transitionDuration="1s"
      />
    </div>
  );
};

export default MyProgressBar;
