import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {TodoModel} from "../../models/todos/TodoModel";
import {MongooseRepository} from "../mongoose/MongooseRepository";

@Injectable()
export class TodosService extends MongooseRepository<TodoModel> {
  @Inject(TodoModel)
  protected model: MongooseModel<TodoModel>;
}
