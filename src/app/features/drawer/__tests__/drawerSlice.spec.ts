import drawerReducer, {
    DrawerState,
} from "../drawerSlice";
  
describe("drawer reducer", () => {
    const initialState: DrawerState = {
        open: false,
    };

    it("should handle initial state", () => {
        expect(drawerReducer(undefined, { type: "unknown" })).toEqual(initialState);
    }); 
});
  