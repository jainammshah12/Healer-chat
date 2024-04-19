import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 style={{fontSize: "50px", margin: "auto", padding: "6rem"}}>Welcome to the Healer! </h1>
      </div>
      
        <h2 style={{fontSize: "40px", fontFamily: "var(--font-mono)"}}>Select your role: </h2>
        <div style={{justifyContent: "space-between", display: "flex", width: "500px"}}>
        <Link href="/chat/patient">
            <button className={styles.card}>Patient</button>
        </Link>
        <Link href="/chat/doctor">
          <button className={styles.card}>Doctor</button>
        </Link>
            
        </div>
    </main>
  );
}
