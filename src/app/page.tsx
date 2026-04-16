export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#16213E] via-[#1A1A2E] to-[#0F3460] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            AopAI
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4">
            Advanced Operations AI
          </p>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
            Transforming business operations with intelligent automation and predictive analytics
          </p>
          <button className="bg-[#E94560] hover:bg-[#E94560]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#16213E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border-2 border-[#E94560]/20 hover:border-[#E94560] transition-all duration-300">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Smart Automation
              </h3>
              <p className="text-white/70 leading-relaxed">
                Automate complex workflows with AI-powered decision making and process optimization
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border-2 border-[#E94560]/20 hover:border-[#E94560] transition-all duration-300">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-white/70 leading-relaxed">
                Military-grade encryption and compliance with industry standards to protect your data
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border-2 border-[#E94560]/20 hover:border-[#E94560] transition-all duration-300">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Predictive Analytics
              </h3>
              <p className="text-white/70 leading-relaxed">
                Advanced forecasting and insights to drive data-informed business decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0F3460] to-[#1A1A2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Join leading enterprises using AopAI to streamline workflows and maximize efficiency
          </p>
          <button className="bg-[#E94560] hover:bg-[#E94560]/90 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3460] py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2026 AopAI. Powered by TVAG Teams.
          </p>
        </div>
      </footer>
    </div>
  );
}
