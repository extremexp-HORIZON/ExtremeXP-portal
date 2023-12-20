import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

interface SideBarProps {
  onSave: () => void;
  onSaveAs: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave, onSaveAs }) => {
  const navigate = useNavigate();
  const expID = useLocation().pathname.split("/")[2];
  const specificationID = useLocation().pathname.split("/")[3];

  const handleGoBack = () => {
    if (localStorage.getItem("token") && localStorage.getItem("username")) {
      if (specificationID && expID) {
        navigate(`/repository/experiments/${expID}/specifications`);
      } else {
        navigate("/repository/experiments");
      }
    } else {
      navigate("/account/login");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__datablock">
        <div>Data Lists</div>
      </div>
      <div className="sidebar__files">
        <button
          className="sidebar__files__button__save"
          onClick={() => {
            onSave();
          }}
        >
          Save
        </button>
        <button
          className="sidebar__files__button__saveAs"
          onClick={() => {
            onSaveAs();
          }}
        >
          Save as
        </button>
        <button
          className="sidebar__files__button__load"
          onClick={() => handleGoBack()}
        >
          Back
        </button>
      </div>
      <div className="sidebar__execution">
        <button className="sidebar__execution__button">Execution</button>
      </div>
    </div>
  );
};

export default SideBar;
