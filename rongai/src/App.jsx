import SearchBar from './components/SearchBar';
import ItineraryOverview from './components/ItineraryOverview';
import ItineraryList from './components/ItineraryList';

function App() {
  return (
    <div className="p-6 flex items-center justify-center flex-col">
      <SearchBar />
      <ItineraryOverview />
      <ItineraryList />
    </div>
  );
}

export default App;
