import { useThemeContext } from "../../Context/ThemeContext";
import "./AboutPage.css"
function About() {
  const { theme } = useThemeContext();
    return (
      <main className={theme}>
        <div className="about">
          <h2>Las recetas de mi abuela Gloria</h2>  
          <p> Nos presentamos, mi abuela, cocinera en un palacio durante 20 años, con más de 30 años de experiencia como abuela. Yo, comunicadora y desarrolladora junior, con cero experiencia en cocina. </p>
          
        </div>
    </main>


    )
  }
  
  export default About;
  