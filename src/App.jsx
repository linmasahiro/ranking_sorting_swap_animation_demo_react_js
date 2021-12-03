import { useEffect, useState } from "react";
import { getRankingJsonFile } from "./helper";
import RankingTable from "./components/RankingTable";
import './App.css'

// JSON File URL
const url = "/testData.json";
// Score refresh duration
const refreshTime = 300;


function App() {
  const [rankingData, setRankingData] = useState([]);

  /**
   * アプリの初期化
   * Application init（Get JSON Data via Fetch）
   */
  useEffect(() => {
    getRankingJsonFile(url).then((responseData) => {
      setRankingData(responseData);
    });
  }, []);

  return (
    <div>
      {rankingData.length > 0 && (
        <RankingTable refreshTime={refreshTime} rankingData={rankingData} />
      )}
    </div>
  );
}

export default App
