import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Dashboard from "../Dashboard";

describe("Dashboard Page Tests", () => {
    it("Should find the heading", () => {
        render(<Dashboard />);

        const heading = screen.getByRole("heading", { name: "Dashboard" });

        expect(heading).toBeInTheDocument();
    });
});
