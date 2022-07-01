import {Model, ObjectID, Trim, Unique} from "@tsed/mongoose";
import {DateFormat, Email, Example, Groups, MaxLength, MinLength, Required} from "@tsed/schema";

export class Credentials {
  @Email()
  @Required()
  @Unique()
  email: string;

  @Required()
  @MinLength(8)
  @MaxLength(100)
  @Groups("!endpoint")
  password: string;
}

/**
 * ## How to inject model?
 *
 * ```typescript
 * import { MongooseModel } from "@tsed/mongoose";
 * import { Injectable, Inject } from "@tsed/di";
 *
 * @Injectable()
 * class MyService {
 *   @Inject(users)
 *   model: MongooseModel<users>;
 * }
 * ```
 */
@Model({
  name: "users"
})
export class UserModel extends Credentials {
  @ObjectID("id")
  @Groups("!creation")
  _id: string;

  @Required()
  @MinLength(2)
  @MaxLength(100)
  @Trim()
  @Example("John")
  firstName: string;

  @Required()
  @MinLength(2)
  @MaxLength(100)
  @Trim()
  @Example("Doe")
  lastName: string;

  @DateFormat()
  @Required()
  birthdate: Date;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verifyPassword(password: string): boolean {
    return this.password === password;
  }
}
