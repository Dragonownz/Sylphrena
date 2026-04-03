'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold flex items-center gap-2 hover:text-purple-400 transition">
            <span className="text-3xl">👻</span>
            <span>Iris</span>
          </a>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1488356644860723291', '_blank')}
          >
            👻 Invite
          </Button>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 text-purple-400">Terms of Service</h1>
        <p className="text-slate-300 mb-8">Last updated: April 2024</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">1. Acceptance of Terms</h2>
            <p>By inviting and using Iris (the &quot;Bot&quot;) in your Discord server, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the Bot.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">2. Bot Usage</h2>
            <p className="mb-4">Iris is provided as-is for entertainment and music streaming purposes. You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the Bot only in accordance with Discord&apos;s Terms of Service</li>
              <li>Not use the Bot for illegal, harmful, or abusive purposes</li>
              <li>Not attempt to exploit, modify, or reverse-engineer the Bot</li>
              <li>Not spam commands or abuse the Bot&apos;s functionality</li>
              <li>Respect all copyright and music licensing agreements</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">3. No Warranties</h2>
            <p>Iris is provided &quot;as is&quot; without any warranties or guarantees. We do not guarantee:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Uninterrupted or error-free operation</li>
              <li>Specific performance levels or uptime</li>
              <li>Availability of specific music sources or songs</li>
              <li>Recovery of lost data or configurations</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">4. Limitation of Liability</h2>
            <p>Iris&apos;s creators are not liable for any damages, losses, or issues arising from your use of the Bot, including but not limited to data loss, service interruption, or indirect damages.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">5. Music and Copyright</h2>
            <p>Iris streams music from licensed sources. Users are responsible for ensuring their use complies with applicable copyright laws and Discord policies. Music availability varies by region and service.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">6. Prohibited Conduct</h2>
            <p>You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Use Iris to harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to the Bot or its systems</li>
              <li>Use Iris for commercial purposes without permission</li>
              <li>Circumvent security features or access controls</li>
              <li>Engage in any illegal activity</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">7. Termination</h2>
            <p>We reserve the right to terminate access to Iris at any time for violations of these terms or for any reason without notice. Discord may also suspend or remove the Bot at its discretion.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">8. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of Iris constitutes acceptance of updated terms. We will notify users of significant changes via our support server.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">9. Discord Compliance</h2>
            <p>Iris operates in full compliance with Discord&apos;s Terms of Service, Developer Terms of Service, and Community Guidelines. By using Iris, you also agree to Discord&apos;s terms.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">10. Contact</h2>
            <p>For questions about these terms, please join our <a href="https://discord.gg/qYQAVmzJEC" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">support server</a> or DM Demon on Discord.</p>
          </Card>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-8">
            <p className="text-sm">By using Iris, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => window.location.href = '/'}
          >
            ← Back to Home
          </Button>
          <Button 
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            onClick={() => window.open('https://discord.gg/qYQAVmzJEC', '_blank')}
          >
            💬 Support Server
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 space-y-2">
          <p>© 2024 Iris Music Bot. Made with 💜</p>
          <p className="text-sm">Made by <span className="text-purple-400 font-semibold">Demon</span> (<a href="https://arjun.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">arjun.xyz</a>)</p>
        </div>
      </footer>
    </div>
  )
}
