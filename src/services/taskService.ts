import { getRepository } from "../factories/repoFactory";
import { TaskCreateDto, TaskUpdateDto } from "../dto/taskDto";

export class TaskService {
  private repo = getRepository();

  getAll() {
    return this.repo.getAll();
  }

  getById(id: string) {
    return this.repo.getById(id);
  }

  create(payload: TaskCreateDto) {
    return this.repo.create(payload);
  }

  update(id: string, payload: TaskUpdateDto) {
    return this.repo.update(id, payload);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
