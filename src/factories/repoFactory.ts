import { TaskRepository } from "../repositories/taskRepository";
import { TaskJsonRepo } from "../repositories/taskJsonRepo";
import { TaskPostgRepo } from "../repositories/taskPostgRepo";

export function getRepository(): TaskRepository {
  const datasource = process.env.DATASOURCE || "json";

  if (datasource === "postgres") {
    return new TaskPostgRepo();
  }

  return new TaskJsonRepo();
}
