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

const Adduser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  return (
    <div className="m-4">
      <Button onClick={onOpen}>Add a User</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Name"
              onChange={(e) => {
                setUsers({
                  ...users,
                  name: e.target.value,
                });
              }}
              value={users.name}
            />
            <Input
              placeholder="Email"
              onChange={(e) => {
                setUsers({
                  ...users,
                  email: e.target.value,
                });
              }}
              value={users.email}
            />
            <Input
              placeholder="Password"
              onChange={(e) => {
                setUsers({
                  ...users,
                  password: e.target.value,
                });
              }}
              value={users.password}
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
                axios.post("http://localhost:3001/users", users).then((res) => {
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

export default Adduser;
