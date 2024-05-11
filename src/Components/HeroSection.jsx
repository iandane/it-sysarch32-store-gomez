import React from "react";

function HeroSection({ backgroundImage, title }) {
  const heroStyle = {
    backgroundImage: `url('https://www.lakai.com/collections/clothing/products/fragment-logo-t-shirt-lts224048')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    width: "400",
    position: "relative",
    marginBottom: "50px",
    marginTop: "15px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  };

  const textStyle = {
    zIndex: 1,
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={textStyle}>
        <h1>{title}</h1>
        {}
      </div>
    </div>
  );
}

export default HeroSection;
