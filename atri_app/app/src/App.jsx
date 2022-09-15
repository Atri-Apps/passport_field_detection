import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import NewTest from "./pages/New_test.jsx";
import ViewTest from "./pages/View_test.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/new_test" element={<NewTest />} />
<Route path="/view_test" element={<ViewTest />} />
    </Routes>
  );
}
