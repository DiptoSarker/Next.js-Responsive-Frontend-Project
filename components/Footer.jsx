import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>DIPTO CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                      <span className={styles.linkText}>WORK WITH US</span>
                      
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    Akhalia <br /> Sylhet
                </div>
                <div className={styles.cardItem}>
                    CONTACT@DIPTO.DEV <br /> 01700000000
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    Follow US: <br /> FB_IN_DIPTO_DEV
                </div>
                <div className={styles.cardItem}>
                    @2022 DIPTO, <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
};

export default Footer;