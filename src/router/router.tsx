import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import {Home} from "@/pages/Home";
import {HomeDetails} from "@/pages/HomeDetails.tsx";

export const root = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="details" element={<HomeDetails/>}/>
        </Route>
    )
);
