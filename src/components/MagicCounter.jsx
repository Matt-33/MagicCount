import { useState } from "react";
import "./MagicCounter.css";

export function MagicCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Déterminer si le compteur est un multiple de 5
  const isMagicNumber = count % 5 === 0 && count !== 0;

  return (
    <div
      className="magic-counter"
      style={{ backgroundColor: isMagicNumber ? "#D4F1F4" : "#FDEDEC" }}
    >
      <h1>{count}</h1>
      {isMagicNumber && <p>✨ Nombre magique atteint ! ✨</p>}

      <div className="buttons">
        <button onClick={increment}>Augmenter</button>
        <button onClick={decrement}>Diminuer</button>
        <button onClick={reset}>Réinitialiser</button>
      </div>
    </div>
  );
}
