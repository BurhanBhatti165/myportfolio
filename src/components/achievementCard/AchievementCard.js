import React from "react";
import "./AchievementCard.scss";
import {openInNewTab} from "../../utils/links";

// Simple class merge helper (can be extracted globally if reused)
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AchievementCard({cardInfo, isDark}) {

  return (
  <div className={cx("certificate-card", isDark && "dark-mode") }>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={cx("card-title", isDark && "dark-mode") }>
          {cardInfo.title}
        </h5>
        <p className={cx("card-subtitle", isDark && "dark-mode") }>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <button
              key={i}
              type="button"
              className={cx("certificate-tag", isDark && "dark-mode") }
              onClick={() => openInNewTab(v.url, v.name)}
            >
              {v.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
