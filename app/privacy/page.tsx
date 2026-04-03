'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function PrivacyPage() {
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
        <h1 className="text-5xl font-bold mb-8 text-purple-400">Privacy Policy</h1>
        <p className="text-slate-300 mb-8">Last updated: April 2024</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">1. Introduction</h2>
            <p>Iris (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Iris Discord bot. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Bot.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">2. Information We Collect</h2>
            <p className="mb-4">We collect minimal information necessary to operate Iris:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Discord User IDs:</strong> To identify users and track command usage</li>
              <li><strong>Guild/Server IDs:</strong> To provide per-server settings and preferences</li>
              <li><strong>Voice Channel Data:</strong> To stream music to the correct channel</li>
              <li><strong>Playlist/Queue Data:</strong> To remember queued songs during sessions</li>
              <li><strong>Command History:</strong> For debugging and service improvement (temporary storage)</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">3. What We Do NOT Collect</h2>
            <p>Iris does <strong>not</strong> collect or store:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Personal information (names, emails, addresses, phone numbers)</li>
              <li>Message content or DM logs</li>
              <li>IP addresses or device identifiers</li>
              <li>Payment or financial information</li>
              <li>Biometric data</li>
              <li>Sensitive personal data of any kind</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">4. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Provide and improve music streaming functionality</li>
              <li>Maintain user preferences and server settings</li>
              <li>Debug issues and improve service reliability</li>
              <li>Prevent abuse and enforce our Terms of Service</li>
              <li>Comply with Discord&apos;s requirements and Discord ToS</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">5. Data Retention</h2>
            <p>We retain data only as long as necessary:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>User preferences: Retained while the Bot is in your server</li>
              <li>Session data (queues, playlists): Cleared when Iris leaves or the session ends</li>
              <li>Command history: Stored temporarily for debugging (max 7 days)</li>
              <li>Error logs: Retained for up to 30 days</li>
            </ul>
            <p className="mt-4">When you remove Iris from your server or we are removed by Discord, all associated data is deleted within 7 days.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Encrypted data transmission (HTTPS/SSL)</li>
              <li>Secure database storage with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to sensitive data (admin only)</li>
            </ul>
            <p className="mt-4">However, no security system is 100% secure. We cannot guarantee absolute protection.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">7. Third-Party Services</h2>
            <p>Iris integrates with music streaming platforms and services. These third parties have their own privacy policies:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>YouTube Music, Spotify, SoundCloud, etc.</li>
              <li>Discord (our hosting platform)</li>
              <li>Our hosting providers</li>
            </ul>
            <p className="mt-4">We recommend reviewing their privacy policies. We are not responsible for their data practices.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Request access to your data</li>
              <li>Request deletion of your data (by removing Iris from your server)</li>
              <li>Request correction of inaccurate data</li>
              <li>Opt out by simply not using the Bot</li>
            </ul>
            <p className="mt-4">To exercise these rights, join our support server and contact us directly.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">9. GDPR Compliance</h2>
            <p>For users in the European Union, Iris complies with the General Data Protection Regulation (GDPR). We:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Only collect data with proper consent</li>
              <li>Provide data access and deletion rights</li>
              <li>Keep records of data processing</li>
              <li>Maintain appropriate data protection agreements</li>
            </ul>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">10. Children&apos;s Privacy</h2>
            <p>Iris is not intended for children under 13. We do not knowingly collect data from children under 13. If we discover such collection, we will delete the data immediately.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be effective immediately upon posting. We recommend reviewing this policy regularly. Continued use of Iris constitutes acceptance of changes.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">12. Contact Us</h2>
            <p>For privacy questions, concerns, or data requests, please:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
              <li>Join our <a href="https://discord.gg/qYQAVmzJEC" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">support server</a></li>
              <li>DM Demon on Discord</li>
              <li>Visit <a href="https://arjun.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">arjun.xyz</a></li>
            </ul>
          </Card>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-8">
            <p className="text-sm">Your privacy is important to us. If you have concerns about how we handle your data, please reach out immediately.</p>
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
