import { FC, ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import MuiThemeProvider from "../providers/MuiThemeProvider/MuiThemeProvider";

interface CustomProviderWrapperProps { children: ReactNode }

const CustomProviderWrapper: FC<CustomProviderWrapperProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <MuiThemeProvider>
                {children}
            </MuiThemeProvider>
        </Provider>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: CustomProviderWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };