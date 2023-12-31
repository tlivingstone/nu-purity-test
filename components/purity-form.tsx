import {
  Button,
  Checkbox,
  HStack,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import questions from "@data/questions.json";
import { db } from "@utils/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";

export const PurityForm = () => {
  const [showScore, setShowScore] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [finalScoreMessage, setFinalScoreMessage] = useState("");

  useEffect(() => {
    if (finalScore > 90) {
      setFinalScoreMessage("ur too pure. welcome to nu.");
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
  const formikKeys = JSON.parse(JSON.stringify(questions));
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

  // object of question keyss
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: Record<number, string | boolean>) => {
    let checkedBoxes = 0;
    const submittedValues = Object.values(values);
    submittedValues.forEach((value) => {
      if (value) {
        checkedBoxes += 1;
      }
    });
    if (checkedBoxes === 0) {
      return;
    }
    const finalScore = submittedValues.length - checkedBoxes;
    setFinalScore(finalScore);

    const scoreRef = doc(collection(db, "scores"));
    await setDoc(scoreRef, { score: finalScore });

    const questionsRef = doc(collection(db, "questions"));
    const finalValues = [] as Array<{ id: number; title: string }>;
    Object.values(values).forEach((value, idx) => {
      if (value) {
        const element = {
          id: parseInt(Object.keys(questions)[idx]),
          title: Object.values(questions)[idx],
        };
        finalValues.push(element);
      }
    });
    await setDoc(questionsRef, { questions: finalValues });
  };

  const startAgain = () => {
    formik.resetForm();
    setFinalScore(0);
    setShowScore(false);
    setFinalScoreMessage("");
  };

  const shareOnTwitter = () => {
    const str = `Omg I found out my NU Purity Test Score is ${finalScore}. Find out yours at nupuritytest.com`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(str)}`);
  };
  ``;
  return (
    <>
      {!showScore ? (
        <VStack m={8} width="100%">
          <Text>Click on every item you have done.</Text>
          <form onSubmit={formik.handleSubmit}>
            <OrderedList>
              {Object.entries(questions).map(([key, value], idx) => (
                <ListItem key={idx}>
                  <Checkbox
                    id={key}
                    name={key}
                    type="text"
                    colorScheme="blackAlpha"
                    color="black"
                    border="gray"
                    onChange={formik.handleChange}
                    value={formik.values[key]}
                  >
                    {value}
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
