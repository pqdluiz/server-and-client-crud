import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Card, Input } from "antd";

import { CREATE_USER } from "../graphql";

interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
}

export const CreateUser: React.FC = () => {
  const [state, setState] = useState<User>({
    name: "",
    username: "",
    password: "",
  });

  const [createUser] = useMutation<User>(CREATE_USER);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState((prevState) => (prevState = { ...state, [name]: value }));
  };

  const onSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();

    createUser({
      variables: {
        name: state.name,
        username: state.username,
        password: state.password,
      },
    });
  };

  return (
    <Card
      bodyStyle={{
        textAlign: "center",
      }}
    >
      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <Button
        type="primary"
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
          onSubmit(event)
        }
      >
        Create User
      </Button>
    </Card>
  );
};
