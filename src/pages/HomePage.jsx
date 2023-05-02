import React from "react";
import "../styles/homePage.scss";
import { homePageDummyData } from "../utils";

const HomePage = () => {
  return (
    <main>
      {homePageDummyData.map((item) => (
        <article key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </article>
      ))}
    </main>
  );
};

export default HomePage;
