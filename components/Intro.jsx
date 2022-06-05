import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle";

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#5ea4ef" top="-50vh" left="-50vh"/>
            <Circle backgroundColor="#5ea4ef"  right="-40vh"/>
            
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>DIPTO</span> DIGITAL PRODUCT AGENCY
                </h1>
                <p className={styles.desc}>
                    Create live segments and target the right people for messages
                    based on their behaviors.
                </p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <div className={styles.card}>
                <Image className={styles.image} src="/img/onk.jpg" width="100%" height="100%" layout="fill" 
                objectFit="cover" alt="" />
            </div>
        </div>
    );
};

export default Intro;