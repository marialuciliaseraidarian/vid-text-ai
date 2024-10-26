import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.deleteMany();

  // Primeiro prompt: criação de títulos
  await prisma.prompt.create({
    data: {
      title: 'Criar título do vídeo',
      template:
        `Seu papel é criar três títulos atraentes e chamativos para um vídeo, com o objetivo de maximizar engajamento e incentivar cliques.

Para gerar os títulos, siga as diretrizes abaixo:
 
Use a transcrição do vídeo para entender o conteúdo.
Crie títulos com até 60 caracteres.
Foque em despertar curiosidade e ressaltar o valor do conteúdo.
Apenas retorne os três títulos em formato de lista, como no exemplo abaixo:
        
'''
- Título 1
- Título 2
- Título 3 
'''

Transcrição:

'''
{transcription}
'''`.trim(),
    },
  });

  // Segundo prompt: gerar resumo
  await prisma.prompt.create({
    data: {
      title: 'Criar resumo do vídeo',
      template:
        `Seu papel é criar uma descrição curta e concisa para um vídeo destinado a <<insira aqui a plataforma de postagem do vídeo>>, destacando os pontos principais para cativar o interesse de quem está lendo.

Para gerar a descrição, siga estas diretrizes:
        
Use a transcrição do vídeo para compreender o conteúdo.
A descrição deve ter no máximo 80 palavras, em primeira pessoa, focando nos pontos principais.
Utilize palavras claras e atraentes que despertem a atenção do leitor.
Ao final, inclua de 3 a 10 hashtags relevantes em letras minúsculas, relacionadas ao conteúdo do vídeo.
        
Retorne a descrição no seguinte formato:
        
'''
Descrição.
        
#hashtag1 #hashtag2 #hashtag3 ...
'''
        
Transcrição:

'''
{transcription}
'''`.trim(),
    },
  });

  // Terceiro prompt: gerar tradução
  await prisma.prompt.create({
    data: {
      title: 'Criar tradução do vídeo',
      template:
        `Seu papel é traduzir o texto de uma transcrição de vídeo para o <<insira aqui o idioma desejado>>. A tradução deve manter o tom original e transmitir as ideias com precisão.
        
Para gerar a tradução, siga estas diretrizes:
        
Use a transcrição fornecida para entender o contexto e a intenção do falante.
Mantenha a tradução natural e clara, refletindo o estilo de fala ou escrita original.
Caso não encontre uma tradução adequada para alguma palavra ou expressão,
coloque-a na língua original entre parênteses e acrescente um ponto de interrogação, como no exemplo abaixo:
        
'''
[palavra?]
'''
        
Sempre que possível, busque manter a fluência e a coesão do texto em inglês,
evitando traduções literais que possam soar estranhas ou forçadas.
Retorne o texto traduzido no seguinte formato:
        
'''
Tradução.
'''
        
Isso garantirá que a tradução ressoe da mesma forma que o conteúdo original.

Transcrição:

'''
{transcription}
'''`.trim(),
    },
  });

  // Quarto prompt: gerar questionário de múltipla escolha
  await prisma.prompt.create({
    data: {
      title: 'Criar questionário de múltipla escolha do vídeo',
      template:
        `Seu papel é criar um questionário de múltipla escolha com 5 questões com base na transcrição de um vídeo; as perguntas devem abordar os principais e mais relevantes pontos destacados no vídeo.

Para a elaboração do questionário, siga estas diretrizes:
        
Utilize a transcrição fornecida para identificar os conceitos mais importantes discutidos no vídeo.
Cada pergunta deve ter 4 opções de resposta, sendo apenas uma delas correta.
As perguntas devem ser formuladas de forma clara e direta, facilitando a compreensão.
        
O formato do questionário deve ser o seguinte:
        
        '''
        1. [Pergunta 1]
          a) [Opção A]
          b) [Opção B]
          c) [Opção C]
          d) [Opção D]

        2. [Pergunta 2]
          a) [Opção A]
          b) [Opção B]
          c) [Opção C]
          d) [Opção D]

        3. [Pergunta 3]
          a) [Opção A]
          b) [Opção B]
          c) [Opção C]
          d) [Opção D]

        4. [Pergunta 4]
          a) [Opção A]
          b) [Opção B]
          c) [Opção C]
          d) [Opção D]

        5. [Pergunta 5]
          a) [Opção A]
          b) [Opção B]
          c) [Opção C]
          d) [Opção D]
        ''' 

Transcrição:
        
'''
{transcription}
'''`.trim(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
