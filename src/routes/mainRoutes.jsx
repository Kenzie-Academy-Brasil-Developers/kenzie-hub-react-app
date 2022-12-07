import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard";
import { Login } from "../pages/Login/login";
import { NotFound } from "../pages/NotFound/notFound";
import { Register } from "../pages/Register/register";

export function RoutesMain () {
    return (
        <Routes>
            <Route path="/"                  element={<Login    />}></Route>
            <Route path="/register"          element={<Register />}></Route>
            <Route path="/dashboard/:userId" element={<Dashboard/>}></Route>
            <Route path="*"                  element={<NotFound />}></Route>
        </Routes>
    )
}