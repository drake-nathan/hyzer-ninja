"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscs = void 0;
const dbconnector_1 = require("../dbconfig/dbconnector");
const getDiscs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield dbconnector_1.pool.connect();
        console.log('db connected');
        const sql = 'SELECT * FROM discs';
        const { rows } = yield client.query(sql);
        const discs = rows;
        client.release();
        res.send(discs);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.getDiscs = getDiscs;
//# sourceMappingURL=DiscsController.js.map