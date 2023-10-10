import { useState, useEffect } from 'react'
import Products from '../Products/Products'

const Logica = () => {
    const [seoChecked, setSeoChecked] = useState(false);
    const [adsChecked, setAdsChecked] = useState(false);
    const [webChecked, setWebChecked] = useState(false);
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState(1);




    const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeoChecked(e.target.checked);
    };

    const handleAdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdsChecked(e.target.checked);
    };

    const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWebChecked(e.target.checked);
    };

    const handleMinusPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handlePlusPage = () => {
        setPage(page + 1);
    };

    const handleMinusLang = () => {
        if (language > 1) {
            setLanguage(language - 1);
        }
    };
    const handlePlusLang = () => {
        setLanguage(language + 1);
    };


    // Calcular el valor total dinámicamente
    const total = (seoChecked ? 300 : 0) + (adsChecked ? 400 : 0) + (webChecked ? 500 + (page * language * 30) : 0);


    // Actualizar el valor del contexto cuando cambie el valor total
    useEffect(() => {

    }, [total]);

    return (
        <>

            
                <Products handleSeoChange={handleSeoChange} handleAdsChange={handleAdsChange} handleWebChange={handleWebChange} seoChecked={seoChecked} adsChecked={adsChecked} webChecked={webChecked} total={total} handleMinusPage={handleMinusPage} handlePlusPage={handlePlusPage} handleMinusLang={handleMinusLang} handlePlusLang={handlePlusLang} page={page} language={language} />
            

        </>
    )

}

export default Logica;


