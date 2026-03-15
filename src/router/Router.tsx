import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/not found/NotFound";
import App from "../App";

export const Router = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: ":coinId",
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />
        },
    ]);
};