import React, { useState, useEffect, useRef } from "react";

import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import useClickOutside from "../../custom/useClickOutside";
import { useGetWidth } from "../../custom/useDimension";

import { weeks } from "../../data/weeks";

const getWidthAndMarginStyle = (windowWidth) => {
  const widthMap = [
    { width: 44 * 16, value: "90%" },
    { width: 50 * 16, value: "80%" },
    { width: 52 * 16, value: "70%" },
    { width: 78 * 16, value: "60%" },
    { width: Infinity, value: "50%" },
  ];

  const marginLeftMap = [
    { width: 44 * 16, value: "5%" },
    { width: 50 * 16, value: "10%" },
    { width: 52 * 16, value: "15%" },
    { width: 78 * 16, value: "20%" },
    { width: Infinity, value: "25%" },
  ];

  const matchedWidth = widthMap.find((item) => windowWidth <= item.width);
  const matchedMarginLeft = marginLeftMap.find(
    (item) => windowWidth <= item.width
  );
  return {
    width: matchedWidth.value,
    marginLeft: matchedMarginLeft.value,
  };
};

const Popup = ({ weekId, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [weekData, setweekData] = useState(null);

  const width = useGetWidth();
  const popupRef = useRef(null);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  useClickOutside(popupRef, () => {
    closePopup();
  });

  useEffect(() => {
    setIsVisible(true);
    const weekDatails = weeks.find((week) => week.id === weekId);
    setweekData(weekDatails);
  }, []);

  return (
    <div>
      <div
        // className="popup-screen"
        ref={popupRef}
        style={{
          ...popupStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(200rem)",
          transition: "all 0.5s ease-in-out",
          visibility: isVisible ? "visible" : "hidden",
          marginTop: `12vh`,
          ...getWidthAndMarginStyle(width),
        }}
      >
        <IonIcon
          icon={closeOutline}
          className="popup-close--icon"
          onClick={closePopup}
        />
        <h2 className="heading-secondary">{`Week ${weekId} Problems and Resources`}</h2>
        <div className="problems-resources">
          {weekData &&
            weekData.resources &&
            weekData.resources.map((resource, idx) => (
              <a className="popup-card resource" href={resource.link} key={idx}>
                <p className="problem-title">Resource</p>
                <p
                  className="problem-name"
                  style={{
                    textAlign: width <= 52 * 16 ? "center" : "right",
                  }}
                >
                  {resource.name}
                </p>
              </a>
            ))}
          {weekData &&
            weekData.problems &&
            weekData.problems.map((problem, idx) => (
              <a className="popup-card problem" href={problem.link} key={idx}>
                <p className="problem-title">{problem.title}</p>
                <p
                  className="problem-name"
                  style={{
                    textAlign: width <= 52 * 16 ? "center" : "right",
                  }}
                >
                  {problem.name}
                </p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;

const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "50%",
  height: "80%",
  zIndex: 999,
  padding: "5rem",
  backgroundColor: "#232a30",
  borderRadius: "15px",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  marginTop: "calc((100vh - 80%) / 2)",
};
