import { Autocomplete } from "@mui/material";
import SearchTextField from "../../styled/SearchTextField";
import "./SearchBar.module.scss";

const tempData = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];

export function SearchBar() {
  return (
    <Autocomplete
      freeSolo
      options={tempData?.map((option) => option.title)}
      renderInput={(params) => (
        <SearchTextField placeholder="Search" {...params} />
      )}
    />
  );
}
