import React from 'react'

interface ISectionEditableProps {
  defaultValue?: string
  onBlur?: (text: string) => void
}

export const SectionEditable = (props: ISectionEditableProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const [isEditing, setIsEditing] = React.useState(false)

  React.useEffect(() => {
    isEditing ? textareaRef?.current?.focus() : textareaRef?.current?.blur()
  }, [isEditing])

  return (
    <div className="flex w-full h-full font-medium text-pretty whitespace-pre-line" onFocus={() => setIsEditing(true)}>
      {isEditing ? (
        <textarea
          ref={textareaRef}
          className="w-[185px] text-pretty whitespace-pre-line bg-transparent outline-none resize-none"
          defaultValue={props.defaultValue}
          onBlur={event => {
            setIsEditing(false)
            props.onBlur && props.onBlur(event.target.value)
          }}
        />
      ) : (
        <div className="min-w-full" tabIndex={0} onFocus={() => setIsEditing(true)}>
          {!props.defaultValue && (
            <div className="flex items-center justify-center h-full font-normal text-center">
              <span className="p-5 border-2 border-neutral-300 border-dashed text-neutral-400">
                Clique para editar esta seção
              </span>
            </div>
          )}

          {props.defaultValue}
        </div>
      )}
    </div>
  )
}
