import { useRoutes } from "react-router-dom/dist";
import Landing from "./layouts/Landing/Landing";
import MorePage from "./components/MorePage";
import SearchPage from "./components/SearchPage";

export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'/more/:id',
        element: <MorePage /> 
       },
       {
        path:'/search',
        element: <SearchPage /> 
       },
    ])
    return element
}