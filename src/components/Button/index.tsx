import React from 'react';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants/styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: BUTTON_VARIANTS;
    size?: BUTTON_SIZES;
}

const Button = ({
    children,
    variant = BUTTON_VARIANTS.Primary,
    size = BUTTON_SIZES.Small,
}: ButtonProps) => {
    return (
        <button
        //className={`${styles.button} ${styles[variant]} ${styles[size]}`}
        >
            {children}
        </button>
    );
};

export default Button;
