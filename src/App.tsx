import { useEffect, useState } from "react";

import { ThemeProvider, Grid } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import SearchBar from "./components/search/search.component";
import CardComponent from "./components/card-component/cardcomponent.component";
import { StyledContainer } from "./App.styles";
import TitleContainer from "./components/title/title.component";

export type User = {
  avatar_url: URL | null;
  bio: string | null;
  blog: URL | null;
  company: string;
  created_at: Date;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: URL;
  following: number;
  following_url: URL;
  gists_url: URL;
  gravatar_id: string;
  hireable: boolean;
  html_url: URL;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: URL;
  public_gists: number;
  public_repos: number;
  received_events_url: URL;
  repos_url: URL;
  site_admin: boolean;
  starred_url: URL;
  subscriptions_url: URL;
  twitter_username: "string" | null;
  type: string;
  updated_at: string;
  url: URL;
};
export type notFound = {
  documentation_url: "https://docs.github.com/rest/reference/users#get-a-user";
  message: "Not Found";
};

function App() {
  const [textField, setTextField] = useState("");
  const [search, setSearch] = useState("octocat");
  const [user, setUser] = useState<User | "" | notFound>("");
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
  console.log(user);
  const themeHandler = () => {
    setMode(!mode);
    colors === darkTheme ? setColors(lightTheme) : setColors(darkTheme);
  };

  const textFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTextField(searchFieldString);
  };

  const searchHandler = (e: Event) => {
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
