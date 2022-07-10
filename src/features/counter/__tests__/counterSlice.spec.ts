import counterReducer, {
    increment,
    decrement,
    incrementByAmount,
    initialState as initialCounterState
} from "../counterSlice";
import CounterSliceSate from "../CounterSliceState";

const mockState: CounterSliceSate = {
    value: 3,
    status: "idle",
};

describe("Counter reducer", () => {
    it("Should handle initial Counter state", () => {
        expect(counterReducer(undefined, { type: "unknown" })).toEqual(initialCounterState);
    });

    it("should handle increment", () => {
        const actual = counterReducer(mockState, increment());
        expect(actual.value).toEqual(4);
    });

    it("should handle decrement", () => {
        const actual = counterReducer(mockState, decrement());
        expect(actual.value).toEqual(2);
    });

    it("should handle incrementByAmount", () => {
        const actual = counterReducer(mockState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
