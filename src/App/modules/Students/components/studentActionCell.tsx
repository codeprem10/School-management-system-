import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const StudentActionsCell = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Tooltip title="View">
        <IconButton
          size="small"
          onClick={() => console.log("View")}
        >
          <VisibilityIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit">
        <IconButton
          size="small"
          onClick={() => console.log("Edit")}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton
          size="small"
          onClick={() => console.log("Delete")}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default StudentActionsCell;