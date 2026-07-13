import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";



interface StudentHeaderProps {
  onAddStudent: () => void;
}

const StudentHeader = ({
  onAddStudent,
}: StudentHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Typography variant="h4">
        Students
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddStudent}
      >
        Add Student
      </Button>
    </Box>
  );
};

export default StudentHeader;