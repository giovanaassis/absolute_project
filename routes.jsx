import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Tutorial from "./src/pages/Tutorial";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<Tutorial />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;