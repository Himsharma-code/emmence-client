import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getUsers } from "../../../redux/actions";
import { Container, Typography } from "@mui/material";
import UserCard from "../../../components/UserCard";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((s) => s.users);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        sx={{ marginBottom: "10px", textAlign: "left" }}
        component="h1"
        variant="h5"
      >
        Users
      </Typography>
      <div>
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </Container>
  );
};

export default UserList;
