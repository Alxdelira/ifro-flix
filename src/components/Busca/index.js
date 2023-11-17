import styles from './styles.module.css';

export default function Busca() {
    return (
        <div className={styles.backImage}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>Bem vindo(a)</h1>
                <p className={styles.subtitulo}>Explore suas séries favoritas</p>
                <div className={styles.busca}>
                    <input type="text" placeholder="Buscar por uma série..." />
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}