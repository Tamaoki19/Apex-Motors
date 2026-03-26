
import { Header } from './components/Header';
import { CarrosCard } from './components/Card';
import { gamesData } from './data/carros';
import "./App.css";


function App() {
  return (
    <div className="apex-app">
      

      <main className="apex-main">
        <Header />
        
        <div className="apex-content">
          <h2 className="section-title">Carros</h2>
          <div className="apex-grid">
            {gamesData.map((g) => (
              <CarrosCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
              />
            ))}

          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
