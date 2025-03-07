import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './TextLink.module.scss';
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import FavoritesIcon from '../../assets/heart.svg';
import { JSX } from 'react';

const icons: Record<string, JSX.Element> = {
    HOME: <HomeIcon />,
    SEARCH: <SearchIcon />,
    FAVORITES: <FavoritesIcon />,
};

interface TextLinkProps extends NavLinkProps {
    icon?: 'HOME' | 'SEARCH' | 'FAVORITES';
    to: string;
    children: React.ReactNode;
}

const TextLink = ({ to, icon, children, ...rest }: TextLinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${styles.textlink} ${isActive ? styles.active : ''}`
            }
            {...rest}
        >
            <div className={styles.container}>
                {icon && icons[icon]}
                {children}
            </div>
        </NavLink>
    );
};

export default TextLink;
