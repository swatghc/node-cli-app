import { ReportType } from "./models/enum";
import { CliCommand } from "./models/interface";

export class CliCommandHandler {

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
