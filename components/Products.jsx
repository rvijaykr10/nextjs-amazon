import styles from "@/components/Products.module.scss";
export default function Products() {
  return (
    <div className={styles.products}>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Gaming accessories</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Refresh your space</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Deals in PCs</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Amazon Gadget Store</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Handpicked music & audio</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Fill your Easter basket with joy</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Top Deal</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Shop deals in Fashion</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>
            Best Sellers in Sports & Outdoors
          </div>
        </div>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Most wished for in Movies & TV</div>
        </div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>
            Shop activity trackers and smartwatches
          </div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Gaming merchandise</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Player's paradise starts here</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>A whole new way to work</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>
            Best Sellers in Beauty & Personal Care
          </div>
        </div>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Exciting deals</div>
        </div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Laptops for every need</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Warm & welcoming decor</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Creating business solutions</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Personal Care under $25</div>
          <div className={styles.photos}>photos</div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>
            Best Sellers in Cell Phones & Accessories
          </div>
        </div>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Best Sellers in Kitchen & Dining</div>
        </div>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Best Sellers in Books</div>
        </div>
      </section>
    </div>
  );
}
