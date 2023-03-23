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

export class UserAccountData {
  name?: string;
  surname?: string;
  age?: number
  weight?: number;
  height?: number;
  gender?: string;
  birthdate?: Date;
  email?: string;
}

export enum Gender {
  GENDER_MALE="Мужской",
  GENDER_FEMALE="Женский"
}
