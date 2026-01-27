import { Parallax } from "react-scroll-parallax";
import { ReactNode } from "react";
import styles from "./PreviousJobs.module.scss";

interface CardOptionsProps {
  isEven: boolean;
  label: string;
  front: string;
  bulletpoints?: string[];
  children?: ReactNode;
}

export const Job = (props: CardOptionsProps) => {
  const { front, label, isEven } = props;
  return (
    <div className="col-6 col-lg-4" tabIndex={0}>
      <div className="card h-100">
        <figure className={`${styles.cardFig} rounded-1`} data-category={label}>
          <Parallax speed={isEven ? -5 : 5} className={styles.parallaxWrapper}>
            <img src={front} alt={label} className={styles.cardPic} />
          </Parallax>
        </figure>
      </div>
    </div>
  );
};
