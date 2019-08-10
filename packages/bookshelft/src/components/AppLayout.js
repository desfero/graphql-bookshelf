import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { Scenes } from "../scenes";

const AppLayout = () => (
  <Container>
    <header>
      <Header />
    </header>
    <main>
      <Scenes />
    </main>
  </Container>
);

export { AppLayout };
