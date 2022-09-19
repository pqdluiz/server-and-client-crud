import React, { useState } from "react";
import { FetchResult, useMutation } from "@apollo/client";
import { Card } from "antd";

import { UPDATE_PASSWORD } from "../graphql/mutation";

interface UpdateUser {
  username: string;
  currentPassword: string;
  newPassword: string;
}

export const UpdatePassword: React.FC = () => {
  const [state, setState] = useState<UpdateUser>({
    username: "",
    currentPassword: "",
    newPassword: "",
  });

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState((prevState) => (prevState = { ...state, [name]: value }));
  };

  const onSubmit = (): Promise<FetchResult<any>> => {
    return updatePassword({
      variables: {
        username: state.username,
        oldPassword: state.currentPassword,
        newPassword: state.newPassword,
      },
    });
  };

  return (
    <Card
      bodyStyle={{
        textAlign: "center",
      }}
    >
      <input
        type="text"
        name="username"
        placeholder="Username..."
        onChange={handleChange}
      />
      <input
        type="password"
        name="currentPassword"
        placeholder="Current Password..."
        onChange={handleChange}
      />
      <input
        type="password"
        name="newPassword"
        placeholder="New Password..."
        onChange={handleChange}
      />

      <button onClick={onSubmit}>UPDATE PASSWORD</button>
    </Card>
  );
};
