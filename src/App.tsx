import { useTheme } from "@mui/material";
import PersistentDrawerLeft from "./components/sidebar";

function App() {
  const theme = useTheme();
  console.log("theme?.palette?.containerSecondary?.main", theme?.palette?.containerSecondary?.main);
  return <PersistentDrawerLeft />;
}

export default App;
