import { createContext } from 'react'

const ProfileContext = createContext({})

export const ProfileProvider = ProfileContext.Provider

export const ProfilerConsumer = ProfileContext.Consumer

