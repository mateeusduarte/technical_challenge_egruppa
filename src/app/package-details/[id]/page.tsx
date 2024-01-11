import dynamic from "next/dynamic";

import PackageDetailsPage from "@/components/pages/PackageDetails";
import styles from "../../page.module.css";

function Page() {
  return (
    <main className={styles.main}>
      <PackageDetailsPage />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
