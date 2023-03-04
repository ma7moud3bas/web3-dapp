import './App.css';
import Profile from './Profile';
import WagmiWrapper from './WagmiWrapper';

function App() {
  return (
    <WagmiWrapper>
      <div className="App">
        <Profile />
      </div>
    </WagmiWrapper>
  );
}

export default App;
