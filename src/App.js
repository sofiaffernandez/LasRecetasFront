//Identificar las rutas internas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Para comunicarnos con el usuario, errores y procesos
import { ToastContainer } from "react-toastify";
//CSS del Toast
import "react-toastify/dist/ReactToastify.css";
//CSS Global
import './App.css';
//Import de las diferentes paginas
import Login from './Pages/LoginPage/LoginPage';
import Registro from "./Pages/RegisterPage/RegisterPage";
import About from "./Pages/AboutPage/AboutPage"
import Home from "./Pages/HomePage/HomePage"
import NotFoundPage  from "./Pages/NotFoundPage/NotFoundPage";

//import componentes
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//Import para día o noche
import {ThemeProvider} from "./Context/ThemeContext";


import './App.css';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
     <ThemeProvider >
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/usuario/login" element={<Login />} />
        <Route path="/usuario/crear" element={<Registro />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      </Router>
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
  </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
