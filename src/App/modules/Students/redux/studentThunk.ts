import {createAsyncThunk} from '@reduxjs/toolkit';
import { addStudent, getStudents } from '../api/studentApi';
import type { Student } from '../../../../models/StudentModel';

export const fetchStudents = createAsyncThunk(
    // action name : Redux uses this to generate: pending , fulfilled , rejected automatically.
    "students/fetchStudents",
    //function that returns a promise : Redux will dispatch the pending action when the promise is pending, fulfilled action when the promise is resolved and rejected action when the promise is rejected.
    async ()=>{
        const students = await getStudents();
        return students;
        //this return becomes payload of the fulfilled action. Redux will dispatch the fulfilled action with this payload when the promise is resolved.
    }
)


export const addStudentThunk = createAsyncThunk(
  "students/addStudent",
  async (student: Student) => {
    return await addStudent(student);
  }
);