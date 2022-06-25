import snackbarReducer, { initialState as initialSnackbarState, openSnackbar, resetSnackbarSlice, setSnackbarMessage, setSnackbarVariant } from "../snackbarSlice";
import SnackbarSliceState from "../SnackbarSliceState";

const mockMessage = "Hey now, I've farted.";
const mockState: SnackbarSliceState = { open: true, message: mockMessage, variant: "error" };

describe("Snackbar Reducer", () => {
    it("Should handle initial snackbar state", () => {
        expect(snackbarReducer(undefined, { type: "unknown" })).toEqual(initialSnackbarState);
    });

    it("Should handle opening snackbar", () => {
        const actual = snackbarReducer(undefined, openSnackbar(true));
        expect(actual.open).toBe(true);
    });

    it("Should handle closing the snackbar", () => {
        const actual = snackbarReducer(undefined, openSnackbar(false));
        expect(actual.open).toBe(false);
    });

    it("Should handle setting a snackbar message", () => {
        const actual = snackbarReducer(undefined, setSnackbarMessage(mockMessage));
        expect(actual.message).toBe(mockMessage);
    });

    it("Should handle setting a snackbar variant", () => {
        const actual = snackbarReducer(undefined, setSnackbarVariant("error"));
        expect(actual.variant).toBe("error");
    });

    it("Should handle a snackbar slice reset", () => {
        const actual = snackbarReducer(mockState, resetSnackbarSlice());
        expect(actual).toStrictEqual(initialSnackbarState);
    });
});
