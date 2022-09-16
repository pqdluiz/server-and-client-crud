import { GET_ALL_USERS } from "../../schema/queries";

describe("GET ALL USERS QUERY", () => {
  it("should return success for method", () => {
    expect(GET_ALL_USERS).not.toBe(undefined);
  });
});
