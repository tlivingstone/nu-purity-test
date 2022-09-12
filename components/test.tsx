import { Checkbox, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react"

export const Test = () => {
  return (
    <>
      <VStack>
        <Text>
          Click on every item you have done. MPS stands for Member of the Preferred Sex.
        </Text>
        <OrderedList>
          <ListItem>
            <Checkbox colorScheme='blackAlpha'>
              A question
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox colorScheme='blackAlpha'>
              A question
            </Checkbox>
          </ListItem>    <ListItem>
            <Checkbox colorScheme='blackAlpha'>
              A question
            </Checkbox>
          </ListItem>    <ListItem>
            <Checkbox colorScheme='blackAlpha'>
              A question
            </Checkbox>
          </ListItem>    <ListItem>
            <Checkbox colorScheme='blackAlpha'>
              A question
            </Checkbox>
          </ListItem>
        </OrderedList>
      </VStack>
    </>
  )
}