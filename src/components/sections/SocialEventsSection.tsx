import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

export function SocialEventsSection() {
    return (
        <motion.section
            className="px-6 md:px-10 lg:px-16 pb-8 md:pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="flex items-center gap-2 mb-6">
                        <Music2 className="h-5 w-5 md:h-6 md:w-6 text-[#B8964F]" />
                        <h2 className="text-xl md:text-2xl">Eventos Sociales</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Discotecas */}
                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
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
                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
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
                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
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
        </motion.section>
    );
}
