import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercicio from "./exercicio";
import HomePage from "./HomePage";

const App = () => {
    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Exercicio />,
        },
        {
            path: "home",
            element: <HomePage />,
        },
    ]);

    return <RouterProvider router={Router} />;
};

export default App;
