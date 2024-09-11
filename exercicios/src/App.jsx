import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercicio from "./exercicio";
import HomePage from "./HomePage";
import { register } from "swiper/element/bundle";
import "swiper/css";

register();
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

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
