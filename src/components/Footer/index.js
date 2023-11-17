import Link from "next/link";
import Busca from "../Busca";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Receba as novidades:</p>
          <div className={styles.novidade}>
            <input  placeholder="fulano@email.com"/>
            <button>OK</button>
          </div>
        </div>
        <div className={styles.nav}>
          <Link href={"/"}>Fale conosco</Link>
          <Link href={"/"}>Quem somos</Link>
          <Link href={"/"}>Política de privacidade</Link>
        </div>
      </div>
    </>
  );
}
