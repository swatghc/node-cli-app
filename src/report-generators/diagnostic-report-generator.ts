import { ReportGenerator } from "./report-generator";

export class DiagnosticReporter extends ReportGenerator {
  public generateReport(): string {
    throw new Error("Method not implemented.");
  }
}
