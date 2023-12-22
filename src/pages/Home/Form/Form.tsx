import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography, Grid, Container } from "@mui/material";
import { useAppDispatch } from "../../../hooks";
import { addUser } from "../../../redux/actions";
import * as Yup from "yup";
import { FormHelperText } from "@mui/material";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const useStyles = () => ({
  form: {
    width: "100%",
    marginTop: "1rem",
  },
  submit: {
    marginTop: "1rem",
    borderRadius: "10px",
    background: "#0231C8",
  },
  label: {
    color: "#0231C8",
    // fontFamily: "Manrope",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "left",
  },
  input: {
    borderRadius: "10px",
    border: "1px solid #C6C6C6",
    background: "#FFF",
  },
});

const Form: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const res: any = await dispatch(addUser(values));
      console.log("res", res);
      if (!!res?.error) {
        setError("User Already Exist");
      }
    },
  });

  useEffect(() => {
    setError("");
  }, [formik.values]);
  console.log("error", error);
  return (
    <Container component="main" maxWidth="xs">
      <form style={classes.form} onSubmit={formik.handleSubmit}>
        <Typography
          sx={{ marginBottom: "10px", textAlign: "left" }}
          component="h1"
          variant="h5"
        >
          Create User
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={classes.label}>First Name</Typography>
            <TextField
              fullWidth
              sx={classes.input}
              id="firstName"
              name="firstName"
              variant="outlined"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={classes.label}>Last Name</Typography>
            <TextField
              sx={classes.input}
              fullWidth
              id="lastName"
              name="lastName"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={classes.label}>Email​ Address</Typography>
            <TextField
              sx={classes.input}
              fullWidth
              id="email"
              name="email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={classes.label}>Phone Number</Typography>
            <TextField
              sx={classes.input}
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              variant="outlined"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <FormHelperText error={!!error}>{error}</FormHelperText>
        <Button
          disabled={!formik.isValid}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={classes.submit}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default Form;
