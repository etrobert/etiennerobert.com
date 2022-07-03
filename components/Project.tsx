import styles from "./Project.module.css";

type Props = {
  image: string;
};

const Project = ({ image }: Props) => (
  <img className={styles.image} src={image} />
);

export default Project;
