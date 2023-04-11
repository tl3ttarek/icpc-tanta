import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import { weeks } from "../../data/weeks";
import Popup from "../popup/Popup";

const TrainingCard = ({ week, onClick }) => {
  return (
    <div className="training-card" onClick={onClick}>
      <p className="training-card-heading">Week {week.id}</p>
      <p className="training-card-text">{week.title}</p>
    </div>
  );
};

const TrainingSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedWeekId, setSelectedWeekId] = useState(null);

  const openPopup = (weekId) => {
    setSelectedWeekId(weekId);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onCloseClicked = () => {
    setSelectedWeekId(null);
    closePopup();
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("popup-screen--open");
    } else {
      document.body.classList.remove("popup-screen--open");
    }
  }, [isPopupOpen]);

  return (
    <section className="section-training" id="content">
      <div className="container">
        <p className="heading-sub">Newcomers Training Content</p>
        <h2 className="heading-secondary">
          Our training is open! Join us now to start your competitive
          programming journey.
        </h2>
        <div className="training-weeks grid grid--2-col">
          {weeks.map((week) => (
            <TrainingCard
              key={week.id}
              week={week}
              onClick={() => openPopup(week.id)}
            />
          ))}
        </div>
        {isPopupOpen && (
          <Popup
            weekId={selectedWeekId}
            onClose={onCloseClicked}
            // popupRef={popupRef}
          />
        )}
      </div>
    </section>
  );
};

export default TrainingSection;
