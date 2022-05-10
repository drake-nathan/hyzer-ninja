"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    max: 20,
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 30000,
});
//# sourceMappingURL=dbconnector.js.map