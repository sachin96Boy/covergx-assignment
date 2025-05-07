export class Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
