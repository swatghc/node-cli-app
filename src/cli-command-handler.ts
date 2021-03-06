import { ReportType } from "./models/enum";
import { CliCommand } from "./models/interface";
import { ReportGeneratorFactory } from "./report-generators/report-generator-factory";

export class CliCommandHandler {

  public handle(command: CliCommand) {
    this.validateCommand(command);
    console.log(command);
    const reportFactory = new ReportGeneratorFactory();
    const generator = reportFactory.getReportGenerator(command.reportType);
    generator.generateReport(command.studentId);
  }

  private validateCommand(command: CliCommand): void {
    const errors = [];
    if (command.reportType in ReportType) {
    } else {
      errors.push(new Error("Invalid report type"));
    }

    if (!command.studentId) {
      errors.push(new Error("Student ID is required"));
    }
    if (errors.length > 0) {
      throw errors;
    }
  }
}
