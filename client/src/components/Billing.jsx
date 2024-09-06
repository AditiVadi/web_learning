import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[85%] h-[85%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Effortlessly connect with  <br className="sm:block hidden" /> alumni & mentors
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
      Take part in interactive events and webinars where you can learn directly from alumni. Use discussion forums to ask questions, share ideas, and get advice from experienced professionals. Our mentorship matching system helps you find the right mentor to guide you on your career path. With secure profiles powered by blockchain, you don’t have to worry about fake accounts. Easily search for alumni and mentors using advanced filters, and let our AI suggest connections based on your interests and career goals.
      </p>

      {/*<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>*/}
    </div>
  </section>
);

export default Billing;