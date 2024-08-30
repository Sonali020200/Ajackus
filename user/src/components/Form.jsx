import * as React from "react";
import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { editUser, createUser } from "../requests";
import styles from "../components/Form.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function FormEdit({
  userData,
  setDetails,
  operation,
  setTotalCount,
}) {
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: userData ? userData.name : "",
    email: userData ? userData.email : "",
    company: { name: userData ? userData.company.name : "" },
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleDepartment = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      company: {
        ...prevFormData.company,
        name: e.target.value,
      },
    }));
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    company: Yup.object({
      name: Yup.string().required("Department is required"),
    }),
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      if (loading) {
        toast({
          title: "loading",
          description: "Wait don't press any key",
          status: "loading",
          duration: 5000,
          isClosable: true,
        });
      }

      if (operation === "edit") {
        const result = await editUser(userData.id, formData, setDetails);
        if (result.status === 200) {
          toast({
            title: "Success",
            description: "Details Changed",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Failure",
            description: "Something Went Wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } else if (operation === "add") {
        const result = await createUser(formData, setDetails, setTotalCount);
        if (result.status === 200 || result.status === 201) {
          toast({
            title: "Success",
            description: "User Created",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Failure",
            description: "User Added",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
      setLoading(false);

      console.log(formData);
    } catch (e) {
      const newErrors = {};
      e.inner.forEach((er) => {
        newErrors[er.path] = er.message;
      });
      setErrors(newErrors);
    }
  };
  return (
    <VStack spacing={3} align="stretch" color="black">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(e) => {
            handleName(e);
          }}
        ></Input>
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={handleEmail}
        ></Input>
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </FormControl>
      <FormControl id="department">
        <FormLabel>Department</FormLabel>

        <Input
          placeholder="Select Department"
          value={formData.company.name}
          onChange={handleDepartment}
        ></Input>
        {errors["company.name"] && (
          <div className={styles.error}>{errors["company.name"]}</div>
        )}
      </FormControl>
      <Button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {operation === "edit" ? "Edit User" : "Add User"}
      </Button>
    </VStack>
  );
}
