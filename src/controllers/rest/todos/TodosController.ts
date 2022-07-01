import {Controller, Inject} from "@tsed/di";
import {Delete, Description, Get, Groups, Post, Put, Required, Returns, Summary} from "@tsed/schema";
import {BodyParams, PathParams} from "@tsed/platform-params";
import {ObjectID} from "@tsed/mongoose";
import {NotFound} from "@tsed/exceptions";
import {TodoModel} from "../../../models/todos/TodoModel";
import {TodosService} from "../../../services/todos/TodosService";

@Controller("/todos")
export class TodosController {
  @Inject()
  protected todosService: TodosService;

  @Get("/:id")
  @Summary("Return a todo")
  @Returns(200, TodoModel)
  @Returns(404)
  async get(@Required() @PathParams("id") @ObjectID() id: string) {
    const todo = await this.todosService.getById(id);

    if (!todo) {
      throw new NotFound("Todo not found");
    }

    return todo;
  }

  @Post("/")
  @Summary("Create a new todo")
  @Returns(201, TodoModel)
  @Returns(400)
  async post(@Required() @BodyParams() @Groups("creation") payload: TodoModel) {
    return this.todosService.save(payload);
  }

  @Put("/:id")
  @Summary("Update an existing todo")
  @Description("Update an existing todo. If the id doesn't a 404 will be emitted.")
  @Returns(200, TodoModel)
  @Returns(400)
  @Returns(404)
  async put(@Required() @PathParams("id") id: string, @Required() @BodyParams() payload: TodoModel) {
    await this.get(id);

    payload._id = id;

    return this.todosService.save(payload);
  }

  @Delete("/:id")
  @Summary("Delete an existing todo")
  @Returns(204)
  @Returns(404)
  async remove(@Required() @PathParams("id") id: string) {
    await this.get(id);

    return this.todosService.removeById(id)
  }

  @Get("/")
  @Summary("Return all todos")
  @Returns(200, Array).Of(TodoModel)
  list() {
    return this.todosService.getAll();
  }
}
