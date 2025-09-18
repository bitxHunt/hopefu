import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Features Routes
import { Quiz } from "./features/quiz/components/quiz";
import { Inventory } from "./features/inventory/components/inventory";
import { Journaling } from "./features/journaling/components/journaling";
import {  JarGame } from "./features/jarGame/components/jarGame";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/journaling" element={<Journaling />}></Route>
        <Route path="/choicesInAJar" element={<JarGame />}></Route>
      </Routes>
    </Router>
  );
}
