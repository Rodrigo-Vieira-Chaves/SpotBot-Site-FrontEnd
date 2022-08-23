import { Route, Routes } from 'react-router-dom';
import { BillingPage } from './pages/BillingPage';
import { BotsPage } from './pages/BotsPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterPage } from './pages/RegisterPage';

function App ()
{
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} >
                <Route path="profile" element={<ProfilePage />}/>
                <Route path="bots" element={<BotsPage />} />
                <Route path="billing" element={<BillingPage />}/>
            </Route>
        </Routes>
    );
}

export { App };
