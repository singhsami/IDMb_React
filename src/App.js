import './App.css';
import Home from "../src/pages/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "../src/components/common/Header"
import Recipes from './pages/Recipes';
import RecipeDetails from './components/common/RecipeDetails';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
        
     
    </Router>
  );
}

export default App;
