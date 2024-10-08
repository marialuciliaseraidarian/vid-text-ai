import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';
import { createReadStream } from 'node:fs';
import { openai } from '../lib/openai';

export async function generateAICompletionRoute(app: FastifyInstance) {
  app.post('/ai/complete', async req => {
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      template: z.string(),
      temperature: z.number().min(0).max(1).default(0.5),
    });

    const { videoId, template, temperature } = bodySchema.parse(req.body);

    return { videoId, template, temperature };
  });
}