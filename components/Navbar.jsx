import Image from "next/image";
import styles from "@/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navTop}>
        <div>
          <Image src="/images/logo.png" width={97} height={30} />
        </div>
      </div>
      <div className={styles.navBottom}>
        <div>
          <div>
            <Image src="/images/ham.png" width={17} height={14} />
          </div>
          <div>ALL</div>
          <div>Today's Deals</div>
          <div>Customer Service</div>
          <div>Registry</div>
          <div>Gift Cards</div>
          <div>Sell</div>
        </div>
      </div>
    </div>
  );
}
