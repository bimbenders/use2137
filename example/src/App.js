import React, {useState, useEffect} from 'react';
import use2137 from 'use2137';

const App = () => {
  const [ showPapaj, setShowPapaj ] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setShowPapaj(false), 250);
    return () => {
      clearTimeout(timer);
    };
  }, [showPapaj])

  use2137(() => setShowPapaj(true));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          margin: "auto",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10,
          visibility: showPapaj ? "visible" : "hidden" }}
        src={require("./rzulciutki.png")}
      />
      <h1 style={{ fontFamily: "sans-serif" }}>Use the Papieski code</h1>
    </div>
  );
}

export default App
