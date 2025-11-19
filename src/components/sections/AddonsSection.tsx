import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export function AddonsSection() {
    return (
        <motion.section
            className="px-6 md:px-10 lg:px-16 pb-8 md:pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
        >
            <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="flex items-center gap-2 mb-6">
                        <Plus className="h-5 w-5 md:h-6 md:w-6 text-[#B8964F]" />
                        <h2 className="text-xl md:text-2xl">Servicios Adicionales</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
                            <h4 className="mb-2">Grabación Stereo + Master</h4>
                            <p className="text-xs text-white/50 mb-3">Mezcla final lista para distribución</p>
                            <span className="text-[#B8964F]">100 Bs</span>
                        </div>

                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
                            <h4 className="mb-2">Grabación Multitrack</h4>
                            <p className="text-xs text-white/50 mb-3">Pistas separadas por instrumento</p>
                            <span className="text-[#B8964F]">150 Bs</span>
                        </div>

                        <div className="p-4 md:p-5 rounded-xl bg-white/[0.02] border border-white/5">
                            <h4 className="mb-2">Diseño de Rider Técnico</h4>
                            <p className="text-xs text-white/50 mb-3">Especificaciones técnicas del evento</p>
                            <span className="text-[#B8964F]">100 Bs</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
