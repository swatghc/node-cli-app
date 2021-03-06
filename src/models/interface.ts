import { ReportType } from "./enum";

export interface CliCommand {
  studentId: string;
  reportType: ReportType;
}
export interface Assessment {
  id:        string;
  name:      string;
  questions: Question[];
}
export interface Question {
  questionId: string;
  position:   number;
}

// Generated by https://quicktype.io

export interface Question {
  id:     string;
  stem:   string;
  type:   Type;
  strand: string;
  config: Config;
}

export interface Config {
  options: Option[];
  key:     Key;
  hint:    string;
}

export enum Key {
  Option1 = "option1",
  Option2 = "option2",
  Option3 = "option3",
  Option4 = "option4",
}

export interface Option {
  id:    Key;
  label: Label;
  value: string;
}

export enum Label {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

export enum Type {
  MultipleChoice = "multiple-choice",
}

// Generated by https://quicktype.io

export interface Response {
  id:           string;
  assessmentId: string;
  assigned:     string;
  started:      string;
  completed?:   string;
  student:      Student;
  responses:    ResponseElement[];
  results:      Results;
}

export interface ResponseElement {
  questionId: string;
  response:   ResponseEnum;
}

export enum ResponseEnum {
  Option1 = "option1",
  Option2 = "option2",
  Option3 = "option3",
  Option4 = "option4",
}

export interface Results {
  rawScore: number;
}

export interface Student {
  id:        string;
  yearLevel: number;
  firstName: string;
  lastName:  string;
}
