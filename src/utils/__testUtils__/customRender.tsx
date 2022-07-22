import { FC, ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import MuiThemeProvider from "../../providers/MuiThemeProvider/MuiThemeProvider";
import { generateStoreWithInitialState, store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import ICustomRender from "../../types/ICustomRender";

interface CustomProviderWrapperProps {
    children: ReactNode
    initialState?: ICustomRender
}


const TestWrapper: FC<CustomProviderWrapperProps> = ({ children, initialState }) => {
    const mockStore = initialState ? generateStoreWithInitialState(initialState) : store;

    return (
        <Provider store={mockStore}>
            <MuiThemeProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

// const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: CustomProviderWrapper, ...options });
const customRender = (ui: ReactElement, initialState?: ICustomRender) => {

    render(ui, {
        wrapper: (props) => {
            const { children } = props;

            return (
                <TestWrapper initialState={initialState}>{children}</TestWrapper>
            );
        }
    });
};

export * from "@testing-library/react";
export { customRender as render };