import Entry from "./Entry";
import koreanpedia from "../koreanpedia";

function App() {
  const createEntry = (koreanTerm) => 
    <Entry
      key={koreanTerm.id}
      symbol={koreanTerm.symbol}
      name={koreanTerm.name}
      description={koreanTerm.description}
    />
 
  return (
    <div>
      <h1>
        <span>Koreanpedia</span>
      </h1>

      <dl className="dictionary">{koreanpedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
