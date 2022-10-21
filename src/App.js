import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFr from "./pages/HomeFr";
import HomeEn from "./pages/HomeEn";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeFr />} />
                    <Route path="/en" element={<HomeEn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
