import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./Link.module.css";

const Link: FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
};

export default Link;
