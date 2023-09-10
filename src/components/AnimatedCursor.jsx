import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={5}
        outerSize={24}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "RGB(1, 246, 255",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      />
    </div>
  );
}
