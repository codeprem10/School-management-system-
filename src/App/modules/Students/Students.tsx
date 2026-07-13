import { useEffect, useState } from "react";
import { getStudents } from "./api/studentApi";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStudentThunk, fetchStudents } from "./redux/studentThunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import StudentDataGrid from "./components/studentDataGrid";
import StudentSearch from "./components/studentSearch";
import StudentHeader from "./components/studentHeader";
import StudentDialog from "./components/studentDialog";

const Students = () => {
  const { students, loading, error } = useAppSelector(
    (state) => state.students,
  );

  //state for search term , filtering students based on search term
  const [searchTerm, setSearchTerm] = useState("");

  //to open dialog box for add student form
  const [open, setOpen] = useState(false);

  /* before redux : api call*/
  // useEffect(()=>{
  //   const fetchStudents = async ()=>{
  //     const students = await getStudents();
  //     console.log(students);
  //   }
  //   fetchStudents();
  // } , [])

  /* after redux :  api call*/
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  console.log(students);
  console.log(loading);
  console.log(error);

  //filter students based on search term
  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );
  if (loading) {
    return <Typography>Loading students...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>

      {/* student header */}
      <StudentHeader onAddStudent={() => setOpen(true)} />

      <StudentDialog
        open={open}
        onClose={() => setOpen(false)}
        onSave={(student) => dispatch(addStudentThunk(student))}
      />

      {/* search component */}
      <StudentSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/* data grid component */}
      <StudentDataGrid students={filteredStudents} />
      {/* Render the list of students here */}
    </div>
  );
};

export default Students;
