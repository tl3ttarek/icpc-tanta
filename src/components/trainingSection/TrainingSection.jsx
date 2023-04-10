import React from "react";
import { IonIcon } from "@ionic/react";
import {
  libraryOutline,
  mapOutline,
  timeOutline,
  newspaperOutline,
} from "ionicons/icons";
import "../../styles/global.css";
import { Link } from "react-router-dom";

const TrainingSection = () => {
  return (
    <section className="section-training" id="content">
      <div className="container">
        <p className="heading-sub">Newcomers Training Content</p>
        <h2 className="heading-secondary">
          Our training is open! Join us now to start your competitive
          programming journey.
        </h2>
        <div className="training-weeks grid grid--2-col">
          <div className="training-card">
            <p className="training-card-heading">Week 0</p>
            <p className="training-card-text">
              Online Judge, I/O, Data Types, Mod, Conditions
            </p>
            <div className="training-resources">
              <div className="training-link-container">
                <ion-icon
                  name="link-outline"
                  className="training-link-icon"
                ></ion-icon>
                <Link to="#" target="_blank" className="training-link">
                  7 Resources
                </Link>
              </div>
              <div className="training-link-container">
                <ion-icon
                  name="link-outline"
                  className="training-link-icon"
                ></ion-icon>
                <Link to="#" target="_blank" className="training-link">
                  7 Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
