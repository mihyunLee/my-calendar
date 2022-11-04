import { useState } from "react";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <ToggleButton isToggle={isToggle} onClick={handleClickToggle} />
    </div>
  );
}

export default App;
