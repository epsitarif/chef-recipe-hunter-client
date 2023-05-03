import React from "react";
import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Header/Footer/Footer";
import { Container } from "react-bootstrap";
import NavigationVar from "../pages/Home/Shared/NavigationVar/NavigationVar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationVar></NavigationVar>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
