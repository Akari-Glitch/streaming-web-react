import React, { useState, useEffect } from "react";

import { Replay } from "vimond-replay";
import "vimond-replay/index.css";
import ShakaVideoStreamer from "vimond-replay/video-streamer/shaka-player";

import queryString from "query-string";
import io from "socket.io-client";

import { InfoBar } from "../InfoBar/InfoBar";
import { Input } from "../Input/Input";
import { Messages } from "../Messages/Messages";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Chat.css";
import { Redirect, useHistory } from "react-router-dom";

let socket;

export const Chat = ({ user_data, location }) => {
  const [name, setName] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = process.env.REACT_APP_ENDPOINT;

  let history = useHistory();

  useEffect(() => {
    const { name, workshop } = queryString.parse(location.search);
    if (!name || !workshop) {
      return history.push("/404");
    }
  }, []);

  useEffect(() => {
    const { name, workshop } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setWorkshop(workshop);
    setName(name);

    socket.emit("join", { name, workshop }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.on("workshopData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="container__live">
      <div className="player__container">
        <Replay
          source={process.env.REACT_APP_STREAM}
          initialPlaybackProps={{ isPaused: false }}
        >
          <ShakaVideoStreamer />
        </Replay>
        <div className="workshop__container">
          <h1 className="workshop__title">{workshop}</h1>
          <div className="workshop__info">
            <p className="workshop__description">
              👉Es requerimiento excluyente desmutear el mic y animarse a hablar
              para lograr un intercambio entre los participantes.
            </p>
          </div>
          <div className="workshop__socialnetworks">
            <h2 className="discord__message">Entra a Nuestra Comunidad</h2>
            <a href="https://discord.stacklycode.com">
              <button className="discord__btn">Discord</button>
            </a>

            <div className="socialnetworks__icons">
              <a href="https://www.facebook.com/StacklyCodeOfficial">
                <FaFacebookSquare />
              </a>
              <a href="https://www.linkedin.com/company/stackly-code">
                <FaLinkedin />
              </a>
              <a href="https://github.com/StacklyCode">
                <FaGithubSquare />
              </a>
              <a href="https://twitter.com/StacklyCode">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="chat__container">
        <div className="container">
          <InfoBar workshop={workshop} users={users} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};
