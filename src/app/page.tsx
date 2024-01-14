import dynamic from "next/dynamic";
import { Exo } from "next/font/google";
import HomePage from "@/components/pages/Home";
import styles from "./page.module.css";

const exo = Exo({ subsets: ["latin"], weight: "700" });

function Page() {
  return (
    <main className={`${styles.main} ${exo.className}`}>
      <HomePage />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
