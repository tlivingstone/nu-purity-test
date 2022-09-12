import { Checkbox, OrderedList, Text, VStack } from "@chakra-ui/react"

export const Test = () => {
  return (
    <>
      <VStack>
        <Text>
          Click on every item you have done. MPS stands for Member of the Preferred Sex.
        </Text>
        <OrderedList>
          <Checkbox>
            A question
          </Checkbox>
        </OrderedList>
      </VStack>
    </>
  )
}