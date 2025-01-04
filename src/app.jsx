import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Transition imports
import { SpotifyProvider } from './utils/SpotifyPlayerLogic';
import SpotifyPlayer from './components/SpotifyPlayer';
import TopBar from './components/TopBar';
import FirstPage from './layouts/FirstPage';
import LoginPage from './layouts/LoginPage';
import Registration1Page from "./layouts/Registration1Page";
import Registration2Page from "./layouts/Registration2Page";
import UserHomePage from './layouts/UserHomePage';
import Discover1Page from './layouts/Discover1Page';

function App() {
  const location = useLocation(); // Tracks route changes for transitions

  return (
    <SpotifyProvider>
      <TopBar />
      <SpotifyPlayer />

      {/* Transition Wrapper */}
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Tracks route keys for animations
          timeout={500} // Animation duration
          classNames="fade" // Uses 'fade' animation classes
        >
          <Routes location={location}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register1" element={<Registration1Page />} />
            <Route path="/register2" element={<Registration2Page />} />
            <Route path="/user-home" element={<UserHomePage />} />
            <Route path="/discover1" element={<Discover1Page />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </SpotifyProvider>
  );
}

export default App;
