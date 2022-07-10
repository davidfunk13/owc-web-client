import themeReducer, { initialState as initialThemeState, resetThemeSlice, setDark } from "../themeSlice";
import ThemeSliceState from "../ThemeSliceState";

const mockState: ThemeSliceState = { dark: true };

describe("Theme reducer", () => {
    it("Should handle initial snackbar state", () => {
        expect(themeReducer(undefined, { type: "unknown" })).toEqual(initialThemeState);
    });

    it("Should handle dark mode toggle", () => {
        const actual = themeReducer(undefined, setDark(true));
        expect(actual.dark).toBe(true);
    });

    it("Should handle light mode toggle", () => {
        const actual = themeReducer(mockState, setDark(false));
        expect(actual.dark).toBe(false);
    });

    it("Should a theme slice reset", () => {
        const actual = themeReducer(mockState, resetThemeSlice());
        expect(actual).toStrictEqual(initialThemeState);
    });
});
