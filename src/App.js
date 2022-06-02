import "./App.css";
import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import LoginStatus from "./Components/LoginStatus";
import { AuthContext } from "./Context/AuthContext";
import { Container } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  const { isToggleAuth } = useContext(AuthContext);

  return (
    <Container
      p={4}
      w="600px"
      h="auto"
      border="1px solid gray"
      marginTop="1rem"
    >
      <Flex flexDirection="column">
        <div className="App">
          <Text>Navbar</Text>
          <Button colorScheme="blue" variant="ghost">
            <Navbar></Navbar>
          </Button>
          {!isToggleAuth ? "" : <LoginStatus></LoginStatus>}
        </div>
      </Flex>
    </Container>
  );
}

export default App;
