import { card, card2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Connect with the right alumni and mentors <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore opportunities, gain insights, and build a strong network to support your career growth—all on one platform.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;