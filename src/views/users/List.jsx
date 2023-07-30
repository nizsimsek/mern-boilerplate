import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Flex, Table } from "@mantine/core";
import MainContext from "../../contexts/mainContext";

const List = () => {
  const [, dispatch] = useContext(MainContext);

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data.data);
    });
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
    <>
      <Flex gap="md" justify="center" align="center">
        <Button onClick={getUsers}>List Users</Button>
        <Button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Button>
      </Flex>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;
