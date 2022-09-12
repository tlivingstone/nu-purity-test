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
import questions from "@data/test-questions.json";
import { useState, useEffect } from "react";

export const PurityForm = () => {
  const [showScore, setShowScore] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
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

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
    let checkedBoxes = 0;

    const submittedValues = Object.values(values);
    submittedValues.forEach((value) => {
      if (value) {
        checkedBoxes += 1;
      }
    });
    const finalScore = submittedValues.length - checkedBoxes;
    setFinalScore(finalScore);
  };

  const startAgain = () => {
    formik.resetForm();
    setFinalScore(0);
    setShowScore(false);
  };

  return (
    <>
      {!showScore ? (
        <VStack m={8}>
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
            <HStack mt={5}>
              <Button type="submit">Submit</Button>{" "}
              <Button onClick={clearCheckbox}>Clear checkboxes</Button>
            </HStack>
          </form>
        </VStack>
      ) : (
        <VStack>
          <Text as="h2">Your score</Text>
          <Text as="h3" color="red">
            {finalScore}
          </Text>
          <Button onClick={startAgain}>Start Again</Button>
        </VStack>
      )}
    </>
  );
};
