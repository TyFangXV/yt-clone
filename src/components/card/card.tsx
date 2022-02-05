/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/components/cards/card.module.css";
import {FiInfo} from 'react-icons/fi'
interface ICardProps {
    title: string;  
    description: string;
    image: string;
}


const Card: React.FC<ICardProps> = ({title, description, image}) => {
    return(
        <div className={styles.container}>
            <div className={styles.banner_holder}>
                <div className={styles.overlay}></div>           
                <div className={styles.banner} style={{backgroundImage : `Url(${image})`}}></div>  
            </div>
            <div style={{textAlign : "right", margin : "3% 2% 1% 3%"}}>
                <FiInfo className={styles.info}/>
            </div>
                <div className={styles.popUp}>
                    <p>{description}</p> 
                </div>
            <span style={{display : "flex", justifyContent : "space-between", margin : "5% 3% 1% 3%"}}>
                <p className={styles.title}>{title}</p>
                <p className={styles.duration}>-6</p>
            </span>
        </div>
    )
}


export default Card;