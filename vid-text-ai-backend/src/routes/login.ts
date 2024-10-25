import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { z } from 'zod';

interface LoginBody {
  email: string;
  passwordHash: string;
}

export async function loginRoute(app: FastifyInstance) {
  app.post<{ Body: LoginBody }>(
    '/login',
    async (
      request: FastifyRequest<{ Body: LoginBody }>,
      reply: FastifyReply
    ) => {
      const loginSchema = z.object({
        email: z.string().email(),
        passwordHash: z
          .string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres'),
      });

      try {
        const { email, passwordHash } = loginSchema.parse(request.body);

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          return reply
            .status(401)
            .send({ message: 'E-mail ou senha inválidos.' });
        }

        const isPasswordValid = await bcrypt.compare(
          passwordHash,
          user.passwordHash
        );
        if (!isPasswordValid) {
          return reply
            .status(401)
            .send({ message: 'E-mail ou senha inválidos.' });
        }

        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET!,
          { expiresIn: '1h' }
        );

        return reply.send({ token });
      } catch (error) {
        return reply.status(400).send({ error: error.errors || error.message });
      }
    }
  );
}
