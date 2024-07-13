import React from 'react'

import noAvatar from './assets/no-avatar.jpg'

interface IAvatarProps {
  image: string | null | undefined
  onChange: (file: string) => void
  className?: string
}

export const Avatar = (props: IAvatarProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files) {
      if (props.onChange) props.onChange(URL.createObjectURL(files[0]))

      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <div className={`relative ${props.className}`}>
      <div className="group">
        <input
          ref={inputRef}
          type="file"
          itemType="image"
          className="absolute cursor-pointer w-[150px] h-[150px] opacity-0"
          onChange={handleChange}
        />
        <img
          className="rounded-full group-hover:ring ring-offset-4 outline-none ring-blue-500 transition-all"
          width={150}
          src={props.image ?? noAvatar}
        />
      </div>
    </div>
  )
}
