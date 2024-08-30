import React, { useEffect, useState } from "react";

import {
  Table,
  Flex,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Heading,
  Avatar,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from "./Pagination";
import EditUser from "./Overlay";

import { deleteUser } from "../requests";
import { getUsers } from "../requests";

const DisplayUser = ({ setDetails, details, totalCount, setTotalCount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [editUser, setEditUser] = useState({});

  const handleLimitChange = (value) => {
    setLimit(Number(value));
  };
  useEffect(() => {
    getUsers(page, limit, setIsLoading, setError, setDetails);
  }, [page, limit]);
  if (isLoading) {
    return (
      <Flex minH="60vh" justify={"center"} align="center">
        <Heading fontSize="5em" color="white">
          Loading....
        </Heading>
      </Flex>
    );
  }
  if (error) {
    return (
      <Flex minH="60vh" justify={"center"} align="center">
        <Heading fontSize="3em" color="white">
          {error}
        </Heading>
      </Flex>
    );
  }

  return (
    <Box bg="tableColor" borderRadius={"20px"} p="2em 1em" minH="60vh">
      <TableContainer color={"fontColorGrey"} size={["sm", "sm", "lg", "lg"]}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"headingColorWhite"}>Id</Th>

              <Th color={"headingColorWhite"}>User</Th>
              <Th color={"headingColorWhite"}>Email</Th>
              <Th color={"headingColorWhite"}>Department</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {details &&
              details.map((user, index) => {
                return (
                  <>
                    <Tr key={index}>
                      <Td color={"headingColorWhite"}>{user.id}</Td>

                      <Td color={"headingColorWhite"}>
                        {" "}
                        <Flex align="center" gap="10px">
                          <Avatar
                            size="sm"
                            name={user.name}
                            src="https://bit.ly/broken-link"
                          />
                          {user.name}
                        </Flex>
                      </Td>
                      <Td color={"headingColorWhite"}>{user.email}</Td>
                      <Td color={"headingColorWhite"}>{user.company.name}</Td>
                      <Td>
                        <Button
                          bg="ctaPurple"
                          size={["xs", "xs", "sm", "lg"]}
                          borderRadius={"1em"}
                          onClick={() => {
                            setEditUser(user);
                            onOpen();
                          }}
                          mr="10px"
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          size={["xs", "xs", "sm", "lg"]}
                          bg="ctaPurple"
                          borderRadius={"1em"}
                          onClick={async () => {
                            const result = await deleteUser(
                              user.id,
                              setDetails
                            );
                            if (result)
                              toast({
                                title: "Success",
                                description: "Deleted",
                                status: "success",
                                duration: 5000,
                                isClosable: true,
                              });
                          }}
                        >
                          <MdDelete />
                        </Button>
                      </Td>
                    </Tr>
                  </>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <EditUser
        isOpen={isOpen}
        onClose={onClose}
        userData={editUser}
        setDetails={setDetails}
        operation={"edit"}
        setTotalCount={setTotalCount}
      />

      <Pagination
        page={page}
        limit={limit}
        totalCount={totalCount}
        setPage={setPage}
        handleLimitChange={handleLimitChange}
      />
    </Box>
  );
};

export default DisplayUser;
