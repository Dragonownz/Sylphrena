'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Music, Zap, Sliders, Moon, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">👻</span>
            <span>Iris</span>
          </div>
          <div className="hidden sm:flex gap-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#community" className="hover:text-purple-400 transition">Community</a>
            <a href="#faq" className="hover:text-purple-400 transition">FAQ</a>
            <a href="#why-iris" className="hover:text-purple-400 transition">Why Iris</a>
            <a href="/terms" className="hover:text-purple-400 transition">Terms</a>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              onClick={() => window.open('https://discord.gg/qYQAVmzJEC', '_blank')}
            >
              💬 Support
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1488356644860723291', '_blank')}
            >
              👻 Invite
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300 animate-slide-up">
            ✨ v2.5 Just Launched 🩷 Super Cute
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-slide-up" style={{animationDelay: '0.1s'}}>
            Your Server&apos;s Cutest Music Companion 🎶
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Iris is an adorable ghost who loves music more than haunting! High-fidelity streaming, smart queues, and dreamy audio filters — wrapped in the most kawaii package. 👻💜
          </p>
          
          <div className="flex gap-4 justify-center pt-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1488356644860723291', '_blank')}
            >
              👻 Invite Iris
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8"
              onClick={() => window.open('https://discord.gg/qYQAVmzJEC', '_blank')}
            >
              💬 Join Community
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="grid grid-cols-5 gap-4 text-center mb-20">
          <div className="text-4xl animate-emoji-bounce" style={{animationDelay: '0s'}}>🐱</div>
          <div className="text-4xl animate-emoji-bounce" style={{animationDelay: '0.1s'}}>🦊</div>
          <div className="text-4xl animate-emoji-bounce" style={{animationDelay: '0.2s'}}>🐰</div>
          <div className="text-4xl animate-emoji-bounce" style={{animationDelay: '0.3s'}}>🐼</div>
          <div className="text-4xl animate-emoji-bounce" style={{animationDelay: '0.4s'}}>🐧</div>
        </div>

        <div className="text-center text-lg text-slate-300 mb-12">
          Loved by <span className="font-bold text-purple-400">50+ servers</span> worldwide ⭐
        </div>
      </section>

      {/* Music Notes Divider */}
      <section className="text-center text-4xl space-x-4 py-8 text-purple-400/40">
        <span className="inline-block animate-float" style={{animationDelay: '0s'}}>🎵</span>
        <span className="inline-block animate-float" style={{animationDelay: '0.2s'}}>♪</span>
        <span className="inline-block animate-float" style={{animationDelay: '0.4s'}}>🎶</span>
        <span className="inline-block animate-float" style={{animationDelay: '0.6s'}}>♫</span>
        <span className="inline-block animate-float" style={{animationDelay: '0.8s'}}>🎼</span>
        <span className="inline-block animate-float" style={{animationDelay: '1s'}}>🎸</span>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-4 animate-slide-up">Why Iris? 🌸</h2>
        <p className="text-center text-slate-300 text-xl mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>She&apos;s got everything</p>
        <p className="text-center text-slate-400 mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>Not just cute — Iris is packed with pro-grade features wrapped in the most adorable package ever made. 💜</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-purple-500/50 transition group animate-bounce-pop" style={{animationDelay: '0.1s'}}>
            <div className="flex gap-4">
              <Music className="w-12 h-12 text-purple-400 flex-shrink-0 group-hover:scale-110 transition" />
              <div>
                <h3 className="text-xl font-bold mb-2">Crystal Audio</h3>
                <p className="text-slate-400">320kbps lossless streaming. Your ears deserve the best!</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-purple-500/50 transition group animate-bounce-pop" style={{animationDelay: '0.2s'}}>
            <div className="flex gap-4">
              <Zap className="w-12 h-12 text-purple-400 flex-shrink-0 group-hover:scale-110 transition" />
              <div>
                <h3 className="text-xl font-bold mb-2">Instant Play</h3>
                <p className="text-slate-400">Zero buffer time. Music starts in milliseconds, every time.</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-purple-500/50 transition group animate-bounce-pop" style={{animationDelay: '0.3s'}}>
            <div className="flex gap-4">
              <Sliders className="w-12 h-12 text-purple-400 flex-shrink-0 group-hover:scale-110 transition" />
              <div>
                <h3 className="text-xl font-bold mb-2">15+ Filters</h3>
                <p className="text-slate-400">Bass boost, nightcore, vaporwave — make Iris your own!</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-purple-500/50 transition group animate-bounce-pop" style={{animationDelay: '0.4s'}}>
            <div className="flex gap-4">
              <Moon className="w-12 h-12 text-purple-400 flex-shrink-0 group-hover:scale-110 transition" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Mode</h3>
                <p className="text-slate-400">Iris never sleeps! She&apos;ll stay and play as long as you need.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
            See all features ✨
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-4 animate-slide-up">Community Love 💜</h2>
        <p className="text-center text-slate-300 text-xl mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>They&apos;re obsessed</p>
        <p className="text-center text-slate-400 mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>Don&apos;t take our word for it — hear from the servers who love Iris most.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stars: 5,
              text: "Iris is literally the cutest thing in our server. The music quality is insane and the ghost reactions are adorable!! 10/10 would recommend!",
              emoji: "🐱",
              name: "Sakura_Chan",
              server: "Anime Vibes · 12k members"
            },
            {
              stars: 5,
              text: "Finally a music bot that doesn't feel like a boring tool. Iris has personality!! The /play command is instant and the queue management is chef's kiss 🤌",
              emoji: "🦊",
              name: "Foxxy_Dev",
              server: "Gaming HQ · 5k members"
            },
            {
              stars: 5,
              text: "We switched from another bot and honestly Iris blew us away. 24/7 mode works flawlessly and the audio filters are super fun. Our server loves her!",
              emoji: "🐰",
              name: "Bunny_Mod",
              server: "Chill Lounge · 8k members"
            }
          ].map((review, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700 p-6 animate-bounce-pop hover:shadow-lg hover:shadow-purple-500/20 transition-shadow" style={{animationDelay: `${i * 0.15}s`}}>
              <div className="flex gap-1 mb-4">
                {Array(review.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{review.emoji}</span>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.server}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Is Iris Safe Section */}
      <section id="why-iris" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-4 animate-slide-up">Is Iris Safe? 🔒</h2>
        <p className="text-center text-slate-300 text-xl mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>Safety & Security First</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-bounce-pop" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>✅</span> No Selfbotting
            </h3>
            <p className="text-slate-400">Iris is a proper Discord bot using official APIs. Zero selfbotting, 100% safe from bans.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-bounce-pop" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🔐</span> Data Privacy
            </h3>
            <p className="text-slate-400">We never store your personal data. Read our <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">privacy policy</a> for details.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-bounce-pop" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>⚡</span> No Permissions Abuse
            </h3>
            <p className="text-slate-400">Iris only requests the permissions she needs to play music. Nothing more, nothing less.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-bounce-pop" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🛡️</span> Discord Verified
            </h3>
            <p className="text-slate-400">Verified by Discord team. Trusted by thousands of communities worldwide.</p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-4 animate-slide-up">Frequently Asked Questions 💬</h2>
        <p className="text-center text-slate-300 text-xl mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>Got questions? We&apos;ve got answers!</p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>How do I invite Iris to my server?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">Click the &quot;Invite&quot; button at the top of the page, authorize the bot, and select your server. She&apos;ll join in seconds!</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.15s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>Is Iris free to use?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">Yes! Iris is completely free forever. No premium tiers, no paywall. Just pure adorable music bot joy.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>What audio sources does Iris support?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">Iris supports YouTube, Spotify, SoundCloud, Bandcamp, Twitch, Vimeo, and many more. If it&apos;s music, she can play it!</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.25s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>Can I use Iris on multiple servers?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">Absolutely! Invite Iris to as many servers as you want. She&apos;ll work perfectly on all of them simultaneously.</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>What should I do if Iris stops working?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">First, check that Iris has proper permissions. If issues persist, join our support server and let us know. Our team responds quickly!</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-slide-up cursor-pointer hover:border-purple-500/50 transition group" style={{animationDelay: '0.35s'}}>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-purple-400 transition">
              <span>Does Iris have a command list?</span>
              <span>+</span>
            </h3>
            <p className="text-slate-400 hidden group-hover:block">Yes! Type /help in any server where Iris is, and she&apos;ll show you all available commands and features.</p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-bounce-pop" style={{animationDelay: '0.1s'}}>
            <div className="text-5xl font-bold text-purple-400 mb-2 animate-glow-pulse">10</div>
            <p className="text-slate-400">Servers Using Iris</p>
          </div>
          <div className="animate-bounce-pop" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl font-bold text-purple-400 mb-2 animate-glow-pulse">1k</div>
            <p className="text-slate-400">Total Users</p>
          </div>
          <div className="animate-bounce-pop" style={{animationDelay: '0.3s'}}>
            <div className="text-5xl font-bold text-purple-400 mb-2 animate-glow-pulse">10k</div>
            <p className="text-slate-400">Songs Played</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 animate-slide-up">👻 Ready to meet Iris? 💜</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Join servers enjoying the cutest music experience on Discord. No credit card, no setup hassle — invite in one click!
        </p>
        <div className="flex gap-4 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
          <Button 
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 hover:shadow-lg hover:shadow-purple-600/50 transition-all hover:scale-105"
            onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1488356644860723291', '_blank')}
          >
            👻 Invite Iris — It&apos;s Free
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
            onClick={() => window.open('https://discord.gg/qYQAVmzJEC', '_blank')}
          >
            💬 Join Support Server
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-purple-400 mb-4">Iris</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
                <li><a href="#features" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#community" className="hover:text-purple-400 transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#faq" className="hover:text-purple-400 transition">FAQ</a></li>
                <li><a href="#why-iris" className="hover:text-purple-400 transition">Safety</a></li>
                <li><a href="https://discord.gg/qYQAVmzJEC" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/terms" className="hover:text-purple-400 transition">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 space-y-2">
            <p>© 2024 Iris Music Bot. Made with 💜</p>
            <p className="text-sm">Made by <span className="text-purple-400 font-semibold">Demon</span> (<a href="https://arjun.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">arjun.xyz</a>) — DM on Discord for inquiries</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
