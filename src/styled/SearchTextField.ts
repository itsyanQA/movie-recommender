import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const SearchTextField = styled(TextField)`
  & .MuiInputBase-root {
    width: 300px;
    border-radius: 20px;
    background-color: #fff;
    height: 26px;
    padding-top: 5px;
    padding-bottom: 5px;

    & input {
      height: 2px;
    }

    & fieldset {
      border-color: var(--primary-color);
    }

    &:hover fieldset,
    &.Mui-focused fieldset {
      border-color: var(--primary-color-bold);
    }
  }
`;

export default SearchTextField;
