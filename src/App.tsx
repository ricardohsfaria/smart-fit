import './App.css';
import SearchBrances from './SearchBranches';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <SearchBrances />
    </ContextProvider>
  )
}

export default App;
