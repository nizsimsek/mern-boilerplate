import React, { useContext, useState } from "react";
import axios from "axios";
import List from "../users/List";
import MainContext from "../../contexts/mainContext.jsx";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useContext(MainContext);

  const handleLogin = () => {
    dispatch({ type: "LOADING", payload: true });
    axios
      .post("/api/auth/login", { email, password }, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") {
          dispatch({ type: "SET_LOGIN", payload: true });
          dispatch({ type: "SET_USER", payload: res.data.data });
          dispatch({ type: "SET_PAGE", payload: <List /> });
        } else alert("Login failed");
      })
      .catch(console.error)
      .finally(() => dispatch({ type: "LOADING", payload: false }));
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor
          size="sm"
          component="button"
          onClick={() => {
            dispatch({ type: "SET_PAGE", payload: <Register /> });
          }}
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="user@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button
          fullWidth
          mt="xl"
          onClick={() => {
            handleLogin();
          }}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
