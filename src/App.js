import { useState } from "react";
import Calendar from "./components/Calendar";
import CalendarTemplate from "./components/CalendarTemplate";
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
      <CalendarTemplate>
        <Calendar />
      </CalendarTemplate>
      <Footer />
    </div>
  );
}

export default App;
