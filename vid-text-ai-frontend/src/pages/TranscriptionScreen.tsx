import { MagicWandIcon, UploadIcon, VideoIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Header } from '@/components/Header';

export function TranscriptionScreen() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar a transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <VideoIcon className="w-8 h-8" />
              Selecione um vídeo.
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição:
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Carregar Vídeo
              <UploadIcon className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt:</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título</SelectItem>
                  <SelectItem value="description">Descrição</SelectItem>
                  <SelectItem value="summary">Resumo</SelectItem>
                  <SelectItem value="translation">Tradução</SelectItem>
                  <SelectItem value="questionnaire">Questionário</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Modelo:</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                * Você poderá customizar essa opção em breve.
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura:</Label>
              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic">
                * Valores altos tornam o resultado mais criativo e menos
                preciso.
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Executar
              <MagicWandIcon className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
