import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface AuthState {
  user: any | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    set({ user: data.user })
  },
  signUp: async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    set({ user: data.user })
  },
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },
  checkAuth: async () => {
    const { data } = await supabase.auth.getSession()
    set({ user: data.session?.user || null, isLoading: false })
  },
}))