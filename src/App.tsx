import Container from "@mui/material/Container";
import { Main } from "./components/Main";
import NavigationRoutes from "./router-navigation/NavigationRoutes";
import { useTheme } from "@mui/material";
import PersistentDrawerLeft from "./components/sidebar";

function App() {
  const theme = useTheme();
  console.log("theme?.palette?.containerSecondary?.main", theme?.palette?.containerSecondary?.main);
  return <PersistentDrawerLeft />;
}

export default App;
