"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const dbconnector_1 = require("./dbconfig/dbconnector");
const DiscRouter_1 = __importDefault(require("./routers/DiscRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get('/test', (req, res) => res.send('Beers, Beets, Battlestar Gallactica'));
app.get('dbtest', (req, res) => {
    dbconnector_1.pool.query('SELECT NOW()', (err, response) => {
        console.log(err, response);
        dbconnector_1.pool.end();
    });
});
app.use('/api/discs', DiscRouter_1.default);
const port = parseInt(process.env.PORT);
exports.server = http_1.default.createServer(app);
exports.server.listen(port);
console.log('Server listening on:', port);
//# sourceMappingURL=server.js.map