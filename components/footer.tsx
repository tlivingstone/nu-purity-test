import { Text } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Text>
        not affiliated with the university of waterloo &copy;{" "}
        {new Date().getFullYear()} | we do not collect any data
      </Text>
    </footer>
  );
};

export default Footer;
