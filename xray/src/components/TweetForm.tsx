import React, { useState } from 'react';
import type { TweetAnalysis } from './AnalysisResults';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Search, Loader } from 'lucide-react';
import AnalysisResults from './AnalysisResults';

export default function TweetForm() {
  const [tweetUrl, setTweetUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisData, setAnalysisData] = useState<TweetAnalysis | null>(null); // 👈 hold backend response

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tweetUrl) {
      toast({
        title: "Please enter a Tweet URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setShowResults(false);

    try {
      const response = await fetch('http://localhost:8000/api/analyze/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Save the backend data to state
      setAnalysisData(data);
      setShowResults(true);

      toast({
        title: "Analysis complete",
        description: "We've analyzed the tweet comments for you.",
      });

      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong while analyzing.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full space-y-4 animate-fade-in">
        <div className="relative">
          <Input
            type="url"
            placeholder="Paste tweet URL here"
            className="h-12 px-4 text-base bg-muted rounded-xl input-focus-effect border-input"
            value={tweetUrl}
            onChange={(e) => setTweetUrl(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <Button 
            type="submit" 
            size="sm" 
            disabled={isLoading}
            className="px-5 py-2 text-sm font-medium bg-brand-orange hover:bg-brand-orange-hover transition-all duration-300 rounded-xl shadow-lg hover:shadow-brand-orange/20 hover:shadow-xl transform hover:-translate-y-1"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader className="animate-spin h-4 w-4" />
                Analyze
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Analyze
              </span>
            )}
          </Button>
        </div>
      </form>

      <div id="results-section">
        <AnalysisResults isVisible={showResults} data={analysisData} />
      </div>
    </>
  );
}
