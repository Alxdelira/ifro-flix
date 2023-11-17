import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <p className={styles.nome}>Minhas</p>
                <p className={styles.subNome}>SÉRIES</p>
            </div>
            <nav className={styles.nav}>
                <Link href="/">POPULARES</Link>
                <Link href="/">MAIS BEM AVALIADAS</Link>
                <Link href="/">NA TV</Link>
            </nav>
        </div>
    )
}