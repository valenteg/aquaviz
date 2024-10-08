import { create } from 'zustand'
import { supabase } from '@/services/auth/supabase'
import { User as SupabaseUser } from '@supabase/auth-js'

interface User {
  id: string
  email: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  checkAuth: () => Promise<void>
}

const mapSupabaseUserToUser = (supabaseUser: SupabaseUser | null): User | null => {
  if (!supabaseUser) return null
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    // Map other properties as needed
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    set({ user: mapSupabaseUserToUser(data.user) })
  },
  signUp: async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    set({ user: mapSupabaseUserToUser(data.user) })
  },
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },
  checkAuth: async () => {
    const { data } = await supabase.auth.getSession()
    set({ user: mapSupabaseUserToUser(data.session?.user ?? null), isLoading: false })
  },
}))