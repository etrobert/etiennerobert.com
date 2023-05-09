import BusinessCard from "../components/BusinessCard";
import Project from "../components/Project";

import styles from "./index.module.css";

const App = () => (
  <div className={styles.container}>
    <BusinessCard />
    <div className={styles.projects}>
      <Project
        name="Minitick"
        url="https://etrobert.github.io/minitick/"
        image="images/minitick.png"
      />
      <Project
        name="TaskGraph"
        url="https://taskgraph.net"
        image="images/taskgraph.png"
      />
    </div>
  </div>
);

export default App;
