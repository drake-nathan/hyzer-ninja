"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const server_1 = require("../src/server");
chai_1.default.should();
chai_1.default.use(chai_http_1.default);
describe('/test', () => {
    it('should return an office quote', (done) => {
        chai_1.default
            .request(server_1.server)
            .get('/test')
            .end((err, res) => {
            res.should.have.status(200);
            res.text.should.be.a('string');
            done();
        });
    });
});
//# sourceMappingURL=is-it-on.js.map