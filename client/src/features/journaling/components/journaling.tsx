import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/navbar';
import {
  Save, 
  Calendar, 
  BookOpen, 
  Heart,
  Trash2,
  Edit3,
  Notebook
} from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  // mood: 'happy' | 'neutral' | 'sad' | 'excited';
  // tags: string[];
  isFavorite: boolean;
}

export function Journaling() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '2',
      title: 'Reflecting on Today',
      content: 'Had a challenging day at work, but I tried to channel my Spring Onion energy by staying true to my values while being more assertive in the team meeting.',
      date: '2025-01-15',
      // mood: 'neutral',
      // tags: ['work', 'growth', 'assertiveness'],
      isFavorite: false
    },
    {
      id: '1',
      title: 'My Hope-Fu Journey Begins',
      content: 'Today I discovered I\'m a Spring Onion Tofucat! It really resonates with how I approach relationships and creativity. I love that I\'m empathetic, but I need to work on being more decisive...',
      date: '2025-01-14',
      // mood: 'happy',
      // tags: ['personality', 'self-discovery', 'growth'],
      isFavorite: true
    },
    
  ]);

  const [currentEntry, setCurrentEntry] = useState<Partial<JournalEntry>>({
    title: '',
    content: '',
    // mood: 'neutral',
    // tags: []
  });

  const handleSaveEntry = () => {
    if (!currentEntry.title || !currentEntry.content) return;

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      title: currentEntry.title!,
      content: currentEntry.content!,
      date: new Date().toISOString().split('T')[0],
      // mood: currentEntry.mood || 'neutral',
      // tags: currentEntry.tags || [],
      isFavorite: false
    };

    setEntries(prev => [newEntry, ...prev]);
    // setCurrentEntry({ title: '', content: '', mood: 'neutral', tags: [] });
    setCurrentEntry({ title: '', content: ''});
  };

  const toggleFavorite = (entryId: string) => {
    setEntries(prev => prev.map((entry: any) => 
      entry.id === entryId ? { ...entry, isFavorite: !entry.isFavorite } : entry
    ));
  };

  const deleteEntry = (entryId: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== entryId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      {/* Header */}
      <div className="text-green-600 px-6 pt-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold ms-7">Journaling</h1>
            <Notebook className="w-10 h-10 mr-3 ms-3" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Always Show Typing Area */}
        <Card className="mb-6 shadow-lg pt-0">
          <CardHeader className="bg-[#1c6d22] p-3">
            <CardTitle className="flex items-center space-x-2">
              <Edit3 className="w-6 h-6 text-green-400" />
              <span className="text-2xl text-white/90">Write your Thoughts</span>
              {/* <h1>Write Your Thoughts</h1> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Input
              placeholder="Give your entry a title..."
              value={currentEntry.title || ''}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, title: e.target.value }))}
              className="text-lg font-medium"
            />

            <Textarea
              placeholder="What's on your mind today? Reflect on your thoughts, feelings, and experiences..."
              value={currentEntry.content || ''}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, content: e.target.value }))}
              className="min-h-[200px] resize-none"
            />

            <div className="flex justify-end">
              <Button
                onClick={handleSaveEntry}
                className="bg-[#1c6d22] hover:bg-[#1e7725]"
                disabled={!currentEntry.title || !currentEntry.content}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Entry
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Journal Entries List */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Start Your Journey</h3>
                <p className="text-gray-500 mb-4">Begin documenting your thoughts and reflections</p>
              </CardContent>
            </Card>
          ) : (
            entries.map((entry: any) => {
              // const MoodIcon = moodIcons[entry.mood].icon;
              return (
                <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="px-6 py-2">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800 ">{entry.title}</h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(entry.date).toLocaleDateString('en-GB')}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleFavorite(entry.id)}
                          className={`p-1 rounded ${entry.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                        >
                          <Heart className={`w-4 h-4 ${entry.isFavorite ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="p-1 rounded text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {entry.content.length > 200 ? `${entry.content.slice(0, 200)}...` : entry.content}
                    </p>
                    
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}