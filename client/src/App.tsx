import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Features Routes
import { Quiz } from "./features/quiz/components/quiz";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />}></Route>
      </Routes>
    </Router>
  );
}
