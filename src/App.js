import Home from "./routes/Home";
import News from "./routes/News";
import Char from "./routes/Characters";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/char" element={<Char/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
