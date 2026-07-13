export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: "male" | "female";
  image: string;
  department?: string;
  enrollmentDate?: string;
}
