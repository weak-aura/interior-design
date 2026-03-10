import styles from "./Home.module.scss";
import {Accordion} from "../../../components/Accordion";
import {WarrantySection} from "../../../sections/WarrantySection";
import {HomeBannerSection} from "../../../sections/HomeBannerSection";
import {ContactSection} from "../../../sections/ContactSection";
import {OurServicesSection} from "../../../sections/OurServicesSection";
import {PortfolioSection} from "../../../sections/PortfolioSection";
import {ReviewsSection} from "../../../sections/ReviewsSection";



export const Home = () => {
  return (
    <div>
      <HomeBannerSection/>
      <OurServicesSection/>
      <WarrantySection/>
      <section className={`container ${styles.section}`}>
        <h1>Как будет происходить процесс работы <br/> по ремонту квартиры</h1>
        <Accordion/>
      </section>
      <ContactSection/>
      <PortfolioSection/>
      <ReviewsSection/>
    </div>
  );
};