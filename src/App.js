import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Answer from "./components/Answer";
import Navbar from "./components/Navbar";
import Quetions from "./components/Quetions";
import Userlist from "./components/Userlist";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/questions" element={<Quetions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
