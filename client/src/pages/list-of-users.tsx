import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Card } from "antd";

import { GET_ALL_USERS } from "../graphql/queries";
import { DELETE_USER } from "../graphql/mutation";

interface Users {
  id: number;
  name: string;
  username: string;
  password: string;
}

interface GetAllUsers {
  getAllUsers: Users[];
}

export const ListOfUsers: React.FC = () => {
  const { data } = useQuery<GetAllUsers>(GET_ALL_USERS);
  const [deleteUser] = useMutation<Users>(DELETE_USER);

  return (
    <Card
      bodyStyle={{
        textAlign: "center",
      }}
    >
      {data &&
        data.getAllUsers.map((user: Users, index: number) => {
          return (
            <div key={index}>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </Card>
  );
};
