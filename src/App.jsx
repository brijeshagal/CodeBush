import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { getMonth } from "./pages/calendar/util";
import Calendar from "./pages/calendar/Calendar";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
function App() {  
  return (
    
    <div className="App">
      <Navbar />
      <Calendar/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
