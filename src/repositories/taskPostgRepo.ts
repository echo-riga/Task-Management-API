import { Task } from "../models/taskModel";
import { TaskCreateDto, TaskUpdateDto } from "../dto/taskDto";
import { TaskRepository } from "./taskRepository";
import db from "../db/knex";

export class TaskPostgRepo implements TaskRepository {
  async getAll(): Promise<Task[]> {
    return db<Task>("tasks").select("*");
  }

  async getById(id: string): Promise<Task | null> {
    const task = await db<Task>("tasks")
      .where({ id: Number(id) })
      .first();
    return task || null;
  }

  async create(payload: TaskCreateDto): Promise<Task> {
    const [task] = await db<Task>("tasks").insert(payload).returning("*");
    return task;
  }

  async update(id: string, payload: TaskUpdateDto): Promise<Task | null> {
    const [task] = await db<Task>("tasks")
      .where({ id: Number(id) })
      .update(payload)
      .returning("*");
    return task || null;
  }

  async delete(id: string): Promise<void> {
    await db<Task>("tasks")
      .where({ id: Number(id) })
      .del();
  }
}
