import React, { FC } from 'react';
import styles from "./Input.module.scss";

interface IProps {
    type: string,
    name?: string,
    placeholder?: string,
}

const Input: FC<IProps> = ({type,name, placeholder}) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default Input;