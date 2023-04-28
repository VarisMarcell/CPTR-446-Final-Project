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
exports.UpdateSongDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_song_dto_1 = require("./create-song.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateSongDto extends (0, mapped_types_1.PartialType)(create_song_dto_1.CreateSongDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "artist", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: "This is a required value."
    }),
    __metadata("design:type", Number)
], UpdateSongDto.prototype, "BPM", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: "This is a required value."
    }),
    __metadata("design:type", Number)
], UpdateSongDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdateSongDto.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: (Array),
        description: "This is a required value."
    }),
    __metadata("design:type", Array)
], UpdateSongDto.prototype, "playlists", void 0);
exports.UpdateSongDto = UpdateSongDto;
//# sourceMappingURL=update-song.dto.js.map