export interface WorkoutData {
  name: string;
  comment: string;
  date: string;
  exercises: ExerciseData[];
}
export interface GoalData {
  name: string;
  comment: string;
  started: Date;
  completed: Date;
}
export interface ExerciseData {
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
  gender?: Gender;
  birthdate?: Date;
  email: string;
}

export enum Gender {
  GENDER_MALE="GENDER_MALE",
  GENDER_FEMALE="GENDER_MALE"
}


