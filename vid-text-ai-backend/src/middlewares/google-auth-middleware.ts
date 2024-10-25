import { FastifyRequest, FastifyReply } from 'fastify';
import { googleAuth } from '../lib/googleAuth';

export const googleAuthMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers['authorization']?.split(' ')[1];

  if (!token) {
    return reply
      .status(401)
      .send({ message: 'Token do Google não fornecido.' });
  }

  try {
    const payload = await googleAuth.verifyToken(token);

    if (!payload) {
      return reply.status(401).send({ message: 'Token inválido do Google.' });
    }

    return payload;
  } catch (error) {
    return reply
      .status(401)
      .send({ message: 'Erro ao validar o token do Google.' });
  }
};
