import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

describe("App", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const learnText = screen.getByText(/learn/i);

    expect(learnText).toBeInTheDocument();
});
