import jwt from 'jsonwebtoken'

const KEY = 'borapracima';

export function generateToken(userInfo) {
  if (!userInfo.role)
    userInfo.role = 'user';

  return jwt.sign(userInfo, KEY);
}

export function getAuthentication(checkRole, throw401 = true) {
  return (req, resp, next) => {
    try {
      let token = req.headers['x-access-token'];
      if (!token) token = req.query['x-access-token'];

      let signd = jwt.verify(token, KEY);
      req.user = signd;

      if (checkRole && !checkRole(signd) && signd.role !== 'admin')
        return resp.status(403).end();

      next();
    } catch {
      if (throw401) {
        resp.status(401).json({ erro: "Token inválido ou ausente." });
      } else {
        next();
      }
    }
  }
}
