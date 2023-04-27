
import './App.css';
import Home from "../src/pages/Home"
import Category from './pages/Category';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { routePath } from './constants/route';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<Category/> }/>
        <Route path={routePath.invalid} element={<Home/> }/>
      </Routes>
    </Router>
  );
}

export default App;
