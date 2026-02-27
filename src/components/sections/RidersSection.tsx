import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Rider } from "../../types/rider";

type RiderCardData = Pick<Rider, "slug" | "nombre" | "descripcion">;
type RiderModule = { default: RiderCardData };

const riderModules = import.meta.glob<RiderModule>("../../data/riders/*.json");

export function RidersSection() {
  const [riders, setRiders] = useState<RiderCardData[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadRiders() {
      const loaded = await Promise.all(
        Object.values(riderModules).map(async (importer) => {
          const module = await importer();
          return module.default;
        }),
      );

      if (!isMounted) return;

      const next = loaded
        .filter((rider) => rider?.slug && rider?.nombre)
        .sort((a, b) => a.nombre.localeCompare(b.nombre));

      setRiders(next);
    }

    void loadRiders();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.section
      className="px-6 md:px-10 lg:px-16 pb-8 md:pb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.35 }}
    >
      <div className="backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl">Riders Técnicos</h2>
            <p className="text-sm md:text-base text-white/60 mt-1">
              Documentación técnica disponible por agrupación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {riders.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-5">
                <p className="text-sm text-white/60">No hay riders disponibles.</p>
              </div>
            )}

            {riders.map((rider) => (
              <article
                key={rider.slug}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-5 transition-all hover:bg-white/[0.05] hover:border-[#B8964F]/30"
              >
                <h3 className="text-base md:text-lg">{rider.nombre}</h3>
                <p className="text-sm text-white/60 mt-2 min-h-10">
                  {rider.descripcion || "Rider Técnico Oficial 2026"}
                </p>

                <Link
                  to={`/rider/${rider.slug}`}
                  className="inline-flex mt-4 h-10 items-center justify-center rounded-md border border-[#B8964F]/40 px-4 text-sm text-[#B8964F] transition-colors hover:bg-[#B8964F]/10"
                >
                  Ver Rider
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
