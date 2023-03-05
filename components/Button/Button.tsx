import React, {FC} from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    animation?: boolean
}

const Button: FC<ButtonProps> = ({children, onClick, animation = true}) => (
    <button
        className={animation ? styles.btn : styles.button} type='button'
        onClick={onClick}
        onMouseMove={(e: any) => {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            e.target.style.setProperty('--x', `${x}px`)
            e.target.style.setProperty('--y', `${y}px`)
        }}
    >
        <span>{children}</span>
    </button>
)

export default Button;