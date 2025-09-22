'use client'

import { useSession, signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

export default function UserProfile() {
  const { data: session, status } = useSession()
  
  const [useInitials, setUseInitials] = useState(false)

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  // Função para gerar iniciais do nome
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) // Máximo 2 letras
  }

  return (
    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border">
      <div className="relative">
        {!useInitials && session.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            {getInitials(session.user?.name || "U")}
          </div>
        )}
        
        {/* Botão para alternar entre foto e iniciais */}
        <button
          onClick={() => setUseInitials(!useInitials)}
          className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-600 text-white rounded-full text-xs hover:bg-gray-800 flex items-center justify-center"
          title={useInitials ? "Mostrar foto" : "Usar iniciais"}
        >
          {useInitials ? "📷" : "🔒"}
        </button>
      </div>
      
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {session.user?.name || "Usuário"}
        </p>
        <p className="text-xs text-gray-500">
          {session.user?.email}
        </p>
      </div>
      <button
        onClick={() => signOut()}
        className="text-xs text-red-600 hover:text-red-800 font-medium"
      >
        Sair
      </button>
    </div>
  )
}