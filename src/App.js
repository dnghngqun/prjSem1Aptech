import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Business from "./components/Business";
import Feedback from "./components/Feedback/Feedback";
import Thanks from "./components/Feedback/Thanks";
import Homepage from "./components/Homepage";
import Sports from "./components/Sports";
import TodayInWorld from "./components/TodayInWorld";
import BusinessChild from "./components/child/BusinessChild";
import SportsChild from "./components/child/SportsChild";
import TodayChild from "./components/child/TodayChild";
import Viewpage from "./components/viewpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/viewpage/:category/:subCategory/:id"
          element={<Viewpage />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/Sports" element={<Sports />}></Route>
        <Route path="/TodayInWorld" element={<TodayInWorld />}></Route>
        <Route path="/Business" element={<Business />}></Route>
        <Route path="/feedback/thanks" element={<Thanks />}></Route>
        <Route path="/Business/:category" element={<BusinessChild />}></Route>
        <Route path="/Sports/:category" element={<SportsChild />}></Route>
        <Route path="/TodayInWorld/:category" element={<TodayChild />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
