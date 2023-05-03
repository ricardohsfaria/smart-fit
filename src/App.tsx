import SearchBrances from './SearchBranches';
import ContextProvider from './context/ContextProvider';
import "./style/SearchBranches.css";

function App() {
  return (
    <ContextProvider>
      <SearchBrances />
    </ContextProvider>
  )
}

export default App;
