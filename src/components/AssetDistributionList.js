import React from "react";
// Components
import AssetClass from "./AssetClass.js";

function AssetDistributionList({ portfolioData }) {
  return (
    <div>
      <h3>基本配分戦略</h3>
      {portfolioData.map((assetClass) => {
        return (
          <AssetClass
            key={`assetclass-${assetClass.id}`}
            assetClass={assetClass}
          />
        );
      })}
    </div>
  );
}

export default AssetDistributionList;
