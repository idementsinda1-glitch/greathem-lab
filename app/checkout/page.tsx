"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function Checkout() {
  const { totalFCFA } = useCart();
  const [orderRef, setOrderRef] = useState('');

  useEffect(() => {
    // Génère une référence unique pour valider le paiement MoMo
    setOrderRef(`GRL-${Math.floor(100 + Math.random() * 900)}`);
  }, []);

  return (
    <div className="p-8 text-[#002776] max-w-md mx-auto">
      <h2 className="text-2xl font-black mb-6">Finaliser l'achat</h2>
      <div className="bg-gray-50 p-6 rounded-[2rem] border-2 border-dashed border-[#FF6B00] mb-6">
        <p className="text-xs font-bold uppercase text-gray-400">Montant à envoyer</p>
        <p className="text-3xl font-black">{totalFCFA} FCFA</p>
        
        <div className="mt-6 p-4 bg-white rounded-2xl shadow-sm">
          <p className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest">Référence Obligatoire</p>
          <p className="text-4xl font-black">{orderRef}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">
        Envoyez le montant exact par MTN MoMo au <strong>+242 XX XX XX XX</strong> en inscrivant <strong>{orderRef}</strong> dans le motif.
      </p>
      </div>
    );
  }
