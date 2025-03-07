import { BUTTON_VARIANTS } from '../../constants/styles';
import Button from '../../components/Button';
import Logo from '../../assets/Logo.svg';
import Hero from '../../assets/Hero.svg';
import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="title">
                <Logo />
                <h1>TuneTrack</h1>
                <p>
                    Discover, track, and favorite your top artists while staying
                    in sync with your Spotify playlist - all in one place.
                </p>
                <div>
                    <Button
                        variant={BUTTON_VARIANTS.Secondary}
                        onClick={() => navigate('/home')}
                    >
                        Start here
                    </Button>
                </div>
            </div>
            <div className="hero">
                <Hero />
            </div>
        </div>
    );
};

export default LandingPage;
