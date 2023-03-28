import { ErrorMessage } from "../../Components/Error/ErrorMessage";
import { useThemeContext } from "../../Context/ThemeContext";
import "./NotFoundPage.css"

export default function NotFoundPage () {
  const { theme } = useThemeContext();
  return (
    <main className={theme}>
      <div className="error">
      <img />
    <ErrorMessage message={"Conocemos muchos recovecos del mundo, pero este aún no"} />

      </div>
    </main>
  )
};