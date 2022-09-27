import { FC } from "react";
import styles from "./Footer.module.css";

interface Props {
  children: JSX.Element[];
}

const Footer: FC<Props> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
