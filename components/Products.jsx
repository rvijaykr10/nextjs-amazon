import styles from "@/components/Products.module.scss";
export default function Products() {
  return (
    <div className={styles.products}>
      <section className={styles.cardRow}>
        <div>card 1</div>
        <div>card 2</div>
        <div>card 3</div>
        <div>card 4</div>
      </section>
      <section className={styles.cardRow}>
        <div>card 5</div>
        <div>card 6</div>
        <div>card 7</div>
        <div>card 8</div>
      </section>
      <section className={styles.row}>
        <div>row 1</div>
        <div>row 2</div>
      </section>
      <section className={styles.cardRow}>
        <div>card 9</div>
        <div>card 10</div>
        <div>card 11</div>
        <div>card 12</div>
      </section>
      <section className={styles.row}>
        <div>row 3</div>
        <div>row 4</div>
      </section>
      <section className={styles.cardRow}>
        <div>card 13</div>
        <div>card 14</div>
        <div>card 15</div>
        <div>card 16</div>
      </section>
      <section className={styles.row}>
        <div>row 5</div>
        <div>row 6</div>
        <div>row 7</div>
      </section>
    </div>
  );
}
