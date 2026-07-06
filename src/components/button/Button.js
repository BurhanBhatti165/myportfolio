import React from "react";
import "./Button.scss";
import {externalLinkProps} from "../../utils/links";

export default function Button({text, className, href, newTab, download}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        download={download}
        {...externalLinkProps(newTab)}
      >
        {text}
      </a>
    </div>
  );
}
