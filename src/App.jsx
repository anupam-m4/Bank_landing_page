import styles from "./style";
import {
  Navbar,
  Billing,
  // CardDeal,
  Business,
  Client,
  CTA,
  Stats,
  Footer,
  Testimonial,
  Hero,
  CardDeal,
} from "./components";
import AnimatedCursor from "./components/AnimatedCursor.jsx";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <AnimatedCursor />

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
