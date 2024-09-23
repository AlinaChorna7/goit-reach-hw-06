import { createAction } from "@reduxjs/toolkit"

export const addTasks = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask")

export const toggleCompleted = createAction("tasks/toggleComleted")

export const setStatusFilter = createAction("tasks/setStatusFilter")

