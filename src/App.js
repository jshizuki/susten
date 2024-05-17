import styles from './App.module.css';
import AssetDistributionList from './components/AssetDistributionList';

function App() {
  return (
    <div className={styles.appContainer}>
      <AssetDistributionList />
    </div>
  );
}

export default App;
