import axios from "axios";
import { getRepository } from "./factories/repoFactory";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

export async function seedData() {
  const repo = getRepository();

  // prevent duplicate seeding
  const existing = await repo.getAll();
  if (existing.length > 0) return;

  const { data } = await axios.get(API_URL);

  for (const t of data) {
    await repo.create({
      userId: t.userId,
      title: t.title,
      completed: t.completed,
    });
  }

  console.log("Seed completed!");
}

seedData().catch((err) => {
  console.error("Seed failed:", err);
});
