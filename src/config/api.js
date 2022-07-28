/*
http://localhost:9001/tasks [ GET ] - get all todo's 
http://localhost:9001/tasks:id [ GET ] - get specific todo
http://localhost:9001/task/update [ POST ] json body {"title": string, "description": string, "id": number } - update task 
http://localhost:9001/task/create [ POST ] json body {"title": string, "description": string} - update task
http://localhost:9001/task/delete/:id [ DELETE ] - delete task
*/
export const API_DOMAIN_GET_TASKS = "http://localhost:9001/tasks"
export const API_DOMAIN_GET_TASK_BY_ID = "http://localhost:9001/tasks:${id}"
export const API_DOMAIN_UPDATE_TASK = "http://localhost:9001/task/update"
export const API_DOMAIN_CREATE_TASK = "http://localhost:9001/task/create"
export const API_DOMAIN_DELETE_TASK_BY_ID = "http://localhost:9001/task/delete/"
