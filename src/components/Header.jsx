import './Header.css';
// Adicionei os ícones que estavam faltando no import aqui:
import { Bell, Zap, Tag, Smartphone, Info, Store } from 'lucide-react';

export function Header(){
    return(
        <header className='apex-header'>
            <div className="logo">
                <Store size={20} /> {/* Ícone para a Loja ou logo */}
                APEX motors
            </div>

            <nav className="nav-menu">
                {/* Agora os ícones abaixo funcionam porque foram importados */}
                <div className="nav-item"> <Tag size={20} />Minhas compras</div>
                <div className="nav-item"> <Smartphone size={20} />Consultoria</div>
                <div className="nav-item"> <Info size={20} />Ajuda</div>
            </nav>
            
            <div className="user-info">
                <h3>Bem-vindo, <span className="destaque">Ricardo</span></h3>
                <p>Status: Online</p>
            </div>

            <div className="header-actions">
                <div className="badge">
                    <Zap size={14}/>
                    <span>Cliente</span>
                </div>
                <button className="notificacoes">
                    <Bell size={20}/>
                </button>
            </div>
        </header>
    )
}