import { useState } from "react";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ToggleButton isToggle={isToggle} onClick={handleClickToggle} />
      <Footer />
    </div>
  );
}

export default App;
