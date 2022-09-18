import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./services";
import { CreateUser, ListOfUsers, UpdatePassword } from "./pages";
import { Header } from "./components";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <CreateUser />
        <ListOfUsers />
        <UpdatePassword />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </ApolloProvider>
  );
};

export default App;
