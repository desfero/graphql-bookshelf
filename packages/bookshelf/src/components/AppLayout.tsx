import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { Scenes } from "../scenes";
import { RootErrorBoundary } from "./RootErrorBoundary";

const AppLayout: React.FunctionComponent = () => (
  <RootErrorBoundary>
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <Scenes />
      </main>
    </Container>
  </RootErrorBoundary>
);

export { AppLayout };
