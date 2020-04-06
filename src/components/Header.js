import React from "react";
import AVATAR from "assets/img/avataaars.svg";
export default function Header() {
  return (
    <div className="d-flex justify-content-center align-items-center mb-3">
      <img
        className=""
        src={AVATAR}
        alt="avatar icon"
        style={{ width: "300px" }}
      />
    </div>
  );
}
