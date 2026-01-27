import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinIcon,
  TelephoneIcon,
  WhatsappIcon,
} from "components/Icons";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerContent}>
      <div>
        <h5 className={styles.footerHeader}>CONTACT</h5>

        <div className={styles.items}>
          <a
            href="https://wa.me/353872105305"
            className={styles.contactItem}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon /> WhatsApp
          </a>

          <a href="tel:+353872105305" className={styles.contactItem}>
            <TelephoneIcon /> +353 87 210 5305
          </a>

          <a href="mailto:declansavo@hotmail.com" className={styles.contactItem}>
            <EmailIcon /> declansavo@hotmail.com
          </a>

          <a href="https://goo.gl/maps/gv5ke2gXp7STHdPe7" className={styles.contactItem}>
            <PinIcon /> Monaghan, H18 X058
          </a>
        </div>
      </div>

      <div>
        <h5 className={styles.footerHeader}>SOCIALS</h5>

        <div className={styles.items}>
          <a
            href="https://www.facebook.com/thatssavage"
            target="_blank"
            rel="noreferrer"
            className={styles.socialItem}
          >
            <FacebookIcon /> Facebook
          </a>

          <a
            href="https://www.instagram.com/thatssavage.print"
            target="_blank"
            rel="noreferrer"
            className={styles.socialItem}
          >
            <InstagramIcon /> Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/declan-savage-a972b424"
            target="_blank"
            rel="noreferrer"
            className={styles.socialItem}
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </div>

    <div className={styles.footerBottom}>
      <a
        className={styles.creditLink}
        href="https://www.linkedin.com/in/liam-savage-72b532101"
        target="_blank"
        rel="noreferrer"
      >
        Created by Liam
      </a>
      {" | "} {new Date().getFullYear()}
    </div>
  </footer>
);
