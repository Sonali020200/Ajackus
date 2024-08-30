import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import FormEdit from "./Form";

const EditUser = ({
  isOpen,
  onClose,
  userData,
  setDetails,
  operation,
  setTotalCount,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "sm", "md", "lg"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {operation === "edit" ? "Edit Details" : "Add User"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEdit
              userData={userData}
              setDetails={setDetails}
              operation={operation}
              setTotalCount={setTotalCount}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      ;
    </div>
  );
};

export default EditUser;
