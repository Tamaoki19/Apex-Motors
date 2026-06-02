import { useEffect, useState } from 'react'; 
import { Header } from './components/Header';
import { CarrosCard } from './components/Card';
import { carrosData } from './data/carros';
import { CarsModal } from "./components/CarsModal";
import { Footer } from './components/Footer';
import Slider from "./components/Slider"; 
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');
  const [favorites, setFavorites] = useState([]); 
  const [selectedCar, setSelectedCar] = useState(null);

  // Filtra os carros de acordo com a busca e a aba ativa
  const filtredCars = carrosData
    .filter((car) =>
      car.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((car) =>
      activeTab === 'dash' || (activeTab === 'favorites' && favorites.includes(car.id))
    );

  // Gerencia o estado de favoritar/desfavoritar
  const toggleFavorite = (id) => {
    const car = carrosData.find((g) => g.id === id);
      const carTitle = car ? car.title : "Carro";

      const isFavorite = favorites.includes(id);
      if (isFavorite) {
        toast.warn(`Carro removido dos favoritos: ${carTitle}`, { theme: "dark" });
      }
      else {
        toast.success(`Carro adicionado aos favoritos: ${carTitle}`, { theme: "dark" });
      }

    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  // Inicializa a biblioteca de animações (AOS)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  // Configurações do Swiper passadas por propriedade
  const sliderSettings = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

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
          
          {/* Renderiza o Slider apenas na aba Dashboard */}
          {activeTab === "dash" && (
            <div className="container-slider">
              <Slider settings={sliderSettings} data={carrosData} />
            </div>
          )}

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
              <p style={{ textAlign: 'center', marginTop: '50px', width: '100%', gridColumn: '1 / -1' }}>
                {activeTab === 'dash' && 'Nenhum carro encontrado'}
                {activeTab === 'favorites' && 'Nenhum favorito ainda'}
                {activeTab === 'ajuda' && 'Problemas com o site? Contate o suporte'}
              </p>
            )}
          </div>
        </div>
        <footer>
        <Footer />
      </footer>
      </main>
      

      {/* Modal de visualização/compra do carro */}
      <CarsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}

export default App;