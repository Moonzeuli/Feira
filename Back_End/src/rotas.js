import loginController from './controller/loginController.js'
import visitanteController from './controller/visitanteController.js'
import usuarioController from './controller/usuarioController.js'
import qrcodeController from './controller/qrcodeController.js'


export function adicionarRotas(api) {
api.use(loginController);
api.use(visitanteController);
api.use(usuarioController);
api.use(qrcodeController);
}
