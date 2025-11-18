import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { Badge } from './components/ui/badge';
import { 
  MessageCircle, 
  Video, 
  MapPin, 
  Building2, 
  Plus,
  Music2,
  Mic,
  Settings,
  Globe,
  AlertCircle,
  Facebook
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Mobile Container - 390px max width */}
      <div className="w-full max-w-[390px] mx-auto">
        
        {/* Hero Section */}
        <section className="relative min-h-[50vh] w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1746470081927-2b40f84a4f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNvdW5kJTIwd2F2ZSUyMGdvbGQlMjBkYXJrfGVufDF8fHx8MTc2MzUwNDc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sound wave visualization"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A] z-0" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col justify-end p-6 pb-12 pt-24">
            <div className="space-y-3">
              <p className="text-[#B8964F]/80 tracking-wider uppercase text-sm">
                Jossue Erick Perez Blanco
              </p>
              <h1 className="text-[2.5rem] leading-tight tracking-tight">
                Operador de Sonido
              </h1>
              <p className="text-[#B8964F] tracking-wide opacity-90">
                Ingeniería en Vivo & Producción Técnica
              </p>
            </div>
          </div>
        </section>

        {/* Contact Buttons */}
        <div className="px-6 -mt-4 pb-8 space-y-3">
          <a 
            href="https://wa.me/qr/VVXC24W2GE27F1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              className="w-full h-12 bg-[#B8964F] hover:bg-[#A17F3D] text-[#0A0A0A] border-none shadow-lg text-[14px] font-normal relative z-10"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar vía WhatsApp
            </Button>
          </a>
          
          <a 
            href="https://www.tiktok.com/@erick_liveartsessions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              variant="outline" 
              className="w-full h-12 border-[#B8964F]/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white text-center text-[14px]"
            >
              <Video className="mr-2 h-4 w-4" />
              TikTok Portfolio
            </Button>
          </a>

          <a 
            href="https://www.facebook.com/jossue.erick.perez.blanco/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              variant="outline" 
              className="w-full h-12 border-[#B8964F]/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white font-normal"
            >
              <Facebook className="mr-2 h-4 w-4" />
              Perfil de Facebook
            </Button>
          </a>
        </div>

        {/* Eventos Sociales Section */}
        <section className="px-6 pb-8">
          <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-6">
                <Music2 className="h-5 w-5 text-[#B8964F]" />
                <h2 className="text-xl">Eventos Sociales</h2>
              </div>

              <div className="space-y-4">
                {/* Discotecas */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-3">Discotecas</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Ciudad</span>
                          <span className="text-[#B8964F]">200 Bs</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Fuera de ciudad</span>
                          <span className="text-[#B8964F]">250 Bs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eventos Privados */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-3">Eventos Privados</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Ciudad</span>
                          <span className="text-[#B8964F]">250 Bs</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Fuera de ciudad</span>
                          <span className="text-[#B8964F]">300 Bs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporativos */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-3">Corporativos</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Ciudad</span>
                          <span className="text-[#B8964F]">250 Bs</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Fuera de ciudad</span>
                          <span className="text-[#B8964F]">300 Bs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/50 mt-4 italic">
                *Tarifas fuera de ciudad incluyen pasajes.
              </p>
            </div>
          </div>
        </section>

        {/* Cobertura Nacional Section */}
        <section className="px-6 pb-8">
          <div className="backdrop-blur-md bg-gradient-to-br from-[#B8964F]/10 to-white/[0.03] rounded-2xl border border-[#B8964F]/20 overflow-hidden">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-[#B8964F]" />
                <h2 className="text-xl">Cobertura Nacional</h2>
              </div>
              <p className="text-sm text-white/60 mb-6">Viajes y Tours</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                    <span>Cochabamba (Provincia)</span>
                  </div>
                  <span className="text-[#B8964F]">400 Bs</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                    <span>Nacional (Otros Deptos)</span>
                  </div>
                  <span className="text-[#B8964F]">500 Bs</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                    <span>Provincia (Otros Deptos)</span>
                  </div>
                  <span className="text-[#B8964F]">600 Bs</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-[#B8964F]/70" />
                    <span>Internacional</span>
                  </div>
                  <span className="text-[#B8964F]">700 Bs</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <p className="text-xs text-white/70 leading-relaxed">
                  Viáticos, transporte y hospedaje cubiertos por contratante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Section */}
        <section className="px-6 pb-8">
          <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-[#B8964F]" />
                <h2 className="text-xl">Para Empresas de Audio</h2>
              </div>
              <p className="text-sm text-white/60 mb-6">Servicio Técnico Freelance</p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-[#B8964F]/40 text-[#B8964F]">
                    <Mic className="h-3 w-3 mr-1" />
                    FOH
                  </Badge>
                  <Badge variant="outline" className="border-[#B8964F]/40 text-[#B8964F]">
                    <Mic className="h-3 w-3 mr-1" />
                    Monitores
                  </Badge>
                  <Badge variant="outline" className="border-[#B8964F]/40 text-[#B8964F]">
                    <Settings className="h-3 w-3 mr-1" />
                    Jefe Técnico
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                    <span>Ciudad</span>
                    <span className="text-[#B8964F]">300 Bs</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                    <span>Municipio</span>
                    <span className="text-[#B8964F]">350 Bs</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-sm text-white/70">
                    <span className="text-[#B8964F]">•</span> Ecualización
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-sm text-white/70">
                    <span className="text-[#B8964F]">•</span> Alineación
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-sm text-white/70">
                    <span className="text-[#B8964F]">•</span> Parcheo
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-[#B8964F]/10 border border-[#B8964F]/30 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-[#B8964F] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-white/90 leading-relaxed">
                  +50 Bs por banda adicional sin técnico propio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="px-6 pb-8">
          <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-6">
                <Plus className="h-5 w-5 text-[#B8964F]" />
                <h2 className="text-xl">Servicios Adicionales</h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="mb-1">Grabación Stereo + Master</h4>
                    <p className="text-xs text-white/50">Mezcla final lista para distribución</p>
                  </div>
                  <span className="text-[#B8964F] ml-4 whitespace-nowrap">100 Bs</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="mb-1">Grabación Multitrack</h4>
                    <p className="text-xs text-white/50">Pistas separadas por instrumento</p>
                  </div>
                  <span className="text-[#B8964F] ml-4 whitespace-nowrap">150 Bs</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="mb-1">Diseño de Rider Técnico</h4>
                    <p className="text-xs text-white/50">Especificaciones técnicas del evento</p>
                  </div>
                  <span className="text-[#B8964F] ml-4 whitespace-nowrap">100 Bs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 pb-12 pt-4">
          <Separator className="mb-6 bg-white/10" />
          
          <div className="space-y-4 text-center">
            <p className="text-xs text-white/50 leading-relaxed">
              Servicio de operación técnica. No incluye alquiler de equipos.
            </p>
            <p className="text-xs text-white/60">
              Reservas con 48h de anticipación.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-center text-xs text-white/40">
              Operador de Sonido Profesional • 2025
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}