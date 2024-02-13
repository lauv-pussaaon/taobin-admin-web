import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import AppLayout from "./ui/layouts/AppLayout";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to="/dashboard" />}
                        />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="machines" element={<Machines />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
