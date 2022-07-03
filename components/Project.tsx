import styles from "./Project.module.css";

type Props = {
  name: string;
  image: string;
};

const Project = ({ name, image }: Props) => (
  <div>
    <h1 className={styles.name}>{name}</h1>
    <img className={styles.image} src={image} />
  </div>
);

export default Project;
