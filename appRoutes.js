import { createBrowserRouter } from "react-router-dom";
import Sidebar from "./src/components/sidebar";
import ErrorComponent from "./src/components/Error";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        errorElement: <ErrorComponent />

    },
])

export default appRouter