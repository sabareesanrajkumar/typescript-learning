import { Router, Request, Response, NextFunction } from "express";
import { Todo } from "../models/todos";

type requestBody = { text: string };
type requestParams = { todoId: string };
let todos: Todo[] = [];
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as requestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "posted" });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params = req.params as requestParams;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "updated" });
  } else {
    return res.status(400).json({ message: "could'nt update" });
  }
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as requestParams;
  todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
  res.status(200).json({ message: "deleted" });
});

export default router;
