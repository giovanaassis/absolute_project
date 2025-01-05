import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Tutorial from "./src/pages/Tutorial";
import KeyNotes from "./src/pages/KeyNotes";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/key_notes" element={<KeyNotes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;