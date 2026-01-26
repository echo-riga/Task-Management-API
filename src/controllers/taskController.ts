import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { TaskIdParams } from "../dto/paramsDto";
import { TaskCreateDto, TaskUpdateDto } from "../dto/taskDto";

const service = new TaskService();

export class TaskController {
  // GET /tasks
  static async getAll(req: Request, res: Response) {
    const tasks = await service.getAll();
    res.json(tasks);
  }

  // GET /tasks/:id
  static async getById(req: Request<TaskIdParams>, res: Response) {
    const task = await service.getById(req.params.id);
    if (!task) return res.status(404).json({ message: "Not found" });
    res.json(task);
  }

  // POST /tasks
  static async create(req: Request<{}, {}, TaskCreateDto>, res: Response) {
    const created = await service.create(req.body);
    res.status(201).json(created);
  }

  // PUT /tasks/:id
  static async update(
    req: Request<TaskIdParams, {}, TaskUpdateDto>,
    res: Response,
  ) {
    const updated = await service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  }

  // DELETE /tasks/:id
  static async delete(req: Request<TaskIdParams>, res: Response) {
    await service.delete(req.params.id);
    res.status(204).send();
  }
}
