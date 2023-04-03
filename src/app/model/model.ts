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

export interface NutritionData {
  id: number;
  name: string;
  type: string;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface FitnessPlanData {
  id: number;
  name: string;
  comment: string;
  image: string;
  trainingDays: TrainingDayData[];
}

export interface TrainingDayData {
  id: number;
  name: DayOfTheWeek;
  image: string;
  workoutsId: number[];
  nutritionId: number[];
}

export enum DayOfTheWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

export interface DayOfTheWeekView {
  value: DayOfTheWeek;
  viewValue: string;
}

