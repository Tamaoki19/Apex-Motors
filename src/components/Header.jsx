import './Header.css';
import { useState } from "react";
import { Search, Bell, Zap, Tag, Smartphone, Info } from 'lucide-react';
import { carrosData } from '../data/carros';

export function Header({ search, setSearch, openSearch, setOpenSearch, activeTab, setActiveTab }) {
    return ( 
        <header className='apex-header'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <div className="logo">Apex Motors</div>
                <div className="user-info">
                    <h3>Bem-vindo, <span className="destaque">Ricardo</span></h3>
                </div>
            </div>

            <nav className="nav-menu">
                <div className="nav-item">
                    <button onClick={() => setOpenSearch(!openSearch)}>
                        <Search size={20} />
                    </button>

                    {openSearch && (
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar carro..."
                            autoFocus
                        />
                    )}
                </div>
                <div className={`nav-item ${activeTab === 'dash' ? 'active' : ''}`} onClick={() => setActiveTab('dash')}> <Tag size={20} />Minhas compras</div>
                <div className={`nav-item ${activeTab === 'consultoria' ? 'active' : ''}`} onClick={() => setActiveTab('consultoria')}> <Smartphone size={20} />Consultoria</div>
                <div className={`nav-item ${activeTab === 'ajuda' ? 'active' : ''}`} onClick={() => setActiveTab('ajuda')}> <Info size={20} />Ajuda</div>
            </nav>
            <div className="header-actions">
                <div className="badge">
                    <Zap size={14} />
                    <span>VIP</span>
                </div>
                <button className="notificacoes">
                    <Bell size={20} />
                </button>
            </div>
        </header>
    ); 
} 