import React from "react";

const Grid = ({ num }) => {
  return <div>{"a" + num}</div>;
};

const MainPage = () => {
  return (
    <div>
      MAINPAGE
      <div
        style={{
          display: "grid",
          marginTop: "50px",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "20px",
        }}
      >
        {[...Array(20).keys()].map((item, index) => {
          return <Grid num={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
