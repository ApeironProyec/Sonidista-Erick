import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { MessageCircle, Video, Facebook } from 'lucide-react';

export function ContactSection() {
    return (
        <motion.div
            className="px-6 md:px-10 lg:px-16 -mt-4 pb-8 md:pb-12 space-y-3 md:grid md:grid-cols-3 md:gap-4 md:space-y-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <a
                href="https://wa.me/qr/VVXC24W2GE27F1"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <Button
                    className="w-full h-12 md:h-14 bg-[#B8964F] hover:bg-[#A17F3D] text-[#0A0A0A] border-none shadow-lg text-[14px] md:text-[15px] font-normal relative z-10"
                >
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
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
                    className="w-full h-12 md:h-14 border-[#B8964F]/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white text-center text-[14px] md:text-[15px]"
                >
                    <Video className="mr-2 h-4 w-4 md:h-5 md:w-5" />
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
                    className="w-full h-12 md:h-14 border-[#B8964F]/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white font-normal text-[14px] md:text-[15px]"
                >
                    <Facebook className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Perfil de Facebook
                </Button>
            </a>
        </motion.div>
    );
}
