
import React from 'react';
import TweetExample from './TweetExample';

export default function TweetExamples() {
  const tweets = [
    {
      avatarSrc: "/images/665eb9ce-36ea-487f-8938-cc05a8a7775f.png",
      name: "DamolaAluko",
      username: "@damola_aluko001",
      content: "No way Messi is better than Ronaldo at any point"
    },
    {
      avatarSrc: "/images/02357948-2eb8-4458-bf7e-765eed027b3c.png",
      name: "dhairya sachdeva",
      username: "@DhairyaS11",
      content: "What is the best place to find freelance projects? All suggestions are appreciated!"
    },
    {
      avatarSrc: "/images/210e5818-791a-4122-be7f-93bd1c591f78.png",
      name: "orixstarr",
      username: "@urawamonkoe",
      content: "How far is Mars from the Earth?"
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {tweets.map((tweet, index) => (
        <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
          <TweetExample {...tweet} />
        </div>
      ))}
    </div>
  );
}
