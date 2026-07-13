import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import type { Student } from "../../../../models/StudentModel";
import { useState } from "react";

interface StudentDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (student: Student) => void;
}

const StudentDialog = ({ open, onClose, onSave }: StudentDialogProps) => {
  const [student, setStudent] = useState<Student>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: 18,
    gender: "male",
    image: "",
  });

  const handleSubmit = () => {
    onSave(student);
    onClose();

    setStudent({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: 18,
      gender: "male",
      image: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Student</DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
          }}
        >
          <TextField
            label="First Name"
            fullWidth
            value={student.firstName}
            onChange={(e) =>
              setStudent({
                ...student,
                firstName: e.target.value,
              })
            }
          />

          <TextField
            label="Last Name"
            fullWidth
            value={student.lastName}
            onChange={(e) =>
              setStudent({
                ...student,
                lastName: e.target.value,
              })
            }
          />

          <TextField
            label="Email"
            fullWidth
            value={student.email}
            onChange={(e) =>
              setStudent({
                ...student,
                email: e.target.value,
              })
            }
          />

          <TextField
            label="Phone"
            fullWidth
            value={student.phone}
            onChange={(e) =>
              setStudent({
                ...student,
                phone: e.target.value,
              })
            }
          />

          <TextField
            label="Gender"
            select
            fullWidth
            value={student.gender}
            onChange={(e) =>
              setStudent({
                ...student,
                gender: e.target.value as "male" | "female",
              })
            }
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <TextField
            label="Age"
            type="number"
            fullWidth
            value={student.age}
            onChange={(e) =>
              setStudent({
                ...student,
                age: parseInt(e.target.value) || 0,
              })
            }
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit}>
          Add Student
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentDialog;
