import React, { useEffect, useState } from "react";
import "../styles/project.css";
import axios from "axios";

export default function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/skanderlassoued09/repos")
      .then((response) => {
        setData(response.data);
      });
  });
  return (
    <div className="project">
      <div className="projectContent">
        <div className="headingSectionProject">
          <h1>Project</h1>
          <p>Here are my achievements</p>
        </div>
        <div className="projectsItem">
          {data.map((repo, index) => {
            return (
              <div className="item" key={index}>
                <h1>{repo.name}</h1>
                <a href={repo.html_url}>See the code 🔥 </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
