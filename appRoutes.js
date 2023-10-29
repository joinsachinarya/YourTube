import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Body from "./src/components/Body";
import Profile from "./src/components/Profile";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
]);
export default appRouter;