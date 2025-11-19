import { Separator } from '../ui/separator';

export function Footer() {
    return (
        <footer className="px-6 md:px-10 lg:px-16 pb-12 pt-4">
            <Separator className="mb-6 bg-white/10" />

            <div className="space-y-4 text-center">
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                    Servicio de operación técnica. No incluye alquiler de equipos.
                </p>
                <p className="text-xs md:text-sm text-white/60">
                    Reservas con 48h de anticipación.
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-center text-xs md:text-sm text-white/40">
                    Operador de Sonido Profesional • 2025
                </p>
            </div>
        </footer>
    );
}
