import React from "react";
import "./NoteCard.css";
import IconDelete from "./dlete.png"

function NoteCategory({ category }) {
  const CATEGORY_EMOJI = {
    work: "💼",
    health: "🏋️‍♂️",
    personal: "👩",
    shopping: "🛒",
    learning: "📚",
  };

  return (
    <div className={`note-card-category bg-${category}`}>
    <span className="note-category-emoji">{CATEGORY_EMOJI[category]}</span>
    {category.charAt(0).toUpperCase() + category.slice(1)}
  </div>
  
  );
}

function NoteCard({ title, description, emoji, category }) {
  return (
    <div className="note-card">
      <div className="note-card-emoji">{emoji}</div>
      <div className="note-card-info">
        <h3 className="note-card-title">{title}</h3>
        <p className="note-card-description">{description}</p>

        <NoteCategory category={category} />

        <img src={IconDelete} className="note-delete" alt="Delete"/>
      </div>
    </div>
  );
}

export default NoteCard;
