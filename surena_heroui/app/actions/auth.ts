"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase-client";

export function useAuthActions() {
  const supabase = createClient();
  const router = useRouter();

  const login = async (email: string, password?: string) => {
    if (password) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error) router.push("/");

      return { error };
    } else {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      return { error };
    }
  };

  const signup = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    return { error };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  };

  return { login, signup, logout };
}
