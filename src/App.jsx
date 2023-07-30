import React, { useContext, useEffect } from "react";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import axios from "axios";
import MainContext from "./contexts/mainContext.jsx";
import { Button, Flex, MantineProvider } from "@mantine/core";
import List from "./views/users/List";

function App() {
  const [{ user, page, login }, dispatch] = useContext(MainContext);

  useEffect(() => {
    handleIsLoggedIn();
  }, []);

  const handleIsLoggedIn = () => {
    axios
      .get("/api/auth", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") {
          dispatch({ type: "SET_LOGIN", payload: true });
          dispatch({ type: "SET_USER", payload: res.data.data });
          dispatch({ type: "SET_PAGE", payload: <List /> });
        } else {
          dispatch({ type: "SET_LOGIN", payload: false });
          dispatch({ type: "SET_PAGE", payload: <Login /> });
        }
      })
      .catch(() => {});
  };

  const handleLogout = () => {
    axios
      .post("/api/auth/logout", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") {
          dispatch({ type: "SET_LOGOUT" });
        } else alert("Logout failed");
      });
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {page === null ? (
        login ? (
          <div>
            <Button onClick={() => handleLogout()}>Logout</Button>
          </div>
        ) : (
          <Flex gap="md" justify="center" align="center">
            <Button
              onClick={() => {
                dispatch({ type: "SET_PAGE", payload: <Login /> });
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "SET_PAGE", payload: <Register /> });
              }}
            >
              Register
            </Button>
          </Flex>
        )
      ) : (
        page
      )}
    </MantineProvider>
  );
}

export default App;
