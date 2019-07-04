import React from "react";
import { FaRegCommentDots, FaRegThumbsUp, FaShareAlt } from "react-icons/fa";
import "./App.css";

export default function IconButtons() {
  return (
    <div className="icon_card">
      <FaRegThumbsUp /> <FaRegCommentDots /> <FaShareAlt />
    </div>
  );
}
