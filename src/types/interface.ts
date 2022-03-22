import { ReportType } from "./enum";

export interface CliCommand {
  studentId: string;
  reportType: ReportType;
}
