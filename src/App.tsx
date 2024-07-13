import React from 'react'

import { Avatar } from './components/Avatar'
import { ImageCrop } from './components/ImageCrop'

import meIcon from './assets/icons/icon-me.png'
import relationsIcon from './assets/icons/icon-relations.png'
import emotionalIcon from './assets/icons/icon-emotional.png'
import professionalIcon from './assets/icons/icon-professional.png'
import insightsIcon from './assets/icons/icon-insights.png'

const sections = [
  {
    color: '#ff9200',
    title: 'Eu/ Individualidade',
    icon: meIcon,
    text: `Um eu seguro, apreciador dos prazeres;
          
          Realizadora, perseverante e produtiva;
          
          Criativa ,encontra meios de obter prazer na rotina;
          
          Atenção à comunicação;
          
          Prefere o durável ao transitório;
          
          Desbravadora;
          
          Revolucionária;`,
  },
  {
    color: '#8700e6',
    title: 'Minhas Relações',
    icon: relationsIcon,
    text: `Pré-disposição para cuidar;

          Importante gerenciar expectativa e exercitar comunicação;

          Atraída por pessoas organizadas, previsíveis e um tanto pragmáticas;

          Necessidade de trocas construtivas e estimulantes;`,
  },
  {
    color: '#6ad300',
    title: 'Meu Emocional',
    icon: emotionalIcon,
    text: `Sensibilidade, intuição e coerência;

          Sua criatividade vem das experiências vividas;

          Tendencia a bloqueio emocional;

          Objetiva e prática;

          Transformação profunda no reconhecimento da impermanência da vida;`,
  },
  {
    color: '#004fce',
    title: 'Profissional/ Materialização',
    icon: professionalIcon,
    text: `Autonomia e independência são indispensáveis;
          
          Habilidade para liderar;

          Atenção aos impulsos;

          Equilíbrio e respeito a si são importantes;

          Alto poder de materialização;

          Necessidade de se afirmar e exteriorizar sentimentos;`,
  },
  {
    color: '#ff008b',
    title: 'Insights',
    icon: insightsIcon,
    text: `Se priorizar e estabelecer limites é muito importante;

          Pensamento intuitivo e original;

          A cobrança excessiva gera bloqueio na jornada;

          Livre pensar, enxerga além;

          Cuidado com bajulação;`,
  },
]

export const App = () => {
  const [image, setImage] = React.useState<string | null>()
  const [toBeCroppedImage, setToBeCroppedImage] = React.useState('')

  React.useEffect(() => {
    window.addEventListener('beforeunload', event => {
      event.preventDefault()
      return
    })
  }, [])

  const handleCropImage = (image: string) => {
    setImage(image)
    setToBeCroppedImage('')
  }

  return (
    <div className="relative p-5 max-w-[1336px] m-auto">
      <div className="flex items-center gap-6">
        <Avatar
          className="ml-3"
          image={image}
          onChange={(file: string) => setToBeCroppedImage(file)}
        />

        <div className="uppercase text-neutral-700 text-3xl">
          <div className="font-bold text-black">Mapa Astral</div>
          <div>
            <span
              contentEditable
              suppressContentEditableWarning={true}
              className={'font-bold pr-1 text-2xl'}
            >
              Bruno Andrade
            </span>
            -
            <span className="px-1 text-2xl">
              <span contentEditable suppressContentEditableWarning={true}>
                Taurina
              </span>
              , de ascendente em{' '}
              <span contentEditable suppressContentEditableWarning={true}>
                sagitário
              </span>{' '}
              e lua em{' '}
              <span contentEditable suppressContentEditableWarning={true}>
                virgem
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-10">
        {sections.map(section => (
          <div
            key={section.color}
            className="flex flex-col items-center justify-start gap-2"
          >
            <span className="flex items-center justify-center uppercase font-bold text-center w-[180px] h-[40px]">
              {section.title}
            </span>

            <div
              className={
                'flex flex-col items-center w-[220px] min-h-[620px] p-5 rounded-md bg-neutral-100 shadow-inner drop-shadow-lg border-[1px] border-neutral-200 border-t-8'
              }
              style={{ borderTopColor: `${section.color}` }}
            >
              <img className="h-[48px]" src={section.icon} />

              <div
                contentEditable
                suppressContentEditableWarning={true}
                className={'mt-5 text-pretty font-medium whitespace-pre-line'}
              >
                {section.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black text-neutral-300 text-lg absolute right-10 mt-7 px-6 py-2 rounded-t-lg">
        @taynafarria
      </div>

      <ImageCrop
        image={toBeCroppedImage}
        onCrop={handleCropImage}
        onCancel={() => setToBeCroppedImage('')}
      />
    </div>
  )
}
