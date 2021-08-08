import React from "react";
import Layout from "./components/Layout";
import Game from "./components/Game/Game";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Layout>
      <Game />
      <ToastContainer />
    </Layout>
  );
}

export default App;
