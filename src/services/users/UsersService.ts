import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {MongooseRepository} from "../mongoose/MongooseRepository";
import {UserModel} from "../../models/users/UserModel";

@Injectable()
export class UsersService extends MongooseRepository<UserModel> {
  @Inject(UserModel)
  protected model: MongooseModel<UserModel>;
}
