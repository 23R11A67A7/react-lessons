import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1 style={{ backgroundColor: "yellow", color: "blue" }}>
        React Lessons
      </h1>
      <Link to="/App1">App1</Link>-
      <Link to="/App2">App2</Link>-
      <Link to="/App3">App3</Link>-
      <Link to="/App4">App4</Link>-
      <Link to="/App5">App5</Link>-
      <Link to="/App6">App6</Link>-
      <Link to="/App7">App7</Link>-
      <Link to="/App8">App8</Link>-
      <Link to="/App9">App9</Link>-
      <Link to="/App10">App10</Link>-
      <Link to="/App11">App11</Link>-
      <Link to="/App12">App12</Link>-
      <Link to="/App13">App13</Link>-
      <Link to="/App14">App14</Link>-
      <Link to="/App15">App15</Link>-
      <Link to="/App16">App16</Link>-
      <Link to="/App17">App17</Link>-
    </div>
  );
}