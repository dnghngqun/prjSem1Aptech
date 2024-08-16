import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/css/LoadingSpinner.css";
const Feedback = lazy(() => import("./components/Feedback/Feedback"));
const Thanks = lazy(() => import("./components/Feedback/Thanks"));
const Sports = lazy(() => import("./components/Sports"));
const Homepage = lazy(() => import("./components/Homepage"));
const TodayInWorld = lazy(() => import("./components/TodayInWorld"));
const Business = lazy(() => import("./components/Business"));
const BusinessChild = lazy(() => import("./components/child/BusinessChild"));
const SportsChild = lazy(() => import("./components/child/SportsChild"));
const TodayChild = lazy(() => import("./components/child/TodayChild"));
const Viewpage = lazy(() => import("./components/viewpage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading-spinner"></div>}>
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
          <Route
            path="/TodayInWorld/:category"
            element={<TodayChild />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
