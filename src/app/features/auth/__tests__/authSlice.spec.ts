import authReducer, {
    initialState as initialAuthState, setIsAuthenticated
} from "../authSlice";
import AuthState from "../AuthState";

const mockState: AuthState = {
    isAuthenticated: false,
    user: null
};

describe("counter reducer", () => {
    it("Should handle initial Counter state", () => {
        expect(authReducer(undefined, { type: "unknown" })).toEqual(initialAuthState);
    });

    it("should handle setIsAuthenticated", () => {
        const actual = authReducer(mockState, setIsAuthenticated(true));
        expect(actual.isAuthenticated).toEqual(true);
    });
});
