import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { initialState as initialThemeState } from "./features/theme/themeSlice";

describe("App", () => {
    it("Should render", ()=>{
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const component = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        
        expect(store.getState().theme.dark).toBe(initialThemeState.dark);
        expect(component).toBe(component);
    });
});
