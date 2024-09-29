import React, { useState } from "react";
import "./../../index.css";
import "./Add.css";
import HomeButton from "../../components/HomeButton/HomeButton";
import { Link } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDailog, setOpenEmojiDailog] = useState(false);

  const addNotes = () => {
    if (!title || !description || !category || !emoji) {
        return  toast.error("Please add a note!")
    }
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    const notesObject = {
      title,
      description,
      category,
      emoji,
    };
  
    notes.push(notesObject);
  
    localStorage.setItem("notes", JSON.stringify(notes));
  
    toast.success("Note added successfully!");
  
    setTitle("");
    setDescription("");
    setCategory("");
    setEmoji("");

    setTimeout(() => {
      window.location.href = "/show";
    }, 2000);
  };
  
  return (
    <div>
      <h1 className="text-center heading">Add Note 📝</h1>

      <Link to="/">
        <HomeButton />
      </Link>

      <form className="input-form">

      <input
        type="text"
        placeholder="Enter Title"
        className="add-input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter Description"
        className="add-input"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <select
        value={category}
        placeholder="Enter Description"
        className="add-input category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="category">Category</option>
        <option value="work">Work</option>
        <option value="health">Health</option>
        <option value="personal">Personal</option>
        <option value="shopping">Shopping</option>
        <option value="learning">Learning</option>
      </select>

      <EmojiPicker
        open={openEmojiDailog}
        height={"300px"}
        width={"400px"}
        skinTonesDisabled={true}
        onEmojiClick={(emojiObject) => {
          setEmoji(emojiObject.emoji);
          setOpenEmojiDailog(false);
        }}
        className="emoji-picker"  
      />

      <div
        className="add-input add-input-emoji"
        onClick={() => setOpenEmojiDailog(true)}
      >
        {emoji ? emoji : "Select Emoji"}
      </div>

   
        <button type="button" className="add-btn" onClick={addNotes}>
           Add Note 
        </button>
      
      </form>
    </div>
  );
}

export default Add;
