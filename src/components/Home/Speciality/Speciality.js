import React from "react";
import styles from "./Speciality.module.css";
import fast from "../../../imgs/person/fast.png";
import responder from "../../../imgs/person/responder.png";
import home from "../../../imgs/person/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBell,
  faBus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Speciality = () => {
  return (
    <section className={styles.speciality}>
      <div className={styles.whyUs}>
        <h2>Why you choose us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          cupiditate consequuntur tempora unde a
        </p>
      </div>
      <div className={styles.specialityContainer}>
        <div className={styles.specialityCard}>
          <img src={fast} alt="" />
          <div className={styles.specialityCardDetails}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faBus} />
            </span>
            <div>
              <h3>Fast Delivery</h3>
              <p>
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="/seemore">
                See more{" "}
                <span className={styles.rightArrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.specialityCard}>
          <img src={responder} alt="" />
          <div className={styles.specialityCardDetails}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faBell} />
            </span>
            <div>
              <h3>Fast Delivery</h3>
              <p>
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="/seemore">
                See more{" "}
                <span className={styles.rightArrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.specialityCard}>
          <img src={home} alt="" />
          <div className={styles.specialityCardDetails}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faTruck} />
            </span>
            <div>
              <h3>Fast Delivery</h3>
              <p>
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how we dream about our
                future.
              </p>
              <a href="/seemore">
                See more{" "}
                <span className={styles.rightArrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
