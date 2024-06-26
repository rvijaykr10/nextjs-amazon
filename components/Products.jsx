import Image from "next/image";
import styles from "@/components/Products.module.scss";
export default function Products() {
  return (
    <div className={styles.products}>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Gaming accessories</div>
          <div className={styles.photos}>
            <div className={styles.photoTypeOne}>
              <div>
                <Image
                  src="/images/gaming_1.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Headsets</p>
              </div>
              <div>
                <Image
                  src="/images/gaming_2.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Keyboards</p>
              </div>
            </div>
            <div className={styles.photoTypeOne}>
              <div>
                <Image
                  src="/images/gaming_3.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Computer mice</p>
              </div>
              <div>
                <Image
                  src="/images/gaming_4.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Chairs</p>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Refresh your space</div>
          <div className={styles.photos}>
            <div className={styles.photoTypeOne}>
              <div>
                <Image
                  src="/images/refresh_1.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Dining</p>
              </div>
              <div>
                <Image
                  src="/images/refresh_2.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Home</p>
              </div>
            </div>
            <div className={styles.photoTypeOne}>
              <div>
                <Image
                  src="/images/refresh_3.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Kitchen</p>
              </div>
              <div>
                <Image
                  src="/images/refresh_4.svg"
                  alt="gaming photo"
                  width={147}
                  height={115}
                  priority
                />
                <p>Health</p>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Deals in PCs</div>
          <div className={styles.photos}>
            <Image
              src="/images/pc_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Amazon Gadget Store</div>
          <div className={styles.photos}>
            <div className={styles.photoTypeTwo}>
              <div>
                <Image
                  src="/images/gadget_1.svg"
                  alt="gadget photo"
                  width={310}
                  height={172}
                  priority
                />
                <p>Smartphones</p>
              </div>
            </div>
            <div className={styles.photoTypeThree}>
              <div>
                <Image
                  src="/images/gadget_2.svg"
                  alt="gadget photo"
                  width={100}
                  height={75}
                  priority
                />
                <p>Tablets</p>
              </div>
              <div>
                <Image
                  src="/images/gadget_3.svg"
                  alt="gadget photo"
                  width={100}
                  height={75}
                  priority
                />
                <p>Laptops</p>
              </div>
              <div>
                <Image
                  src="/images/gadget_4.svg"
                  alt="gadget photo"
                  width={100}
                  height={75}
                  priority
                />
                <p>TVs</p>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Handpicked music & audio</div>
          <div className={styles.photos}>
            {" "}
            <div className={styles.photos}>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/music_1.svg"
                    alt="music photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Headphones</p>
                </div>
                <div>
                  <Image
                    src="/images/music_2.svg"
                    alt="music photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Guitars</p>
                </div>
              </div>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/music_3.svg"
                    alt="music photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Keyboards</p>
                </div>
                <div>
                  <Image
                    src="/images/music_4.svg"
                    alt="music photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Microphones</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Fill your Easter basket with joy</div>
          <div className={styles.photos}>
            <Image
              src="/images/easter_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Top Deal</div>
          <div className={styles.photos}>
            <div className={styles.photoTypeFour}>
              <Image
                src="/images/top_deal_1.svg"
                alt="gaming photo"
                width={73}
                height={230}
                priority
              />
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Shop deals in Fashion</div>
          <div className={styles.photos}>
            {" "}
            <div className={styles.photos}>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/fashion_1.svg"
                    alt="fashion photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Jeans under $50</p>
                </div>
                <div>
                  <Image
                    src="/images/fashion_2.svg"
                    alt="fashion photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Tops under $25</p>
                </div>
              </div>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/fashion_3.svg"
                    alt="fashion photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Dresses under $30</p>
                </div>
                <div>
                  <Image
                    src="/images/fashion_4.svg"
                    alt="fashion photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Shoes under $50</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>
            Best Sellers in Sports & Outdoors
          </div>
          <div className={styles.photos}>
            <Image
              src="/images/outdoor_1.svg"
              alt="gaming photo"
              width={197}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_2.svg"
              alt="gaming photo"
              width={228}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_3.svg"
              alt="gaming photo"
              width={188}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_4.svg"
              alt="gaming photo"
              width={145}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_5.svg"
              alt="gaming photo"
              width={145}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_6.svg"
              alt="gaming photo"
              width={270}
              height={200}
              priority
            />
            <Image
              src="/images/outdoor_7.svg"
              alt="gaming photo"
              width={190}
              height={200}
              priority
            />
          </div>
        </div>
        {/* <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Most wished for in Movies & TV</div>
        </div> */}
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>
            Shop activity trackers and smartwatches
          </div>
          <div className={styles.photos}>
            <Image
              src="/images/tracker_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Gaming merchandise</div>
          <div className={styles.photos}>
            <div className={styles.photos}>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/merchandise_1.svg"
                    alt="merchandise photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Apparel</p>
                </div>
                <div>
                  <Image
                    src="/images/merchandise_2.svg"
                    alt="merchandise photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Hats</p>
                </div>
              </div>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/merchandise_3.svg"
                    alt="merchandise photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Action figures</p>
                </div>
                <div>
                  <Image
                    src="/images/merchandise_4.svg"
                    alt="merchandise photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Mugs</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Player's paradise starts here</div>
          <div className={styles.photos}>
            <Image
              src="/images/paradise_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>A whole new way to work</div>
          <div className={styles.photos}>
            <Image
              src="/images/work_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.rowTypeOne}>
          <div className={styles.heading}>
            Best Sellers in Beauty & Personal Care
          </div>
          <div className={styles.photos}>
            <Image
              src="/images/care_1.svg"
              alt="gaming photo"
              width={145}
              height={200}
              priority
            />
            <Image
              src="/images/care_2.svg"
              alt="gaming photo"
              width={156}
              height={200}
              priority
            />
            <Image
              src="/images/care_3.svg"
              alt="gaming photo"
              width={197}
              height={200}
              priority
            />
            <Image
              src="/images/care_4.svg"
              alt="gaming photo"
              width={194}
              height={200}
              priority
            />
            <Image
              src="/images/care_5.svg"
              alt="gaming photo"
              width={187}
              height={200}
              priority
            />
            <Image
              src="/images/care_6.svg"
              alt="gaming photo"
              width={145}
              height={200}
              priority
            />
            <Image
              src="/images/care_7.svg"
              alt="gaming photo"
              width={145}
              height={200}
              priority
            />
            <Image
              src="/images/care_8.svg"
              alt="gaming photo"
              width={171}
              height={200}
              priority
            />
          </div>
        </div>
        {/* <div className={styles.rowTypeOne}>
          <div className={styles.heading}>Exciting deals</div>
        </div> */}
      </section>
      <section className={styles.cardRow}>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Laptops for every need</div>
          <div className={styles.photos}>
            <Image
              src="/images/laptop_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Warm & welcoming decor</div>
          <div className={styles.photos}>
            {" "}
            <div className={styles.photos}>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/decor_1.svg"
                    alt="decor photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Wreaths & garlands</p>
                </div>
                <div>
                  <Image
                    src="/images/decor_2.svg"
                    alt="decor photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Outdoor decor</p>
                </div>
              </div>
              <div className={styles.photoTypeOne}>
                <div>
                  <Image
                    src="/images/decor_3.svg"
                    alt="decor photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Pillows & throws</p>
                </div>
                <div>
                  <Image
                    src="/images/decor_4.svg"
                    alt="decor photo"
                    width={147}
                    height={115}
                    priority
                  />
                  <p>Wall art & mirrors</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Creating business solutions</div>
          <div className={styles.photos}>
            <Image
              src="/images/laptop_2.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
        <div className={styles.cardTypeOne}>
          <div className={styles.heading}>Personal Care under $25</div>
          <div className={styles.photos}>
            <Image
              src="/images/brush_1.svg"
              alt="gaming photo"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className={styles.action}>See more</div>
        </div>
      </section>
      {/* <section className={styles.row}>
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
      </section> */}
    </div>
  );
}
