import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../MyContext/MyContext';

const Products: React.FC = () => {
    let valorContexto = useContext(MyContext);
    const [seoChecked, setSeoChecked] = useState(false);
    const [adsChecked, setAdsChecked] = useState(false);
    const [webChecked, setWebChecked] = useState(false);

    const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeoChecked(e.target.checked);
    };

    const handleAdsChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setAdsChecked(e.target.checked);
    };

    const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWebChecked(e.target.checked);
    };

    // Calcular el valor total dinámicamente
    const total = (seoChecked ? 300 : 0) + (adsChecked ? 400 : 0) + (webChecked ? 500 : 0);

    // Actualizar el valor del contexto cuando cambie el valor total
    useEffect(() => {
        valorContexto = total;
    }, [total]);

    return (
        <div>
            <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <h2 className='text-base-100'>SEO 300€</h2>
                    </div>
                    <label htmlFor="">
                    <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                            <input type="checkbox" onChange={handleSeoChange} checked={seoChecked} className="checkbox checkbox-secondary" />
                    </label>
                </div>
            </div>
            <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <h2 className='text-base-100'>ADS 400€</h2>
                    </div>
                    <label htmlFor="">
                    <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                            <input type="checkbox" onChange={handleAdsChange} checked={adsChecked} className="checkbox checkbox-secondary" />
                    </label>
                </div>
            </div>
            <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <h2 className='text-base-100'>WEB 500€</h2>
                    </div>
                    <label htmlFor="">
                    <span className="label-text  text-base-100 m-3 align-top">Comprar</span>
                            <input type="checkbox" onChange={handleWebChange} checked={webChecked} className="checkbox checkbox-secondary" />
                    </label>
                </div>
            </div>
            <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <p className='text-base-100'>Total: {total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
