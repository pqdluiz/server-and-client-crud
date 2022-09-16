import { DELETE_USER } from "../../schema/mutations";

describe("DELETE USER MUTATION", () => {
  it("should return success for method", () => {
    expect(DELETE_USER).not.toBe(undefined);
  });
});
