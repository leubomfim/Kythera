import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Kythera Store</h3>
            <p className="text-gray-400 mb-4">
              E-commerce de demonstração criado para fins de portfólio e aprendizado. 
              Explore as funcionalidades sem compromisso!
            </p>
            <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-3">
              <p className="text-blue-200 text-sm">
                <strong>Projeto Demo:</strong> Não vendemos produtos reais nem processamos pagamentos.
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-md font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white transition-colors">
                  Carrinho
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Minha Conta
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações Legais */}
          <div>
            <h4 className="text-md font-semibold mb-4">Informações</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub do Projeto
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  Contato: dev@exemplo.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kythera Store. Projeto de demonstração/portfólio.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Desenvolvido com Next.js, Prisma e Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Aviso de Demonstração */}
        <div className="mt-6 p-4 bg-amber-900/30 border border-amber-700 rounded-lg">
          <p className="text-amber-200 text-sm text-center">
            ⚠️ <strong>Aviso:</strong> Este é um projeto de demonstração. 
            Todos os produtos, preços e transações são fictícios.
          </p>
        </div>
      </div>
    </footer>
  )
}