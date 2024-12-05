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
  update: (field: TField, value?: string | null) => void
}

export const useAppStore = create<IAppStore>()(
  persist(
    set => ({
      name: 'John Doe',
      sign: 'Leonino',
      rising: 'Sagitário',
      moon: 'Virgem',

      me: '',
      relations: '',
      emotional: '',
      professional: '',
      insights: '',

      update: (field, value) => set(state => ({ ...state, [field]: value })),
    }),
    { name: 'mapa-astral', version: 1 }
  )
)
