import NavBar from "./components/NavBar/NavBar";
import { FC } from "react";
import { Route } from "react-router-dom";
import PageNotFound from "./pages/404/404Page";

interface AppProps { }

const App: FC<AppProps> = () => {
    return (
        <>
            <NavBar />
            <Route path={"*"} element={<PageNotFound />} />

        </>
    );
};

export default App;