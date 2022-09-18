import { render } from "@testing-library/react";
import { ListOfUsers } from "../../pages";

describe("ListOfUsers", () => {
  it("should return success for rendering component", () => {
    render(<ListOfUsers />);
  });
});
