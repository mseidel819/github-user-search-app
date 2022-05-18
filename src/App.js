import { useEffect, useState } from "react";

import { ThemeProvider, Grid } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import SearchBar from "./components/search/search.component";
import CardComponent from "./components/card-component/cardcomponent.component";
import { StyledContainer } from "./App.styles.jsx";
import TitleContainer from "./components/title/title.component";

import "./App.styles.jsx";

function App() {
  const [textField, setTextField] = useState("");
  const [search, setSearch] = useState("octocat");
  const [user, setUser] = useState("");
  const [mode, setMode] = useState(true);
  const [colors, setColors] = useState(darkTheme);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const users = await response.json();
      setUser(users);
    };

    fetchUsers();
  }, [search, setSearch]);

  const themeHandler = () => {
    setMode(!mode);
    colors === darkTheme ? setColors(lightTheme) : setColors(darkTheme);
  };

  const textFieldHandler = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTextField(searchFieldString);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("boom");

    setSearch(textField);
  };

  return (
    <ThemeProvider theme={colors}>
      {/* <ThemeProvider theme={lightTheme}> */}
      <StyledContainer>
        <Grid container sx={{ maxWidth: "730px" }}>
          <TitleContainer mode={mode} themeHandler={themeHandler} />
          <SearchBar
            theme={colors}
            searchHandler={searchHandler}
            textFieldHandler={textFieldHandler}
            user={user}
          />
          <CardComponent user={user} theme={colors} />
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
