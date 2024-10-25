import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';
import { loginRoute } from './routes/login';

const app = fastify();

app.register(fastifyCors, {
  origin: process.env.FRONTEND_URL,
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);
app.register(loginRoute);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3000!');
  });
