import React from "react";
import "../styles/Home.css"; // Stilleri içe aktar

function Home() {
  const handleClick = (side) => {
    alert(`Tıklanan taraf: ${side}`);
  };

  return (
    <div className="home-container">
      <div className="half left-side" onClick={() => handleClick("Sol")}>
        <span className="half-content">Sol Taraf</span>
      </div>
      <div className="half right-side" onClick={() => handleClick("Sağ")}>
        <span className="half-content">Sağ Taraf</span>
      </div>
    </div>
  );
}

export default Home;
