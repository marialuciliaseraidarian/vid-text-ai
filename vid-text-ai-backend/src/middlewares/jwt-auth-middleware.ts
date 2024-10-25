import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

export const jwtAuthMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers['authorization']?.split(' ')[1];

  if (!token) {
    return reply.status(401).send({ message: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch (error) {
    return reply.status(401).send({ message: 'Token inválido.' });
  }
};
