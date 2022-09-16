import { GraphQLList } from "graphql";

import { Users } from "../../entities";
import { UserType } from "../typedefs";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): Promise<Users[]> {
    return Users.find();
  },
};
