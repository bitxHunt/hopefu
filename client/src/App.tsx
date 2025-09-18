import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Features Routes
import { Quiz } from "./features/quiz/components/quiz";
import { Login } from "./features/auth/components/login";
import { Inventory } from "./features/inventory/components/inventory";
// import { Journaling } from "./features/journaling/components/journaling";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        {/* <Route path="/journaling" element={<Journaling />}></Route> */}
      </Routes>
    </Router>
  );
}
