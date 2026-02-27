import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Rider } from "../types/rider";

type RiderModule = { default: Rider };

const riderModules = import.meta.glob<RiderModule>("../data/riders/*.json");

function RiderNotFound({ slug }: { slug?: string }) {
  return (
    <main className="min-h-screen bg-[#0f1115] text-[#e5e7eb] px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-lg border border-[#2b313a] bg-[#171b22] p-6 md:p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Rider no encontrado</h1>
        <p className="mt-3 text-sm text-[#a1aab8]">
          No existe un rider para el slug: <span className="text-[#d4d9e2]">{slug}</span>
        </p>
        <Link to="/" className="mt-6 inline-block text-sm text-[#9ec5ff] hover:underline">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export function RiderPage() {
  const { slug } = useParams<{ slug: string }>();
  const [rider, setRider] = useState<Rider | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadRider() {
      if (!slug) {
        if (!isMounted) return;
        setNotFound(true);
        setLoading(false);
        return;
      }

      const key = `../data/riders/${slug}.json`;
      const importer = riderModules[key];

      if (!importer) {
        if (!isMounted) return;
        setNotFound(true);
        setRider(null);
        setLoading(false);
        return;
      }

      try {
        const data = await importer();
        if (!isMounted) return;
        setRider(data.default);
        setNotFound(false);
      } catch {
        if (!isMounted) return;
        setNotFound(true);
        setRider(null);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    setLoading(true);
    setNotFound(false);
    void loadRider();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0f1115] text-[#e5e7eb] px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#2b313a] bg-[#171b22] p-6 md:p-8">
          <p className="text-sm text-[#a1aab8]">Cargando rider...</p>
        </div>
      </main>
    );
  }

  if (notFound || !rider) {
    return <RiderNotFound slug={slug} />;
  }

  return (
    <main className="min-h-screen bg-[#0f1115] text-[#e5e7eb] px-4 py-6 md:py-10">
      <article className="mx-auto max-w-5xl rounded-lg border border-[#2b313a] bg-[#171b22] p-4 md:p-8">
        <header className="border-b border-[#2b313a] pb-4 md:pb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{rider.nombre}</h1>
          <p className="mt-2 text-sm md:text-base text-[#a1aab8]">{rider.descripcion}</p>
          <p className="mt-2 text-sm text-[#c8d0db]">Contacto: {rider.contacto}</p>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Input List</h2>
          <div className="mt-3 overflow-x-auto rounded-md border border-[#2b313a]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[#10141b] text-[#cfd6e2]">
                <tr>
                  <th className="px-3 py-2 font-medium">Canal</th>
                  <th className="px-3 py-2 font-medium">Instrumento</th>
                  <th className="px-3 py-2 font-medium">Micrófono</th>
                  <th className="px-3 py-2 font-medium">Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {rider.inputList.map((input) => (
                  <tr key={`${input.canal}-${input.instrumento}`} className="border-t border-[#2b313a]">
                    <td className="px-3 py-2">{input.canal}</td>
                    <td className="px-3 py-2">{input.instrumento}</td>
                    <td className="px-3 py-2">{input.microfono}</td>
                    <td className="px-3 py-2 text-[#aab3c1]">{input.observaciones || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-md border border-[#2b313a] bg-[#10141b] p-4">
            <h3 className="text-base font-semibold">FOH</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#c8d0db]">
              <li>Consola mínima: {rider.foh.consolaMinima}</li>
              <li>Auxiliares: {rider.foh.auxiliares}</li>
              <li>Procesamiento: {rider.foh.procesamiento}</li>
              <li>PA mínimo: {rider.foh.paMinimo}</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#2b313a] bg-[#10141b] p-4">
            <h3 className="text-base font-semibold">Monitores</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#c8d0db]">
              <li>Wedges: {rider.monitores.wedges}</li>
              <li>In-Ear: {rider.monitores.inEar}</li>
              <li>Sidefills: {rider.monitores.sidefills}</li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-base font-semibold">Stage Plot</h3>
          <div className="mt-3 rounded-md border border-[#2b313a] bg-[#10141b] p-3">
            <img
              src={rider.stagePlot}
              alt={`Stage plot de ${rider.nombre}`}
              className="w-full h-auto rounded-sm border border-[#2b313a]"
            />
          </div>
        </section>

        <footer className="mt-8 border-t border-[#2b313a] pt-5 text-center text-xs leading-relaxed text-[#97a3b6]">
          <p>---------------------------------------</p>
          <p>Rider técnico elaborado por Erick</p>
          <p>Ingeniero de Sonido en Vivo</p>
          <p>
            <a
              href="https://sonidista-erick.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bcd3ff] hover:underline"
            >
              https://sonidista-erick.vercel.app
            </a>
          </p>
          <p>---------------------------------------</p>
        </footer>
      </article>
    </main>
  );
}
