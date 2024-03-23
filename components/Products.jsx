import styles from "@/components/Products.module.scss";
export default function Products() {
  return (
    <div className={styles.products}>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>heading</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>action</div>
        </div>
        <div className={styles.cardTypeOne}>card 2</div>
        <div className={styles.cardTypeOne}>card 3</div>
        <div className={styles.cardTypeOne}>card 4</div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>card 5</div>
        <div className={styles.cardTypeOne}>card 6</div>
        <div className={styles.cardTypeOne}>card 7</div>
        <div className={styles.cardTypeOne}>card 8</div>
      </section>
      <section className={styles.row}>
        <div>row 1</div>
        <div>row 2</div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>card 9</div>
        <div className={styles.cardTypeOne}>card 10</div>
        <div className={styles.cardTypeOne}>card 11</div>
        <div className={styles.cardTypeOne}>card 12</div>
      </section>
      <section className={styles.row}>
        <div>row 3</div>
        <div>row 4</div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>card 13</div>
        <div className={styles.cardTypeOne}>card 14</div>
        <div className={styles.cardTypeOne}>card 15</div>
        <div className={styles.cardTypeOne}>card 16</div>
      </section>
      <section className={styles.row}>
        <div>row 5</div>
        <div>row 6</div>
        <div>row 7</div>
      </section>
    </div>
  );
}
