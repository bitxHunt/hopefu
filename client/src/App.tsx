import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Features Routes
import { Quiz } from "./features/quiz/components/quiz";
import { Login } from "./features/auth/components/login";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
