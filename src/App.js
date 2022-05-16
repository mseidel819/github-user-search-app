import { useEffect, useState } from "react";

import { ThemeProvider, Container } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import SearchBar from "./components/search/search.component";
import CardComponent from "./components/card-component/cardcomponent.component";
import { StyledContainer } from "./App.styles.jsx";

import "./App.styles.jsx";

function App() {
  const [search, setsearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://api.github.com/users/octocat");
      const users = await response.json();

      // const getData = async (url) => {
      //   const response = await fetch(url);
      //   return await response.json();
      // };

      // const users = await getData("https://api.github.com/users/octocat");
      setUser(users);
      // console.log(users);
    };

    fetchUsers();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <ThemeProvider theme={lightTheme}> */}
      <StyledContainer disableGutters={true}>
        <SearchBar />
        <CardComponent user={user} theme={darkTheme} />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
