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
exports.CreateSongDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSongDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateSongDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], CreateSongDto.prototype, "artist", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], CreateSongDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], CreateSongDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: "This is a required value."
    }),
    __metadata("design:type", Number)
], CreateSongDto.prototype, "BPM", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: "This is a required value."
    }),
    __metadata("design:type", Number)
], CreateSongDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], CreateSongDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], CreateSongDto.prototype, "link", void 0);
exports.CreateSongDto = CreateSongDto;
//# sourceMappingURL=create-song.dto.js.map