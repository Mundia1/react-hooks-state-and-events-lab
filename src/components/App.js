import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  const appClass = isDarkMode ? "App dark" : "App light";

  // Event handler for toggling dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
