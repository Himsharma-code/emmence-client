import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { User } from "../../api/user";

const UserCard = ({ user }: { user: User }) => {
  // Assuming the user object has 'firstName', 'lastName', and 'email' properties
  const { firstName, lastName, email } = user;

  // Get the first letter of the first name
  const firstLetter = firstName ? firstName.charAt(0).toUpperCase() : "";

  return (
    <Card
      variant="outlined"
      sx={{
        border: "none",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "6px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          padding: "14px",
        }}
      >
        <div
          style={{
            marginRight: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#F2F5FC",
            color: "#0231C8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          {firstLetter}
        </div>
        <div>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "16px", textAlign: "left" }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#C6C6C6",
              fontFamily: "Manrope",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {email}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
