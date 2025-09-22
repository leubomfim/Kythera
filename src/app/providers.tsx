'use client'

import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider
      // Configurações de segurança para reduzir exposição
      refetchInterval={5 * 60} // 5 minutos ao invés de 30s
      refetchOnWindowFocus={false} // Não recarrega ao focar janela
    >
      {children}
    </SessionProvider>
  )
}