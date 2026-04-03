'use client';

import { Mail, MessageSquare, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-2xl text-purple-400 hover:text-purple-300 transition">
            Iris
          </a>
          <a href="/" className="text-slate-300 hover:text-purple-400 transition">
            Back to Home
          </a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Have questions? We'd love to hear from you!
          </p>
          <p className="text-slate-400">
            Send us a message and we'll respond as soon as possible
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center animate-pop-in" style={{ animationDelay: '0.1s' }}>
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-slate-400 text-sm">contact@iris-bot.com</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Discord</h3>
            <p className="text-slate-400 text-sm">Join our support server</p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center animate-pop-in" style={{ animationDelay: '0.3s' }}>
            <User className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Creator</h3>
            <p className="text-slate-400 text-sm">Demon (arjun.xyz)</p>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Info */}
        <div className="mt-16 text-center text-slate-400 animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
          <p className="mb-4">
            You can also reach us on our{' '}
            <a
              href="https://discord.gg/qYQAVmzJEC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Discord support server
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          <p>© 2024 Iris Music Bot. Made with 💜</p>
        </div>
      </footer>
    </main>
  );
}
