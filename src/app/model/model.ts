export interface WorkoutData {
  id: number;
  name: string;
  comment: string;
  image: string;
  date: string;
  exercisesId: number[];
}
export interface ExerciseData {
  id: number;
  name: string;
  image: string;
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


export interface FitnessPlanData {
  id: number;
  name: string;
  comment: string;
  image: string;
  trainingDays: number[];
}

export interface TrainingDayData {
  id: number;
  name: DayOfTheWeek;
  comment: string;
  image: string;
  workoutId: number;
}

export enum DayOfTheWeek {
  MONDAY = "Понедельник",
  TUESDAY = "Вторник",
  WEDNESDAY = "Среда",
  THURSDAY = "Четверг",
  FRIDAY = "Пятница",
  SATURDAY = "Суббота",
  SUNDAY = "Воскресенье",
}

export interface DayOfTheWeekView {
  value: DayOfTheWeek;
  viewValue: string;
}

export interface EntityCheckboxView {
  value: any;
  selected: boolean;
}

