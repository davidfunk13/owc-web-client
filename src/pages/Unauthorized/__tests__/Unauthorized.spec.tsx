import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Unauthorized from "../Unauthorized";

describe("Unauthorized Page Tests", () => {
    it("Should find the heading", () => {
        render(<Unauthorized />);

        const heading = screen.getByRole("heading", { level: 1, name: /unauthorized/i });

        expect(heading).toBeInTheDocument();
    });
});
