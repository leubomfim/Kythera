import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
              <p className="text-amber-800">
                <strong>Importante:</strong> Este é um projeto de demonstração/portfólio. 
                Não realizamos vendas reais nem processamos pagamentos verdadeiros.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="mb-4">
                Ao acessar e usar este e-commerce de demonstração, você concorda em cumprir 
                e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Natureza do Serviço
              </h2>
              <p className="mb-4">
                Este site é um <strong>projeto de demonstração</strong> criado para fins de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Portfólio de desenvolvimento</li>
                <li>Demonstração de habilidades técnicas</li>
                <li>Teste de funcionalidades de e-commerce</li>
                <li>Aprendizado e desenvolvimento</li>
              </ul>
              <p className="mb-4">
                <strong>Não vendemos produtos reais</strong> nem processamos pagamentos verdadeiros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Conta de Usuário
              </h2>
              <p className="mb-4">
                Para usar certas funcionalidades, você pode precisar criar uma conta:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Você pode fazer login usando sua conta Google</li>
                <li>É responsável por manter a segurança da sua conta</li>
                <li>Deve fornecer informações precisas e atualizadas</li>
                <li>Não deve compartilhar suas credenciais com terceiros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Uso Aceitável
              </h2>
              <p className="mb-4">
                Você concorda em usar o serviço apenas para fins legítimos e de acordo com estes termos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Não usar o serviço para atividades ilegais ou não autorizadas</li>
                <li>Não tentar hackear, interferir ou danificar o sistema</li>
                <li>Não usar bots ou scripts automatizados sem permissão</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Produtos e Pedidos Fictícios
              </h2>
              <p className="mb-4">
                Todos os produtos exibidos são <strong>fictícios</strong> e para demonstração:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Não há produtos reais para venda</li>
                <li>Pedidos são apenas simulações</li>
                <li>Não há cobrança ou entrega real</li>
                <li>Endereços de entrega são apenas para teste</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Propriedade Intelectual
              </h2>
              <p className="mb-4">
                O conteúdo deste site, incluindo mas não limitado a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Código fonte e arquitetura</li>
                <li>Design e layout</li>
                <li>Textos e imagens (quando aplicável)</li>
                <li>Funcionalidades e recursos</li>
              </ul>
              <p className="mb-4">
                São propriedade do desenvolvedor e protegidos por leis de direitos autorais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="mb-4">
                Este é um projeto de demonstração, portanto:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>O serviço é fornecido "como está"</li>
                <li>Não garantimos disponibilidade contínua</li>
                <li>Não nos responsabilizamos por perdas ou danos</li>
                <li>O uso é por sua própria conta e risco</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Privacidade
              </h2>
              <p className="mb-4">
                Sua privacidade é importante para nós. Consulte nossa 
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                  Política de Privacidade
                </Link> para entender como coletamos, usamos e protegemos suas informações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Modificações dos Termos
              </h2>
              <p className="mb-4">
                Reservamos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação. 
                O uso continuado do serviço constitui aceitação dos termos modificados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Encerramento
              </h2>
              <p className="mb-4">
                Podemos encerrar ou suspender seu acesso ao serviço a qualquer momento, 
                sem aviso prévio, por qualquer motivo, incluindo violação destes termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Lei Aplicável
              </h2>
              <p className="mb-4">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa 
                será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contato
              </h2>
              <p className="mb-4">
                Para questões sobre estes termos, entre em contato através do 
                GitHub do projeto ou email do desenvolvedor.
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