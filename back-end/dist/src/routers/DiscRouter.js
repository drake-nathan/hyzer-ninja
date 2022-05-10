"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DiscsController_1 = require("../controllers/DiscsController");
const router = (0, express_1.Router)();
router.get('/', DiscsController_1.getDiscs);
exports.default = router;
//# sourceMappingURL=DiscRouter.js.map