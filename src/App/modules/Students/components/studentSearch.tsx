import { TextField } from "@mui/material";

interface StudentSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const StudentSearch = ({ searchTerm, onSearchChange }: StudentSearchProps) => {
  return (
    <div>
      <TextField
        label="Search Students"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
};

export default StudentSearch;
