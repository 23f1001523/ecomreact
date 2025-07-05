// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/Home";
import AppRoutes from "./utils/Routes.jsx";

function App() {
  return (
    <Router>
        <AppRoutes/>
    </Router>
  );
}

export default App;
