import Home from "./routes/Home";
import News from "./routes/News";
import Char from "./routes/Characters";
import Info from "./routes/Information";
import Board from "./routes/Board";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/board"} element={<Board/>}/>
        <Route path={process.env.PUBLIC_URL + "/info"} element={<Info/>}/>
        <Route path={process.env.PUBLIC_URL + "/char"} element={<Char/>}/>
        <Route path={process.env.PUBLIC_URL + "/news"}element={<News/>}/>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
