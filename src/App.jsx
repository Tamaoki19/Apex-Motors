
import { useState } from 'react'; 
import { Header } from './components/Header';
import { CarrosCard } from './components/Card';
import { carrosData } from './data/carros';
import "./App.css";

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');

  const filtredCars = carrosData
  .filter(() => activeTab === 'dash' )
  .filter((car) =>
    car.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="apex-app">
      <main className="apex-main">
        
        <Header 
          search={search} 
          setSearch={setSearch} 
          setOpenSearch={setOpenSearch} 
          openSearch={openSearch} 
          activeTab={activeTab} setActiveTab={setActiveTab}
        />
        
        <div className="apex-content">
          <h2 className="section-title">
            {activeTab === 'dash' && 'Carros disponíveis'}
            {activeTab === 'consultoria' && 'Consultoria'}
            {activeTab === 'ajuda' && 'Ajuda'}</h2>
          
          <div className="apex-grid">
            
            {filtredCars.length > 0 ? (
              filtredCars.map((g) => (
                <CarrosCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  price={g.price}
                />
              ))
            ) : (
                <p style={{ textAlign: 'center', marginTop: '50px' }}>
                {activeTab === 'dash' && 'Carros disponíveis'}
                {activeTab === 'consultoria' && 'Converse com nossa consultoria através do whatsapp +55 (88)4002-8922 ou por email através do ApexMotors@consultoria.com'}
                {activeTab === 'ajuda' && 'Problemas com o site? contate-nos através do email ApexMotors@suporte.com'}</p>
              )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;