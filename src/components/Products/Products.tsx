import React from 'react';
import Panel from '../Panel/Panel';
import { Link } from 'react-router-dom';

interface ProductsProps {
  seoChecked: boolean;
  adsChecked: boolean;
  webChecked: boolean;
  handleSeoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWebChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMinusPage: () => void;
  handlePlusPage: () => void;
  handleMinusLang: () => void;
  handlePlusLang: () => void;
  page: number;
  language: number;
  total: number;
}

const Products: React.FC<ProductsProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>SEO 300€</h2>
              </div>
              <label htmlFor="seo">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={props.handleSeoChange} checked={props.seoChecked} className="checkbox checkbox-secondary" />
              </label>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>ADS 400€</h2>
              </div>
              <label htmlFor="ads">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={props.handleAdsChange} checked={props.adsChecked} className="checkbox checkbox-secondary" />
              </label>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <h2 className='text-base-100'>WEB 500€</h2>
              </div>
              <label htmlFor="web">
                <span className="label-text text-base-100 m-3 align-top">Comprar</span>
                <input type="checkbox" onChange={props.handleWebChange} checked={props.webChecked} className="checkbox checkbox-secondary" />
              </label>
              {props.webChecked && <Panel page={props.page} language={props.language} handleMinusPage={props.handleMinusPage} handlePlusPage={props.handlePlusPage}
                handleMinusLang={props.handleMinusLang} handlePlusLang={props.handlePlusLang} />}
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl py-0 m-1">
            <div className="card-body">
              <div className="card-actions justify-center">
                <p className='text-base-100 text-end'>Total: {props.total}</p>
              </div>
            </div>
          </div>
          <Link to='/' className="btn btn-neutral">Home</Link>
        </div>
      </div>
    </div>
  )
};

export default Products;
