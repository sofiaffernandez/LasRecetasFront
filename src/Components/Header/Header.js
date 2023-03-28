import { Link } from "react-router-dom";
//import de logo para el header
import logo from "../../gloria.png"
//import icono 

//import del cambio de tema
import  ThemeSwitcher   from "./../ThemeSwitcher/ThemeSwitcher";


//import css
import "./Header.css"

const Header = () => {


  return (
    <header className="principal">
        <nav>
            <ul>
                <li className="logoPagina">
                    <Link to="/" >
                    <img src={logo} alt ="logo pagina" />
                    </Link>
                </li>
                <li>
                    <Link to="/" className="my-link">
                    Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/recetas" className="my-link">
                    Recetas
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="my-link">
                    Sobre nosotras
                    </Link>
                </li>
               
              <li>
                <Link to="/usuario/login" className="my-link" >Accede</Link>
              </li>
              <li>
                <Link to="/usuario/crear" className="my-link" >Únete</Link>
              </li>
           
      <li>
      <ThemeSwitcher />
      </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
