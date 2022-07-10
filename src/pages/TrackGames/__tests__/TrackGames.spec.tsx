import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import TrackGames from "../TrackGames";

describe("Track Games Page Tests", () => {
    it("Should find the heading", () => {
        render(<TrackGames />);

        const heading = screen.getByRole("heading", { level: 1, name: /track games/i });
        expect(heading).toBeInTheDocument();
    });
});
