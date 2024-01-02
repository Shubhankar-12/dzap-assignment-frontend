import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConverterForm.css';
import { BeatLoader } from 'react-spinners';

const ConverterForm = () => {
    const [cryptos, setCryptos] = useState([]);
    const [sourceCrypto, setSourceCrypto] = useState('');
    const [amount, setAmount] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('usd');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://dzap-backend-ysim.onrender.com/api/topCryptos')
            .then(response => setCryptos(response.data))
            .catch(error => console.error(error));
    }, []);

    const validateForm = () => {
        if (!sourceCrypto || !amount || !targetCurrency) {
            setError('Please fill in all fields');
            return false;
        }

        if (isNaN(amount) || parseFloat(amount) <= 0) {
            setError('Please enter a valid amount');
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsDisabled(true);

        axios.get('https://dzap-backend-ysim.onrender.com/api/convert', {
            params: { sourceCrypto, amount, targetCurrency },
        })
            .then(response => {
                setConvertedAmount(response.data.convertedAmount);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setIsDisabled(false);
            });
    };

    return (
        <div className="converter-form-container">
            <form>
                <p className='label'>Source Cryptocurrency</p>
                <select onChange={(e) => setSourceCrypto(e.target.value)} value={sourceCrypto} required>
                    <option value="" disabled>Select a crypto-currency</option>
                    {cryptos.map((crypto) => (
                        <option key={crypto.id} value={crypto.id}>
                            {crypto.name}
                        </option>
                    ))}
                </select>
                <br />
                <p className='label'>Amount</p>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <br />
                <p className='label'>Target Currency</p>
                <select onChange={(e) => setTargetCurrency(e.target.value)} value={targetCurrency}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                    <option value="gbp">GBP</option>
                    <option value="jpy">JPY</option>
                    <option value="cad">CAD</option>
                    <option value="aud">AUD</option>
                    <option value="chf">CHF</option>
                </select>
                <br />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" onClick={handleSubmit}>
                    {isDisabled ?
                        (<BeatLoader size={7} color='#fff' />)
                        : "Convert"
                    }
                </button>
            </form>
            {convertedAmount !== null && (
                <div className="result-container">
                    <p>Converted Amount: {convertedAmount}</p>
                </div>
            )}
        </div>
    );
};

export default ConverterForm;
