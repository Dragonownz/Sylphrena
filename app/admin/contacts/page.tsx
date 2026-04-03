'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  timestamp: string;
  message?: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact');
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (err) {
      setError('Failed to load contacts');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">Contact Submissions</h1>
          <a href="/" className="text-slate-300 hover:text-purple-400 transition">
            Back to Home
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <Card className="bg-red-500/20 border-red-500/50 p-4 mb-6">
            <p className="text-red-300">{error}</p>
          </Card>
        )}

        {loading ? (
          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
            <p className="text-slate-400">Loading contacts...</p>
          </Card>
        ) : contacts.length === 0 ? (
          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
            <p className="text-slate-400">No contact submissions yet</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact List */}
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold mb-4 text-purple-400">
                All Submissions ({contacts.length})
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {contacts.map((contact) => (
                  <Card
                    key={contact.id}
                    className={`bg-slate-800/50 border-slate-700 p-4 cursor-pointer transition ${
                      selectedContact?.id === contact.id
                        ? 'border-purple-500 bg-slate-800'
                        : 'hover:border-purple-500/50'
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <p className="font-semibold text-sm text-white truncate">
                      {contact.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {contact.email}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {formatDate(contact.timestamp)}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-2">
              {selectedContact ? (
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                        Name
                      </h3>
                      <p className="text-lg font-semibold text-white">
                        {selectedContact.name}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        {selectedContact.email}
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                        Subject
                      </h3>
                      <p className="text-white">{selectedContact.subject}</p>
                    </div>

                    <div>
                      <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                        Submitted
                      </h3>
                      <p className="text-slate-300">
                        {formatDate(selectedContact.timestamp)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-2">
                        Message
                      </h3>
                      <p className="text-slate-300 whitespace-pre-wrap">
                        {selectedContact.message}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 mt-4"
                      onClick={() =>
                        window.open(
                          `mailto:${selectedContact.email}`,
                          '_blank'
                        )
                      }
                    >
                      Reply via Email
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
                  <p className="text-slate-400">
                    Select a contact to view details
                  </p>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            onClick={fetchContacts}
          >
            Refresh
          </Button>
        </div>
      </div>
    </main>
  );
}
