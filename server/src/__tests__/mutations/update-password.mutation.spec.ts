import { UPDATE_PASSWORD } from "../../schema/mutations";

describe("DELETE PASSWORD MUTATION", () => {
  it("should return success for method", () => {
    expect(UPDATE_PASSWORD).not.toBe(undefined);
  });
});
