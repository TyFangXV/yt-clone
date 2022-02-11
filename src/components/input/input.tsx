import React, { useEffect, useState } from "react";
import styles from '../../styles/components/input/input.module.css'
import {BsSearch} from 'react-icons/bs'
import recoil from 'recoil'
import { inputState } from "../../state/input";


const Input = () => {
    const [entered, setEntered] = useState(false)
    const [input, setInput] = recoil.useRecoilState(inputState)
    const inputRef = React.createRef<HTMLInputElement>();

    useEffect(() => {

    }, [input])
    return (
        <div className={styles.container}>
        <input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            onEnded={() => console.log("entered")}
            onChange={(e) => setInput(e.target.value)}
        />
        <BsSearch className={styles.icon}/>
        <hr/>
        </div>
    );
}

export default Input;