import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@radix-ui/react-label';

export function Login() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-background w-full h-full flex items-center justify-center p-16">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center justify-center gap-8">
              <img
                src="/image/logo_vta.png"
                alt="VidTextAI Logo"
                className="w-24 h-auto transition-transform duration-300 hover:scale-110"
              />
              <h1 className="text-6xl text-violet-400 font-bold">VidTextAI</h1>
              <h2 className="mt-7 text-2xl text-center font-semibold">
                Bem-vindo à plataforma mais avançada de transcrição de vídeos
                com inteligência artificial!
              </h2>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img
                  src="/image/transcricao.svg"
                  alt="Transcrição de vídeo em texto"
                />
                <h3 className="text-xl text-violet-300 font-semibold text-center">
                  Transforme seus vídeos em texto com precisão.
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img
                  src="/image/traducao.svg"
                  alt="Transcrição de vídeo em texto"
                />
                <h3 className="text-xl text-violet-300 font-semibold text-center">
                  Amplie seu alcance: torne seu conteúdo acessível e traduza-o
                  para diversos idiomas.
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img
                  src="/image/resumo_titulo_questionario.svg"
                  alt="Transcrição de vídeo em texto"
                />
                <h3 className="text-xl text-violet-300 font-semibold text-center">
                  Crie resumos, questionários e títulos atraentes otimizados
                  para SEO com inteligência artificial.
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img src="/image/AI.svg" alt="Transcrição de vídeo em texto" />
                <h3 className="text-xl text-violet-300 font-semibold text-center">
                  Personalize e treine seus próprios agentes de IA para criar
                  conteúdo no seu estilo único.
                </h3>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-violet-300 h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center tracking-tighter">
              Login
            </CardTitle>
            <CardDescription className="text-muted text-center italic">
              Utilize seu e-mail e senha ou faça login com o Google.
            </CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail:</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha:</Label>
              <Input
                id="password"
                placeholder="digite sua senha"
                type="password"
              />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>

            <Button variant={'outline'} className="mt-6 w-full">
              <img
                src="/image/google-icon.svg"
                alt="Google Logo"
                className="w-4 h-auto mr-3 transition-transform duration-300 hover:scale-110"
              />
              Entrar com o Google
            </Button>
            <Separator className="mt-6" />
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm italic">
              * Ao entrar em nossa plataforma, você concorda com nossos termos
              de uso e nossa política de privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
