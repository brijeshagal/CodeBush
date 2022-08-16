import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { getMonth } from "./pages/calendar/util";
import Calendar from "./pages/calendar/Calendar";
import Navbar from "./components/navbar/Navbar";
import ShortCalendar from "./components/shortCalendar/ShortCalendar";
import "./App.scss";
function App({getMonth}) {  
  return (
    // const [currentMonth, setCurrentMonth] = useState(getMonth());
    <div className="app">
      <Navbar />
      {/* <Calendar/> */}
      <ShortCalendar/>
      {/* <ShortCalendar month = {getMonth}/> */}
      {/* <Calendar/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
