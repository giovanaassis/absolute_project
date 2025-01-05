import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Tutorial from "./src/pages/Tutorial";
import KeyNotes from "./src/pages/KeyNotes";
import Game from "./src/pages/Game";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/key_notes" element={<KeyNotes />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;