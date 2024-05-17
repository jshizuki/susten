import React from "react";
// Components
import AssetClass from "./AssetClass.js";

const portfolioData = [
  {
    id: 1,
    type: "米国株式",
    bulletcolor: "#F7BFB4",
    percentage: 13.2,
  },
  {
    id: 2,
    type: "先進国株式（米国除く）",
    bulletcolor: "#DB93B0",
    percentage: 9.9,
  },
  {
    id: 3,
    type: "新興国株式",
    bulletcolor: "#B48B7D",
    percentage: 9.1,
  },
  {
    id: 4,
    type: "ハイ・イールド債券",
    bulletcolor: "#FFF9A5",
    percentage: 0.8,
  },
  {
    id: 5,
    type: "米国投資適格債券",
    bulletcolor: "#DFEFCA",
    percentage: 23.9,
  },
  {
    id: 6,
    type: "先進国投資適格債券（米国除く）",
    bulletcolor: "#CCDDD3",
    percentage: 23.9,
  },
  {
    id: 7,
    type: "現金など",
    bulletcolor: "#AFC2D5",
    percentage: 1.9,
  },
];

function AssetDistributionList() {
  return (
    <div>
      <h3>基本配分戦略</h3>
      {portfolioData.map((assetClass) => {
        return <AssetClass key={assetClass.id} assetClass={assetClass} />;
      })}
    </div>
  );
}

export default AssetDistributionList;

// 基本配分戦略
// 米国株式　13.2
// 先進国株式（米国除く）9.9
// 新興国株式 9.1
// ハイ・イールド債券 0.8
// 米国投資適格債券 23.9
// 先進国投資適格債券（米国除く）23.9
// 現金など 1.9
