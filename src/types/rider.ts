export interface RiderInput {
  canal: number;
  instrumento: string;
  microfono: string;
  observaciones: string;
}

export interface RiderSectionFOH {
  consolaMinima: string;
  auxiliares: string;
  procesamiento: string;
  paMinimo: string;
}

export interface RiderSectionMonitores {
  wedges: string;
  inEar: string;
  sidefills: string;
}

export interface Rider {
  slug: string;
  nombre: string;
  descripcion: string;
  contacto: string;
  inputList: RiderInput[];
  foh: RiderSectionFOH;
  monitores: RiderSectionMonitores;
  stagePlot: string;
}
