import { CREATE_USER } from "../../schema/mutations";

describe("CREATE USER MUTATION", () => {
  it("should return success for method", () => {
    expect(CREATE_USER).not.toBe(undefined);
  });
});
