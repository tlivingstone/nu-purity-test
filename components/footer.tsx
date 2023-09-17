import { Text, VStack } from "@chakra-ui/react";

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
          not affiliated with northestern university &copy;{" "}
          {new Date().getFullYear()} | we do not collect any identifiable data |
          if you have questions for us, show yourself on{" "}
          <a href="https://www.reddit.com/r/NEU/">r/neu</a>
          {/* how do i get rid of the space here? */}
        </Text>
      </VStack>
    </footer>
  );
};

export default Footer;
