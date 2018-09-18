"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = __importStar(require("restify"));
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});
server.get('/hello', (req, resp, next) => {
    resp.json({
        message: "Hello Boys"
    });
    return next();
});
server.listen(3000, () => {
    console.log('A API está rodando na porta 3000');
});
