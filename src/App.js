import styles from "./App.module.css";
import AssetDistributionList from "./components/AssetDistributionList";
import PieChartForSusten from "./components/PieChartForSusten";

const portfolioData = [
  {
    id: 1,
    name: "米国株式",
    bulletcolor: "#F7BFB4",
    value: 13.2,
  },
  {
    id: 2,
    name: "先進国株式（米国除く）",
    bulletcolor: "#DB93B0",
    value: 9.9,
  },
  {
    id: 3,
    name: "新興国株式",
    bulletcolor: "#B48B7D",
    value: 9.1,
  },
  {
    id: 4,
    name: "ハイ・イールド債券",
    bulletcolor: "#FFF9A5",
    value: 0.8,
  },
  {
    id: 5,
    name: "米国投資適格債券",
    bulletcolor: "#DFEFCA",
    value: 23.9,
  },
  {
    id: 6,
    name: "先進国投資適格債券（米国除く）",
    bulletcolor: "#6E7DAB",
    value: 23.9,
  },
  {
    id: 7,
    name: "現金など",
    bulletcolor: "#AFC2D5",
    value: 19.2,
  },
];

function App() {
  return (
    <div className={styles.appContainer}>
      <div>
        <PieChartForSusten portfolioData={portfolioData} />
        <AssetDistributionList portfolioData={portfolioData} />
      </div>
    </div>
  );
}

export default App;
