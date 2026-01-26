import { Task } from "../models/taskModel";
import { TaskCreateDto, TaskUpdateDto } from "../dto/taskDto";

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  getById(id: string): Promise<Task | null>;
  create(payload: TaskCreateDto): Promise<Task>;
  update(id: string, payload: TaskUpdateDto): Promise<Task | null>;
  delete(id: string): Promise<void>;
}
