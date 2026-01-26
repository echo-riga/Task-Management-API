import fs from "fs";
import path from "path";
import { Task } from "../models/taskModel";
import { TaskCreateDto, TaskUpdateDto } from "../dto/taskDto";
import { TaskRepository } from "./taskRepository";

const DATA_FILE = path.join(__dirname, "..", "..", "data", "tasks.json");

function readData(): Task[] {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }

  const raw = fs.readFileSync(DATA_FILE, "utf-8").trim();

  // If file is empty, return empty array
  if (!raw) return [];

  return JSON.parse(raw) as Task[];
}
function writeData(data: Task[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export class TaskJsonRepo implements TaskRepository {
  async getAll(): Promise<Task[]> {
    return readData();
  }

  async getById(id: string): Promise<Task | null> {
    const data = readData();
    return data.find((t) => t.id === Number(id)) || null;
  }

  async create(payload: TaskCreateDto): Promise<Task> {
    const data = readData();
    const newTask: Task = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      userId: payload.userId,
      title: payload.title,
      completed: payload.completed ?? false,
    };
    data.push(newTask);
    writeData(data);
    return newTask;
  }

  async update(id: string, payload: TaskUpdateDto): Promise<Task | null> {
    const data = readData();
    const idx = data.findIndex((t) => t.id === Number(id));
    if (idx === -1) return null;

    data[idx] = {
      ...data[idx],
      ...payload,
    };

    writeData(data);
    return data[idx];
  }

  async delete(id: string): Promise<void> {
    const data = readData();
    const filtered = data.filter((t) => t.id !== Number(id));
    writeData(filtered);
  }
}
