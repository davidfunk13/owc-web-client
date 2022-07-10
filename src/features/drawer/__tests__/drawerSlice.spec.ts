import drawerReducer, {
    initialState as initialDrawerState
} from "../drawerSlice";

describe("Drawer reducer", () => {
    it("Should handle initial Drawer state", () => {
        expect(drawerReducer(undefined, { type: "unknown" })).toStrictEqual(initialDrawerState);
    });
});
