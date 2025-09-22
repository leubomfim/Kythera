import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-blue-800">
                <strong>Aviso:</strong> Este é um projeto de demonstração/portfólio. 
                Os dados coletados são apenas para fins de teste e desenvolvimento.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Informações que Coletamos
              </h2>
              <p className="mb-4">
                Quando você utiliza nosso e-commerce de demonstração, podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Dados do Google OAuth:</strong> Nome, email e foto do perfil quando você faz login com Google</li>
                <li><strong>Dados de navegação:</strong> Cookies de sessão para manter você logado</li>
                <li><strong>Dados de teste:</strong> Informações de pedidos fictícios e endereços de demonstração</li>
                <li><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador e dispositivo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Como Usamos suas Informações
              </h2>
              <p className="mb-4">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Autenticar e manter sua sessão de login</li>
                <li>Personalizar sua experiência no site</li>
                <li>Demonstrar funcionalidades de e-commerce</li>
                <li>Fins de desenvolvimento e teste do sistema</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Login com Google
              </h2>
              <p className="mb-4">
                Utilizamos o Google OAuth para autenticação. Quando você faz login:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Recebemos apenas as informações básicas do seu perfil Google</li>
                <li>Não temos acesso à sua senha do Google</li>
                <li>Você pode revogar o acesso a qualquer momento nas configurações da sua conta Google</li>
                <li>Os dados são armazenados de forma segura em nosso banco de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cookies e Tecnologias Similares
              </h2>
              <p className="mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Manter sua sessão de login ativa</li>
                <li>Lembrar suas preferências</li>
                <li>Melhorar a funcionalidade do site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Compartilhamento de Dados
              </h2>
              <p className="mb-4">
                <strong>Não compartilhamos</strong> suas informações pessoais com terceiros. 
                Este é um projeto de demonstração e todos os dados permanecem no ambiente de desenvolvimento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Segurança dos Dados
              </h2>
              <p className="mb-4">
                Implementamos medidas de segurança adequadas para proteger suas informações:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Criptografia de dados sensíveis</li>
                <li>Conexões HTTPS seguras</li>
                <li>Acesso restrito aos dados</li>
                <li>Monitoramento de segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Seus Direitos (LGPD)
              </h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contato
              </h2>
              <p className="mb-4">
                Para questões sobre esta política de privacidade ou seus dados pessoais, 
                entre em contato através do GitHub do projeto ou email do desenvolvedor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Alterações nesta Política
              </h2>
              <p className="mb-4">
                Esta política pode ser atualizada periodicamente. A data da última atualização 
                será sempre indicada no topo desta página.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}