import Link from "next/link";
import { BiCoffeeTogo } from "react-icons/bi";
import styles from "@/styles/home/Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <section className={styles.heroTitles}>
                <h3 className={styles.heroTitle}>Code <br /><b>with </b>Contawo</h3>
            </section>
            <section className={styles.heroTexts}>
                <p className={styles.heroText}>I am a FullStack Engineer, an adept problem solver, and a competent user of engineering tools. I can use my technical expertise and critical thinking to solve problems, making me a significant asset in any academic or professional situation.</p>
            </section>
            <section className={styles.heroButtons}>
                <Link href="/blogs" className={styles.heroButtonsLink}>
                    <span className={styles.heroButtonsLinkText}>View blogs</span>
                </Link>
                <a 
                    href="https://www.buymeacoffee.com/ajmnotoza"
                    target="_blank"
                    className={styles.heroButtonsCoffee}
                >
                    <BiCoffeeTogo className={styles.heroButtonsCoffeeIcon} />
                    <span className={styles.heroButtonsCoffeeText}>Buy me coffee</span>
                </a>
            </section>
            <section className={styles.heroProfile}>
                <div
                    style={{
                        backgroundImage: `url("https://i.ibb.co/W5Ct7DK/image-Crop.jpg")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}  
                    className={styles.heroProfileImage}></div>
                <section className={styles.heroProfileInfo}>
                    <h3 className={styles.heroProfileInfoText}>Awonke Mnotoza</h3>
                    <a 
                        href="https://code.contawo.com/"
                        target="_blank"
                        className={styles.heroProfileInfoLink}
                    >Visit my portfolio website</a>
                </section>
            </section>
        </section>
    )
}