import { VStack, Text } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <VStack gap={2} textAlign="center">
        <Text>
          Inspired by the one and only{" "}
          <a href="http://ricepuritytest.com/" target="_blank" rel="noreferrer">
            Rice Purity Test
          </a>
        </Text>
        <Text>
          not affiliated with the university of waterloo &copy;{" "}
          {new Date().getFullYear()} | we do not collect any identifiable data | if you have
          questions for us, show yourself on r/uwaterloo
        </Text>
      </VStack>
    </footer>
  );
};

export default Footer;
