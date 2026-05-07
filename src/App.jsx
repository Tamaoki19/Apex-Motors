import { useEffect, useState } from 'react'; 
import { Header } from './components/Header';
import { CarrosCard } from './components/Card';
import { carrosData } from './data/carros';
import { CarsModal } from "./components/CarsModal";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');
  const [favorites, setFavorites] = useState([]); 
  const [selectedCar, setSelectedCar] = useState(null);

  const filtredCars = carrosData
    .filter((car) =>
      car.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((car) =>
      activeTab === 'dash' || (activeTab === 'favorites' && favorites.includes(car.id))
    );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="apex-app">
      <main className="apex-main">
        
        <Header 
          search={search} 
          setSearch={setSearch} 
          setOpenSearch={setOpenSearch} 
          openSearch={openSearch} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          
        />
        
        <div className="apex-content">
          <h2 className="section-title">
            {activeTab === 'dash' && 'Carros disponíveis'}
            {activeTab === 'favorites' && 'Favoritos'}
            {activeTab === 'ajuda' && 'Ajuda'}
          </h2>
          
          <div className="apex-grid">
            
            {filtredCars.length > 0 ? (
              filtredCars.map((g, index) => (
                <CarrosCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  price={g.price}
                  index={index}
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toggleFavorite(g.id)}
                  onBuy={() => setSelectedCar(g)}
                />
              ))
            ) : (
              <p style={{ textAlign: 'center', marginTop: '50px' }}>
                {activeTab === 'dash' && 'Nenhum carro encontrado'}
                {activeTab === 'favorites' && 'Nenhum favorito ainda'}
                {activeTab === 'favorites' && 'nenhum favorito ainda'}
                {activeTab === 'ajuda' && 'Problemas com o site? Contate o suporte'}
              </p>
            )}
          </div>
        </div>
      </main>
      <CarsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}

export default App;