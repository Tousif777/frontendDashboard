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
import React, { useEffect, useState } from "react";
import Adduser from "./Adduser";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //get data from api and set to state users
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container">
      <Adduser />
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <i className="fa fa-user"></i>
                User List
              </h4>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {users.map((user, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <div className="btn btn-sm ">
                            <BasicUsage user={user} />
                          </div>

                          <Button
                            onClick={() => {
                              axios
                                .delete(
                                  `http://localhost:3001/users/${user._id}`
                                )
                                .then((res) => {
                                  console.log(res);
                                  window.location.reload();
                                });
                            }}
                          >
                            <i className="fa fa-trash">delete</i>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;

function BasicUsage({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState({
    name: user.name,
    password: user.password,
  });

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user.email}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Name"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  name: e.target.value,
                });
              }}
              value={userData.name}
            />
            <Input
              placeholder="Password"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  password: e.target.value,
                });
              }}
              value={userData.password}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                axios
                  .put(`http://localhost:3001/users/${user._id}`, userData)
                  .then((res) => {
                    console.log(res);
                    window.location.reload();
                  });
              }}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
