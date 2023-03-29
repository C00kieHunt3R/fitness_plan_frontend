export interface WorkoutData {
  id: number;
  name: string;
  comment: string;
  image: string;
  date: string;
  exercisesId: number[];
}
export interface GoalData {
  id: number;
  name: string;
  comment: string;
  started: Date;
  completed: Date;
}
export interface ExerciseData {
  id: number;
  name: string;
  reps: number;
  sets: number;
  weight: number;
}

export interface UserAccountData {
  name: string;
  surname: string;
  age?: number
  weight?: number;
  height?: number;
  gender: string;
  birthdate?: string;
  email: string;
}

export enum Gender {
  GENDER_MALE="GENDER_MALE",
  GENDER_FEMALE="GENDER_MALE"
}
export interface GenderTypeView {
  value: Gender;
  viewValue: string;
}


