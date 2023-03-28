import { Link } from "react-router-dom";
import { useThemeContext } from "../../Context/ThemeContext";
import "./HomePage.css"
// import { useUser } from "../../Context/UserContext";
import logo from "../../logo.png"
function Home() {
  const { theme } = useThemeContext();
  
    return (
    <main className={theme}>
      <h1>Las recetas de mi abuela Gloria</h1>
      <div className="container">
      <img src={logo} alt="Logo Las recetas de mi abuela gloria" className="logoHome"/> 
      <p className="textoHome">Bienvenidos a la página de recetas de mi abuela, una cocinera con más de 20 años de experiencia en la cocina de un palacio. He decido compartir su increible sabiduria y conocimiento de fogones con vosotros para que las recetas de mi abuela no se pierdan nunca. No somos nutricionistas, no hablamos de dietas ni de calorias, solo son recursos para quién los quiera aprovechar. Durante años mi abuela fue recogiendo en una pequeña libreta alguna de sus recetas y ahora están en todo el mundo. </p>
      </div>
      <h3>¡Esperamos que disfrutes cocinando nuestras recetas tanto como nosotros disfrutamos compartiéndolas contigo!</h3>
    </main>
    )
  }
  
  export default Home;
  