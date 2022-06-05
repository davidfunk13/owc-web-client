//deal with this when you set shit up.

const customRender = (
//     ui,
//     {
//       initialState = reducerInitialState,
//       store = createStore(reducer, initialState),
//       theme = defaultTheme,
//       locale = defaultLocale,
//       ...renderOptions
//     }
  ) => {
//     function Wrapper({ children }) {
//       return (
//         <ThemeProvider theme={theme}>
//           <IntlProvider locale={locale}>
//             <Provider store={store}>{children}</Provider>
//           </IntlProvider>
//         </ThemeProvider>
//       );
//     }
//     return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  };

  // re-export everything
  export * from "@testing-library/react";
  // override render method
  export { customRender as render };
  