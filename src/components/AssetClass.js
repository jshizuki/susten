import React from "react";
import styles from "../css/AssetClass.module.css";

function AssetClass({ assetClass }) {
  // console.log(assetClass)
  return (
    <div className={styles.container}>
      <div className={styles.bulletAndClass}>
        <i
          class="fa-solid fa-circle"
          style={{ color: assetClass.bulletcolor }}
        ></i>
        <p>{assetClass.type}</p>
      </div>
      <p><b>{assetClass.percentage}%</b></p>
    </div>
  );
}

//  <i class="fa-solid fa-circle" style="color: #63E6BE;"></i>
// style={{ color: assetClass.bulletcolor }}
// {/* <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#FFD43B",}} /> */}

export default AssetClass;
