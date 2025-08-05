import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET

export default function verificacaoToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ error: "Formato do token inválido" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // salva dados do token no req
    next(); // continua para o controller
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}
