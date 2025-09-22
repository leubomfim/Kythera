'use client'

import { useSession } from "next-auth/react"

export default function WelcomeSection() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="w-64 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bem-vindo ao Shop! 🛍️
        </h1>
        <p className="text-gray-600">
          Faça login para ter acesso completo à plataforma
        </p>
      </div>
    )
  }

  const firstName = session.user?.name?.split(' ')[0] || 'Usuário'

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Olá, {firstName}! 👋
      </h1>
      <p className="text-gray-600 mb-4">
        Bem-vindo de volta ao Shop. Você está logado como <strong>{session.user?.email}</strong>
      </p>
      <div className="flex items-center space-x-2 text-sm text-green-600">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Status: Conectado</span>
      </div>
    </div>
  )
}