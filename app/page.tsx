import Hero from "@/components/home/Hero";
import Snippet from "@/components/home/Snippet";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainContent}>
        <Hero />
        <Snippet />
      </section>
      <section></section>
    </main>
  )
}
