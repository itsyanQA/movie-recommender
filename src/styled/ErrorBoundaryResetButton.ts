import { Button, styled } from "@mui/material";

export const ErrorBoundaryResetButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f4b005",
  color: "#ffffff",
  fontFamily: "Jost, sans-serif",
  width: "150px",
  height: "35px",
  "&:hover": {
    backgroundColor: "#f4b005",
  },

}));
