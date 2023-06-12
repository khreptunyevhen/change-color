import colors from "./common/colors";

import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState({ currentIndexColor: 0 });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];

    setColor({ currentIndexColor: randomIndex });
  }, []);

  return (
    <div id="app">
      <h1 id="current-color">{colors[color.currentIndexColor]}</h1>
      <div className="colors">
        {colors.map((itemColor, index) => {
          return (
            <button
              key={`color-${index} `}
              style={{
                backgroundColor: itemColor,
              }}
              className={index === color.currentIndexColor ? "active" : ""}
              onClick={() => {
                document.body.style.backgroundColor = itemColor;
                setColor({ currentIndexColor: index });
              }}
            >
              {}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
