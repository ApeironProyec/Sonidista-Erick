import { motion } from 'framer-motion';
import { Building2, Mic, Settings, AlertCircle } from 'lucide-react';
import { Badge } from '../ui/badge';

export function B2BSection() {
    return (
        <motion.section
            className="px-6 md:px-10 lg:px-16 pb-8 md:pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 md:h-6 md:w-6 text-[#B8964F]" />
                        <h2 className="text-xl md:text-2xl">Para Empresas de Audio</h2>
                    </div>
                    <p className="text-sm md:text-base text-white/60 mb-6">Servicio Técnico Freelance</p>

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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.02]">
                                <span>Ciudad</span>
                                <span className="text-[#B8964F]">300 Bs</span>
                            </div>
                            <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.02]">
                                <span>Municipio</span>
                                <span className="text-[#B8964F]">350 Bs</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 md:p-4 rounded-lg bg-white/[0.02]">
                            <p className="text-sm text-white/70">
                                <span className="text-[#B8964F]">•</span> Ecualización
                            </p>
                        </div>
                        <div className="p-3 md:p-4 rounded-lg bg-white/[0.02]">
                            <p className="text-sm text-white/70">
                                <span className="text-[#B8964F]">•</span> Alineación
                            </p>
                        </div>
                        <div className="p-3 md:p-4 rounded-lg bg-white/[0.02]">
                            <p className="text-sm text-white/70">
                                <span className="text-[#B8964F]">•</span> Parcheo
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 p-3 md:p-4 rounded-lg bg-[#B8964F]/10 border border-[#B8964F]/30 flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-[#B8964F] mt-0.5 flex-shrink-0" />
                        <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                            +50 Bs por banda adicional sin técnico propio.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
