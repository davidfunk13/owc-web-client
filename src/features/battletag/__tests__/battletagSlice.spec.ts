import counterReducer, {
    initialState as initialBattletagState
} from "../battletagSlice";
// import IBattletagSliceState from "../IBattletagSliceState";

// const mockState: IBattletagSliceState = {
//     battletags: []    
// };

describe("Battletag reducer", () => {
    it("Should handle initial Battletag state", () => {
        expect(counterReducer(undefined, { type: "unknown" })).toEqual(initialBattletagState);
    });
});
