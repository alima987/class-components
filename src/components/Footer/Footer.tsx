import Link from "next/link"
import styles from './footer.module.css'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href={`https://github.com/alima987`} passHref>
                <p className={styles.github}><FaGithub className={styles.icon} /></p>
            </Link>
            <p className={styles.year}>2024</p>
        </div>
    )
}

export default Footer
