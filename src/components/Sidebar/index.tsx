import TextLink from '../TextLink';
import Logo from '../../assets/Logo.svg';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <Logo />
                <h2>TuneTrack</h2>
            </div>
            <ul>
                <li>
                    <TextLink to="/home" icon="HOME">
                        Home
                    </TextLink>
                </li>
                <li>
                    <TextLink to="/search" icon="SEARCH">
                        Search
                    </TextLink>
                </li>
                <li>
                    <TextLink to="/favorites" icon="FAVORITES">
                        Favorites
                    </TextLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
