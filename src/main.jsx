import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// src/index.jsx or src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FrequentAsk } from './components/FrequentAsk.jsx';
import TrendingNow from './components/TrendingNow.jsx';
import Footer from './components/Footer.jsx';
import MoreReason from './components/MoreReason.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TrendingNow />
    <MoreReason />
    <FrequentAsk />
    <Footer />
  </React.StrictMode>,
)
