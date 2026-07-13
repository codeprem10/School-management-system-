import { Box, Avatar, Typography, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { Student } from "../../../../models/StudentModel";
import type { GridColDef } from "@mui/x-data-grid";
import StudentActionsCell from "./studentActionCell";

interface StudentDataGridProps {
  students: Student[];
}

//columns for data grid
const columns: GridColDef[] = [
    //actions column with view, edit and delete buttons
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    filterable: false,

    renderCell: () => <StudentActionsCell />,
  },
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },

  {
    field: "student",
    headerName: "Student",
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={params.row.image} />

        <Typography>
          {params.row.firstName} {params.row.lastName}
        </Typography>
      </Box>
    ),
  },

  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 170,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 130,
    //i want to capitlize the first letter of gender
    renderCell: (params) => (
      <Chip
        label={
          params.row.gender.charAt(0).toUpperCase() + params.row.gender.slice(1)
        }
        size="small"
        variant="outlined"
      />
    ),
  },

  {
    field: "age",
    headerName: "Age",
    width: 90,
  },
];

const StudentDataGrid = ({ students }: StudentDataGridProps) => {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid rows={students} columns={columns} />
    </Box>
  );
};

export default StudentDataGrid;
