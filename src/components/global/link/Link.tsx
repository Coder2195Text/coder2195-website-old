import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./Link.module.css";

interface Props extends PropsWithChildren {
  href: string;
}

const Link: FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
};

export default Link;
