import api from '../../../../api/axios';
import {ENDPOINTS} from '../../../../api/endpoints';
import type { Student } from '../../../../models/StudentModel';

export const getStudents = async ()=>{
    //this will call http://dummyjson.com/users and return the data
    const response = await api.get(ENDPOINTS.STUDENTS);
    return response.data;
}

//add students
export const addStudent = async (student: Student) => {
  const response = await api.post(ENDPOINTS.STUDENTS, student);
  return response.data;
};