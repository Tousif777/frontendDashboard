import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Addquestion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState([
    {
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    },
  ]);

  return (
    <div className="m-4">
      <Button onClick={onOpen}>Add a Question</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Question"
              onChange={(e) => {
                setUsers({
                  ...users,
                  question: e.target.value,
                });
              }}
              value={users.question}
            />
            <Input
              placeholder="Answer"
              onChange={(e) => {
                setUsers({
                  ...users,
                  answer: e.target.value,
                });
              }}
              value={users.answer}
            />
            <Input
              placeholder="option 1"
              onChange={(e) => {
                setUsers({
                  ...users,
                  option1: e.target.value,
                });
              }}
              value={users.option1}
            />
            <Input
              placeholder="option 2"
              onChange={(e) => {
                setUsers({
                  ...users,
                  option2: e.target.value,
                });
              }}
              value={users.option2}
            />
            <Input
              placeholder="option 3"
              onChange={(e) => {
                setUsers({
                  ...users,
                  option3: e.target.value,
                });
              }}
              value={users.option3}
            />
            <Input
              placeholder="option 4"
              onChange={(e) => {
                setUsers({
                  ...users,
                  option4: e.target.value,
                });
              }}
              value={users.option4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                axios
                  .post("http://localhost:3001/questions", users)
                  .then((res) => {
                    onClose();
                    window.location.reload();
                  });
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Addquestion;
