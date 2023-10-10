import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Logica from "../components/Logica/Logica";

interface RouterProps {
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

const Router: React.FC<RouterProps> = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route index element={<Home />} />
                <Route
                    path="/Calculadora"
                    element={<Logica />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
