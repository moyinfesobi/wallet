import axios from "axios";

const REACT_APP_API_AUTH_URL = "https://crypto-wallet-server.mock.beeceptor.com";

// BALANCE 
export async function balance() {
    const response = await axios.get(`${REACT_APP_API_AUTH_URL}/api/v1/balance`,
     
    );
    return response.data;
}


//TRANSACTION

export async function transaction() {
    const response = await axios.get(`${REACT_APP_API_AUTH_URL}/api/v1/transactions`,
     
    );
    return response.data;
}