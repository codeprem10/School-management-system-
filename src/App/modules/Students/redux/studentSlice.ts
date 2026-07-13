import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../../../../models/StudentModel";
import { addStudentThunk, fetchStudents } from "./studentThunk";

interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //cases for getting student from api using fetchStudents thunk. Redux will automatically dispatch these actions when the promise is pending, fulfilled or rejected.
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        //stores action.payload in students state. action.payload is the data returned from the promise in fetchStudents thunk.
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch students";
      })

      //cases for adding student using addStudentThunk. Redux will automatically dispatch these actions when the promise is pending, fulfilled or rejected.
      .addCase(addStudentThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(addStudentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })

      .addCase(addStudentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add student";
      });
  },
});

export default studentSlice.reducer;
//reducer because store need function to update the state. This reducer will be used in store.ts to create the store.
