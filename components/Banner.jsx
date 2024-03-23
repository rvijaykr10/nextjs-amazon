import styles from "@/components/Banner.module.scss";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src="/images/banner.png" alt="My Icon" width={1500} height={600} />
      <div className={styles.bannerOverlay} />
    </div>
  );
  // return <div className={styles.banner}></div>;
}
