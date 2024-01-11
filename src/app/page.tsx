import dynamic from "next/dynamic";

import HomePage from "@/components/pages/Home";
import styles from "./page.module.css";

function Page() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
