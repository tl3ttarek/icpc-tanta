import React from "react";
import { IonIcon } from "@ionic/react";
import {
  libraryOutline,
  mapOutline,
  timeOutline,
  newspaperOutline,
} from "ionicons/icons";
import "../../styles/global.css";

const AboutSection = () => {
  return (
    <>
      <section className="section-about" id="about">
        <div className="container">
          <p className="heading-sub">Why Us</p>
          <h2 className="heading-secondary">
            Elevate Your Competitive Programming Experience with Unparalleled
            Resources and Expert Mentorship
          </h2>
          <div className="grid grid--2-col">
            <div className="feature">
              <IonIcon icon={libraryOutline} className="feature-icon" />
              <h3 className="heading-tertiary">
                Comprehensive Resource Library
              </h3>
              <p className="feature-text">
                Access a wide variety of resources designed to enhance
                competitive programming skills.
              </p>
            </div>
            <div className="feature">
              <IonIcon icon={mapOutline} className="feature-icon" />
              <h3 className="heading-tertiary">Expert Mentorship</h3>
              <p className="feature-text">
                Benefit from experienced mentors who offer guidance and support
                for continuous improvement.
              </p>
            </div>
            <div className="feature">
              <IonIcon icon={timeOutline} className="feature-icon" />
              <h3 className="heading-tertiary">Regular Practice Sessions</h3>
              <p className="feature-text">
                Participate in practice sessions to build confidence and
                proficiency in competitive programming.
              </p>
            </div>
            <div className="feature">
              <IonIcon icon={newspaperOutline} className="feature-icon" />
              <h3 className="heading-tertiary">Latest ICPC Updates</h3>
              <p className="feature-text">
                Stay informed about current ICPC news, events, and connect with
                fellow community members for exchanging tips and tricks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
