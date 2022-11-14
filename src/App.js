import React from "react";
import Calendar from "./components/Calendar";
import CalendarTemplate from "./components/CalendarTemplate";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <ToggleButton />
        <CalendarTemplate>
          <Calendar />
        </CalendarTemplate>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
