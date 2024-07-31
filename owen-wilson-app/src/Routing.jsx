import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Movies from "./components/Movies";
import Directors from "./components/Directors";
import LongestMovie from "./components/LongestMovie";
import WowDetails from "./components/WowDetails";


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/directors" element={<Directors />} />
                <Route path="/longestmovie" element={<LongestMovie />} />
                <Route path="/wowdetails" element={<WowDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;