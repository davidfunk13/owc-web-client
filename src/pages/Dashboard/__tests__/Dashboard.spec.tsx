import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Dashboard from "../Dashboard";

describe("Dashboard Page Tests", () => {
    it("Should find the heading", () => {
        render(<Dashboard />);

        const heading = screen.getByRole("heading", { level: 1, name: /dashboard/i });

        expect(heading).toBeInTheDocument();
    });
});
