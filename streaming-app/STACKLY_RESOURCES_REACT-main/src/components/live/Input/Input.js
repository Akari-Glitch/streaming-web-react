import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Input.css";

export const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Escribe un mensaje..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <div>
        <FaPaperPlane />
      </div>
    </button>
  </form>
);
