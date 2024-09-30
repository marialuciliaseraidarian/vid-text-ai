import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  AvatarIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export function Header() {
  return (
    <div>
      <Separator className="mt-2" />
      <div className="flex md:flex-row items-center justify-between flex-wrap">
        <div className="flex items-center space-x-2 p-1">
          <img
            src="/image/logo_vta.png"
            alt="VidTextAI Logo"
            className="w-14 h-auto transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-xl font-bold">VidTextAI</h1>
        </div>
        <div className="flex-grow text-center mt-1 md:mt-0">
          <h2 className="text-violet-400 italic text-lg sm:text-xl md:text-xl">
            Converta vídeos em conhecimento acessível: transcreva, resuma e
            potencialize seus estudos com inteligência.
          </h2>
        </div>
        <div className="flex items-center space-x-3 mr-4">
          <div className="flex items-center space-x-3 m-4">
            <InstagramLogoIcon className="w-5 h-5 cursor-pointer" />
            <LinkedInLogoIcon className="w-5 h-5 cursor-pointer" />
            <GitHubLogoIcon className="w-5 h-5 cursor-pointer" />
          </div>
          <Avatar className="w-14 h-14">
            <AvatarImage src="" alt="Foto usuário" />
            <AvatarFallback>
              <AvatarIcon className="w-full h-full text-background" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator className="mb-2" />
    </div>
  );
}
