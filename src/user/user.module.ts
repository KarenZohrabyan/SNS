import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { AuthModule } from "src/auth/auth.module";
import { AuthModule } from "../auth/auth.module";
import { UserFriendsRepository } from "./repo/user-friends.repository";
import { UserRepository } from "./repo/user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature(
            [
                UserRepository,
                UserFriendsRepository
            ]
        ),
    ],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {

}