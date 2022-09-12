import {
  Checkbox,
  ListItem,
  OrderedList,
  Text,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import questions from "@data/questions.json";
import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";

export const PurityForm = () => {
  const [showScore, setShowScore] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [finalScoreMessage, setFinalScoreMessage] = useState("");

  useEffect(() => {
    if (finalScore > 90) {
      setFinalScoreMessage("ur too pure. welcome to loo.");
    } else if (finalScore > 80) {
      setFinalScoreMessage("ur pretty pure, prob a first year");
    } else if (finalScore > 70) {
      setFinalScoreMessage("trying new things i see.");
    } else if (finalScore > 60) {
      setFinalScoreMessage("i see you getting all risque");
    } else if (finalScore > 50) {
      setFinalScoreMessage("experimenting. i like it.");
    } else if (finalScore > 40) {
      setFinalScoreMessage("you're pretty badass");
    } else if (finalScore > 30) {
      setFinalScoreMessage("you've gotten around. i see u.");
    } else if (finalScore > 20) {
      setFinalScoreMessage("chad. respect.");
    } else if (finalScore > 10) {
      setFinalScoreMessage("how are you still alive tbh");
    } else if (finalScore > 2) {
      setFinalScoreMessage("honestly, how are you alive. please enlighten us.");
    } else {
      setFinalScoreMessage("i don't believe you");
    }
    if (finalScore > 0) {
      setShowScore(true);
    }
  }, [finalScore]);

  // Formik key value config
  let formikKeys = JSON.parse(JSON.stringify(questions));
  Object.keys(formikKeys).forEach((i: string) => (formikKeys[i] = ""));
  const formik = useFormik({
    initialValues: formikKeys,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const clearCheckbox = () => {
    formik.resetForm();
    setFinalScore(0);
    setShowScore(false);
  };

  const onSubmit = async (values: any) => {
    let checkedBoxes = 0;

    const submittedValues = Object.values(values);
    submittedValues.forEach((value) => {
      if (value) {
        checkedBoxes += 1;
      }
    });
    const finalScore = submittedValues.length - checkedBoxes;
    setFinalScore(finalScore);
    const result = await fetch("/api/addScore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score: finalScore }),
    });
    console.log('logged anonymized score', result);
  };

  const startAgain = () => {
    formik.resetForm();
    setFinalScore(0);
    setShowScore(false);
    setFinalScoreMessage("");
  };

  const shareOnTwitter = () => {
    const str = `Omg I found out my Waterloo Purity Test Score is ${finalScore}. Find out yours at loopuritytest.wtf`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(str)}`);
  };

  return (
    <>
      {!showScore ? (
        <VStack m={8} width="100%">
          <Text>
            Click on every item you have done. MPS stands for Member of the
            Preferred Sex.
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <OrderedList>
              {Object.entries(questions).map(([key, value], idx) => (
                <ListItem key={idx}>
                  <Checkbox
                    id={key}
                    name={key}
                    type="text"
                    colorScheme="blackAlpha"
                    onChange={formik.handleChange}
                    value={formik.values[key]}
                  >
                    {value as any}
                  </Checkbox>
                </ListItem>
              ))}
            </OrderedList>
            <HStack mt={5} width="100%" justifyContent="center">
              <Button type="submit" colorScheme="yellow">
                Submit
              </Button>{" "}
              <Button onClick={clearCheckbox} colorScheme="yellow">
                Clear checkboxes
              </Button>
            </HStack>
          </form>
        </VStack>
      ) : (
        <VStack width="100%" gap={4}>
          <Text as="h2">Your score</Text>
          <Text as="h2" color="red">
            {finalScore}
          </Text>
          <Text as="h3">{finalScoreMessage}</Text>
          <Button onClick={startAgain} colorScheme="yellow">
            Start Again
          </Button>
          <Button
            onClick={shareOnTwitter}
            rightIcon={<FaTwitter />}
            colorScheme="blue"
          >
            Tweet your score
          </Button>
        </VStack>
      )}
    </>
  );
};
