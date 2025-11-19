import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';

export function NationalCoverageSection() {
    return (
        <motion.section
            className="px-6 md:px-10 lg:px-16 pb-8 md:pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
        >
            <div className="backdrop-blur-md bg-gradient-to-br from-[#B8964F]/10 to-white/[0.03] rounded-2xl border border-[#B8964F]/20 overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 md:h-6 md:w-6 text-[#B8964F]" />
                        <h2 className="text-xl md:text-2xl">Cobertura Nacional</h2>
                    </div>
                    <p className="text-sm md:text-base text-white/60 mb-6">Viajes y Tours</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.05]">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                                <span className="text-sm md:text-base">Cochabamba (Provincia)</span>
                            </div>
                            <span className="text-[#B8964F]">400 Bs</span>
                        </div>

                        <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.05]">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                                <span className="text-sm md:text-base">Nacional (Otros Deptos)</span>
                            </div>
                            <span className="text-[#B8964F]">500 Bs</span>
                        </div>

                        <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.05]">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-[#B8964F]/70" />
                                <span className="text-sm md:text-base">Provincia (Otros Deptos)</span>
                            </div>
                            <span className="text-[#B8964F]">600 Bs</span>
                        </div>

                        <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/[0.05]">
                            <div className="flex items-center gap-3">
                                <Globe className="h-4 w-4 text-[#B8964F]/70" />
                                <span className="text-sm md:text-base">Internacional</span>
                            </div>
                            <span className="text-[#B8964F]">700 Bs</span>
                        </div>
                    </div>

                    <div className="mt-4 p-3 md:p-4 rounded-lg bg-white/[0.03] border border-white/10">
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                            Viáticos, transporte y hospedaje cubiertos por contratante.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
