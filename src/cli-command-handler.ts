import { ReportType } from "./types/enum";
import { CliCommand } from "./types/interface";

export class CliCommandHandler {
  constructor() {}

  public handle(command: CliCommand) {
    this.validateCommand(command);
    console.log(command);
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
