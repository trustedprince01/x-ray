import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BarChart, List, MessageSquare, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { ChartContainer } from './ui/chart';
import { 
  Bar, 
  BarChart as RechartsBarChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export interface TweetAnalysis {
  replies: string[];
  sentiment?: {
    positive: number;
    negative: number;
    neutral: number;
  };
  hashtags?: string[];
  topics?: string[];
}

interface AnalysisResultsProps {
  isVisible: boolean;
  data: TweetAnalysis | null;
}

const platformData = [
  { name: 'Twitter', count: 48 },
  { name: 'YouTube', count: 32 },
  { name: 'Instagram', count: 24 },
  { name: 'Reddit', count: 19 },
  { name: 'TikTok', count: 14 }
];

const debateData = [
  { topic: 'Performance Impact', side1: 'Minimal effect on system', side2: 'Causes significant slowdown', split: '65/35' },
  { topic: 'Privacy Concerns', side1: 'Data collection is limited', side2: 'Collects too much user data', split: '47/53' }
];

const keyInsights = [
  'Most users described the UI as intuitive and seamless',
  'Performance issues mentioned primarily on older devices',
  'Privacy concerns centered around data collection policies',
  'Positive sentiment toward customer support responsiveness',
  'Feature requests focused on integration capabilities'
];

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ isVisible, data }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <div 
      className={`mt-16 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      {/* Container with fixed width and centered horizontally */}
      <div className="max-w-6xl mx-auto">
        {/* Flex container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summary Card */}
          <div className="p-2">
            <Card className="bg-muted animate-fade-in h-full flex flex-col" style={{animationDelay: '0ms'}}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Comment Summary</CardTitle>
                <FileText className="text-brand-orange h-5 w-5" />
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-brand-gray-text">
                  Analysis of the tweet's comment section reveals predominantly positive sentiment with 65% favorable responses. 
                  Discussion focuses on feature comparisons and performance metrics.
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 text-xs" 
                  onClick={() => copyToClipboard("Analysis of the tweet's comment section reveals predominantly positive sentiment with 65% favorable responses...")}
                >
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  Copy to clipboard
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Platforms Card */}
          <div className="p-2">
            <Card className="bg-muted animate-fade-in h-full flex flex-col" style={{animationDelay: '200ms'}}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Platforms Mentioned</CardTitle>
                <BarChart className="text-brand-orange h-5 w-5" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[180px]">
                  <ChartContainer
                    config={{
                      twitter: {
                        label: "Twitter",
                        theme: { light: "#F97316", dark: "#F97316" },
                      },
                      youtube: {
                        label: "YouTube",
                        theme: { light: "#F97316", dark: "#F97316" },
                      },
                      instagram: {
                        label: "Instagram",
                        theme: { light: "#F97316", dark: "#F97316" },
                      },
                      reddit: {
                        label: "Reddit",
                        theme: { light: "#F97316", dark: "#F97316" },
                      },
                      tiktok: {
                        label: "TikTok",
                        theme: { light: "#F97316", dark: "#F97316" },
                      },
                    }}
                  >
                    <RechartsBarChart data={platformData} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={false}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg bg-background p-2 shadow-md border border-border">
                                <p className="text-sm text-foreground font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]} fill="#F97316" />
                    </RechartsBarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Insights Card */}
          <div className="p-2">
            <Card className="bg-muted animate-fade-in h-full flex flex-col" style={{animationDelay: '400ms'}}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Key Insights</CardTitle>
                <List className="text-brand-orange h-5 w-5" />
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {keyInsights.slice(0, 3).map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1.5 mr-3 h-2.5 w-2.5 rounded-full bg-brand-orange" />
                      <p className="text-sm text-brand-gray-text">{insight}</p>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 text-xs" 
                  onClick={() => copyToClipboard(keyInsights.join("\n"))}
                >
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  Copy to clipboard
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Debates Card */}
          <div className="p-2">
            <Card className="bg-muted animate-fade-in h-full flex flex-col" style={{animationDelay: '600ms'}}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Notable Debates</CardTitle>
                <MessageSquare className="text-brand-orange h-5 w-5" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-5">
                  {debateData.slice(0, 1).map((debate, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-sm text-white">{debate.topic}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-2 rounded-lg bg-secondary/50 text-xs">
                          <p className="text-brand-gray-text">{debate.side1}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-secondary/50 text-xs">
                          <p className="text-brand-gray-text">{debate.side2}</p>
                        </div>
                      </div>
                      <p className="text-xs text-center text-brand-gray-text">Split: {debate.split}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 text-xs" 
                  onClick={() => copyToClipboard(debateData.map(d => `${d.topic}: ${d.side1} vs ${d.side2} (${d.split})`).join("\n"))}
                >
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  Copy to clipboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;