import styles from "./Project.module.css";

type Props = {
  name: string;
  image: string;
  url: string;
};

const Project = ({ url, name, image }: Props) => (
  <a className={styles.link} href={url} target="_blank">
    <h1 className={styles.name}>{name}</h1>
    <img className={styles.image} src={image} />
  </a>
);

export default Project;
