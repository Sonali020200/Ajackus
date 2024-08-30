import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import DisplayUser from "./components/Display";
import { FaPlus } from "react-icons/fa6";
import EditUser from "./components/Overlay";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState([]);
  const [totalCount, setTotalCount] = useState(10);
  return (
    <Box w="100%" minH="100vh" bg="backColor" p="1em 2em">
      <Flex
        align={["flex-start", "flex-start", "center", "center"]}
        justify={["center", "center", "space-between", "space-between"]}
        flexDir={["column", "column", "row", "row"]}
        w="100%"
        gap={["1em", "1em", "", ""]}
        p="2em 0"
      >
        <Box>
          <Heading color="headingColorWhite">User Management</Heading>
          
        </Box>
        <Button
          bg="ctaPurple"
          onClick={() => {
            onOpen();
          }}
        >
          <FaPlus /> Add User
        </Button>
      </Flex>
      <DisplayUser
        setDetails={setDetails}
        details={details}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />
      <EditUser
        isOpen={isOpen}
        onClose={onClose}
        operation={"add"}
        setDetails={setDetails}
        setTotalCount={setTotalCount}
      />
    </Box>
  );
}

export default App;
