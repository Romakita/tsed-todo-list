import {Controller} from "@tsed/di";
import {Get, Name, object, Post, Returns, Security, string} from "@tsed/schema";
import {Authenticate} from "@tsed/passport";
import {BodyParams, Context} from "@tsed/platform-params";
import {Credentials, UserModel} from "../../../models/users/UserModel";

@Controller("/auth")
@Name("Security")
export class AuthController {
  @Post("/login")
  @Authenticate("login", {session: false})
  @Returns(200).Schema(object({access_token: string().required()}))
  @Returns(401)
  @Returns(400)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Context() $ctx: Context, @BodyParams() credentials: Credentials) {
    // FACADE
    return {access_token: $ctx.get("token")};
  }

  @Get("/userinfo")
  @Authenticate("jwt", {session: false})
  @Security("jwt")
  @Returns(200, UserModel).Groups("endpoint")
  @Returns(401)
  @Returns(400)
  userinfo(@Context() $ctx: Context) {
    // FACADE
    return $ctx.get("user");
  }
}
