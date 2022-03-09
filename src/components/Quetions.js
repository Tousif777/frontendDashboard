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
import Addquestion from "./Addquestion";

const Quetions = () => {
  const [quetions, setQuetions] = useState([]);
  useEffect(() => {
    //get data from api and set to state users
    axios.get("http://localhost:3001/questions").then((res) => {
      setQuetions(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <Addquestion />
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fa fa-question"></i>
                  Questions and Answers
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>option 1</th>
                        <th>option 2</th>
                        <th>option 3</th>
                        <th>option 4</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {quetions.map((quetion, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{quetion.question}</td>
                          <td>{quetion.answer}</td>
                          <td>{quetion.option1}</td>
                          <td>{quetion.option2}</td>
                          <td>{quetion.option3}</td>
                          <td>{quetion.option4}</td>
                          <td>
                            <div className="btn btn-sm ">
                              <BasicUsage quetion={quetion} />
                            </div>
                            <div
                              className="btn btn-sm "
                              onClick={async () => {
                                await axios.delete(
                                  `http://localhost:3001/questions/${quetion._id}`
                                );
                                window.location.reload();
                              }}
                            >
                              <Button>Delete</Button>
                            </div>
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
    </div>
  );
};

export default Quetions;

function BasicUsage({ quetion }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState({
    question: quetion.question,
    answer: quetion.answer,
    option1: quetion.option1,
    option2: quetion.option2,
    option3: quetion.option3,
    option4: quetion.option4,
    answer: quetion.answer,
  });

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{quetion.question}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Question"
              value={userData.question}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  question: e.target.value,
                })
              }
            />
            <Input
              placeholder="Answer"
              value={userData.answer}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  answer: e.target.value,
                })
              }
            />
            <Input
              placeholder="option 1"
              value={userData.option1}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  option1: e.target.value,
                })
              }
            />
            <Input
              placeholder="option 2"
              value={userData.option2}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  option2: e.target.value,
                })
              }
            />
            <Input
              placeholder="option 3"
              value={userData.option3}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  option3: e.target.value,
                })
              }
            />
            <Input
              placeholder="option 4"
              value={userData.option4}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  option4: e.target.value,
                })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              disabled={
                !userData.question ||
                !userData.answer ||
                !userData.option1 ||
                !userData.option2 ||
                !userData.option3 ||
                !userData.option4
              }
              onClick={() => {
                axios
                  .put(
                    `http://localhost:3001/questions/${quetion._id}`,
                    userData
                  )
                  .then((res) => {
                    console.log(res);
                    window.location.reload();
                  });
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
