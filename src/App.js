import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
