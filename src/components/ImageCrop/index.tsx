import React from 'react'

import Cropper, { Area } from 'react-easy-crop'

import getCroppedImg from './cropImage'

interface IImageCrop {
  image: string
  onCrop?: (image: string) => void
  onCancel?: () => void
}

export const ImageCrop = (props: IImageCrop) => {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState<Area | null>()

  const resetCrop = () => {
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setCroppedAreaPixels(null)
  }

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onCancel = () => {
    if (props.onCancel) props.onCancel()

    resetCrop()
  }

  const onSaveCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(props.image, croppedAreaPixels)

      if (props.onCrop && croppedImage) props.onCrop(croppedImage)

      resetCrop()
    }
  }

  return (
    <>
      {props.image && (
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-5 p-3 rounded-md border bg-white drop-shadow-2xl">
            <div className="relative w-[1200px] h-[800px]">
              <Cropper
                image={props.image}
                crop={crop}
                zoom={zoom}
                aspect={4 / 4}
                cropShape="round"
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                zoomSpeed={0.1}
                style={{
                  containerStyle: {
                    backgroundColor: 'black',
                  },
                }}
              />
            </div>

            <div className="flex gap-5">
              <button
                onClick={onCancel}
                className="z-20 bg-neutral-50 hover:bg-neutral-200 border text-neutral-800 px-8 py-2 rounded-full"
              >
                Cancelar
              </button>
              <button
                onClick={onSaveCrop}
                className="z-20 bg-neutral-800 hover:bg-neutral-500 text-neutral-200 px-8 py-2 rounded-full"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
