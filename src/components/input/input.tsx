import React from "react";
import styles from '../../styles/components/input/input.module.css'
import {BsSearch} from 'react-icons/bs'
const Input = () => {
    return (
        <div className={styles.container}>
        <input
            type="search"
            placeholder="Search..."
        />
        <BsSearch className={styles.icon}/>
        <hr/>
        </div>
    );
}

export default Input;