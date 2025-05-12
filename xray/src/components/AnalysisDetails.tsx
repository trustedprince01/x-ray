// components/AnalysisDetails.tsx

export default function AnalysisDetails({ isVisible, data }) {
    if (!isVisible || !data) return null;
  
    return (
      <div className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Results</h2>
  
        <div>
          <h3 className="font-semibold">Platforms</h3>
          <ul>
            {data.platforms.map((platform: any) => (
              <li key={platform.name}>
                {platform.name}: {platform.percentage}%
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold">Debates</h3>
          {data.debates.map((debate: any, index: number) => (
            <div key={index}>
              <strong>{debate.title}</strong>
              <ul className="list-disc ml-6">
                {debate.points.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div>
          <h3 className="font-semibold">Insights</h3>
          <ul className="list-disc ml-6">
            {data.insights.map((insight: string, index: number) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold">Summary</h3>
          <p>{data.summary}</p>
        </div>
      </div>
    );
  }
  