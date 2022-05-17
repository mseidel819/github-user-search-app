import { useEffect, useState } from "react";

import { ThemeProvider, Container, Button, Grid } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import SearchBar from "./components/search/search.component";
import CardComponent from "./components/card-component/cardcomponent.component";
import { StyledContainer } from "./App.styles.jsx";
import TitleContainer from "./components/title/title.component";

import "./App.styles.jsx";

function App() {
  const [search, setsearch] = useState("");
  const [user, setUser] = useState("");
  const [mode, setMode] = useState(true);
  const [colors, setColors] = useState(darkTheme);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://api.github.com/users/octocat");
      const users = await response.json();
      setUser(users);
    };

    fetchUsers();
  }, []);

  const themeHandler = () => {
    setMode(!mode);
    colors === darkTheme ? setColors(lightTheme) : setColors(darkTheme);
  };

  return (
    <ThemeProvider theme={colors}>
      {/* <ThemeProvider theme={lightTheme}> */}
      <StyledContainer>
        <TitleContainer mode={mode} themeHandler={themeHandler} />
        <SearchBar />
        <CardComponent user={user} theme={darkTheme} />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
