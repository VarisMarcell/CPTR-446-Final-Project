"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const create_user_dto_1 = require("../dto/create-user.dto");
const crypto = require("crypto");
const playlist_entity_1 = require("../../playlists/entities/playlist.entity");
const song_entity_1 = require("../../songs/entities/song.entity");
let User = class User {
    constructor(createUserDto) {
        this.apiKey = crypto.randomBytes(32).toString("hex");
        this.playlists = new core_1.Collection(this);
        this.queue = new core_1.Collection(this);
        this.userName = createUserDto.userName;
        this.firstName = createUserDto.firstName;
        this.lastName = createUserDto.lastName;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({
        autoincrement: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({
        length: 64,
        hidden: true,
        index: true
    }),
    __metadata("design:type", String)
], User.prototype, "apiKey", void 0);
__decorate([
    (0, core_1.Property)({
        length: 64
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, core_1.Property)({
        length: 64
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, core_1.Property)({
        length: 64
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, core_1.OneToMany)(() => playlist_entity_1.Playlist, playlist => playlist.user),
    __metadata("design:type", Object)
], User.prototype, "playlists", void 0);
__decorate([
    (0, core_1.ManyToMany)({
        entity: () => song_entity_1.Song,
        mappedBy: (song) => song.users,
        fixedOrder: true
    }),
    __metadata("design:type", Object)
], User.prototype, "queue", void 0);
User = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map