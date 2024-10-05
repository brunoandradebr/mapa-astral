import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TField =
  | 'name'
  | 'sign'
  | 'rising'
  | 'moon'
  | 'avatar'
  | 'me'
  | 'relations'
  | 'emotional'
  | 'professional'
  | 'insights'

interface IAppStore {
  name: string
  sign: string
  rising: string
  moon: string
  avatar?: string
  me: string
  relations: string
  emotional: string
  professional: string
  insights: string
  update: (field: TField, value: string | null) => void
}

export const useAppStore = create<IAppStore>()(
  persist(
    set => ({
      name: 'Bruno Andrade',
      sign: 'Leonino',
      rising: 'Sagitário',
      moon: 'Virgem',

      me: `Um eu seguro, apreciador dos prazeres;
          
        Realizadora, perseverante e produtiva;
          
        Criativa ,encontra meios de obter prazer na rotina;
          
        Atenção à comunicação;
          
        Prefere o durável ao transitório;
          
        Desbravadora;
          
        Revolucionária;`,

      relations: `Pré-disposição para cuidar;

        Importante gerenciar expectativa e exercitar comunicação;

        Atraída por pessoas organizadas, previsíveis e um tanto pragmáticas;

        Necessidade de trocas construtivas e estimulantes;`,

      emotional: `Sensibilidade, intuição e coerência;

        Sua criatividade vem das experiências vividas;

        Tendencia a bloqueio emocional;

        Objetiva e prática;

        Transformação profunda no reconhecimento da impermanência da vida;`,

      professional: `Autonomia e independência são indispensáveis;
          
        Habilidade para liderar;

        Atenção aos impulsos;

        Equilíbrio e respeito a si são importantes;

        Alto poder de materialização;

        Necessidade de se afirmar e exteriorizar sentimentos;`,

      insights: `Se priorizar e estabelecer limites é muito importante;

        Pensamento intuitivo e original;

        A cobrança excessiva gera bloqueio na jornada;

        Livre pensar, enxerga além;

        Cuidado com bajulação;`,

      update: (field, value) => set(state => ({ ...state, [field]: value })),
    }),
    { name: 'mapa-astral' }
  )
)
