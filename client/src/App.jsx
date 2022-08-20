import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { getMonth } from "./pages/calendar/util";
import Calendar from "./pages/calendar/Calendar";
import Navbar from "./components/navbar/Navbar";
import ShortCalendar from "./components/shortCalendar/ShortCalendar";
import "./App.scss";
import ContextWrapper from "./pages/calendar/context/ContextWrapper";

function App() {
  return (    
    <div className="app">
      <Navbar />
      <ContextWrapper>
        <Calendar />
      </ContextWrapper>
    </div>
  );
}

export default App;
