import React from 'react'

import { TField, useAppStore } from './store/app'

import { Avatar } from './components/Avatar'
import { ImageCrop } from './components/ImageCrop'

import meIcon from './assets/icons/icon-me.png'
import relationsIcon from './assets/icons/icon-relations.png'
import emotionalIcon from './assets/icons/icon-emotional.png'
import professionalIcon from './assets/icons/icon-professional.png'
import insightsIcon from './assets/icons/icon-insights.png'

const sections = [
  {
    field: 'me',
    color: '#ff9200',
    title: 'Eu/ Individualidade',
    icon: meIcon,
  },
  {
    field: 'relations',
    color: '#8700e6',
    title: 'Minhas Relações',
    icon: relationsIcon,
  },
  {
    field: 'emotional',
    color: '#6ad300',
    title: 'Meu Emocional',
    icon: emotionalIcon,
  },
  {
    field: 'professional',
    color: '#004fce',
    title: 'Profissional/ Materialização',
    icon: professionalIcon,
  },
  {
    field: 'insights',
    color: '#ff008b',
    title: 'Insights',
    icon: insightsIcon,
  },
]

export const App = () => {
  const [toBeCroppedImage, setToBeCroppedImage] = React.useState('')

  const appStore = useAppStore()

  React.useEffect(() => {
    window.addEventListener('beforeunload', event => {
      event.preventDefault()
      return
    })
  }, [])

  const handleCropImage = (image: string) => {
    appStore.update('avatar', image)
    setToBeCroppedImage('')
  }

  return (
    <div className="p-5">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
        <Avatar className="ml-3" image={appStore.avatar} onChange={(file: string) => setToBeCroppedImage(file)} />

        <div className="uppercase text-neutral-700 text-3xl">
          <div className="font-bold text-black">Mapa Astral</div>
          <div>
            <span
              className={'font-bold pr-1 text-2xl'}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={({ currentTarget }) => {
                appStore.update('name', currentTarget.textContent)
              }}
            >
              {appStore.name}
            </span>
            -
            <span className="px-1 text-2xl">
              <span
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={({ currentTarget }) => {
                  appStore.update('sign', currentTarget.textContent)
                }}
              >
                {appStore.sign}
              </span>
              , de ascendente em{' '}
              <span
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={({ currentTarget }) => {
                  appStore.update('rising', currentTarget.textContent)
                }}
              >
                {appStore.rising}
              </span>{' '}
              e lua em{' '}
              <span
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={({ currentTarget }) => {
                  appStore.update('moon', currentTarget.textContent)
                }}
              >
                {appStore.moon}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around flex-wrap mt-10 gap-5 relative">
        {sections.map(section => (
          <div key={section.color} className="flex flex-col items-center justify-start gap-2">
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
                onBlur={({ currentTarget }) => {
                  appStore.update(section.field as TField, currentTarget.textContent)
                }}
              >
                {appStore[section.field as TField]}
              </div>
            </div>
          </div>
        ))}
        <div className="bg-black text-neutral-300 text-lg absolute -bottom-20 right-3 mt-7 px-6 py-2 rounded-t-lg">
          @taynafarria
        </div>
      </div>

      <ImageCrop image={toBeCroppedImage} onCrop={handleCropImage} onCancel={() => setToBeCroppedImage('')} />
    </div>
  )
}
