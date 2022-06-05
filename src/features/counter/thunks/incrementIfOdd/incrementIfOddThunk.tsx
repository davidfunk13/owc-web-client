// We can also write thunks by hand, which may contain both sync and async logic.

import { AppThunk } from "../../../../app/store";
import { incrementByAmount, selectCount } from "../../counterSlice";

// Here's an example of conditionally dispatching actions based on current state.
const incrementIfOddThunk =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCount(getState());
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
    };

export default incrementIfOddThunk