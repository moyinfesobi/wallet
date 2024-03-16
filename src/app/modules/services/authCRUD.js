import axios from "axios";

const REACT_APP_API_URL = "https://crypto-wallet-server.mock.beeceptor.com";

// LogIn

export async function login({username, password}) {
    const response =  await axios.post(
        `${REACT_APP_API_URL}/api/v1/login`,
        {
            username,
            password,
        },
        
    );

    return response.data;
}

// signup
export async function signup({username, password,email}) {
    const response =  await axios.post(
        `${REACT_APP_API_URL}/api/v1/register`,
        {
            username,
            password,
            email
        },
        
    );

    return response.data;
}

// BALANCE 
export async function balance() {
    const response = await axios.get(`${REACT_APP_API_URL}/api/v1/balance`,
     
    );
    return response;
}


//TRANSACTION

export async function transaction() {
    const response = await axios.get(`${REACT_APP_API_URL}/api/v1/transactions`,
     
    );
    
	return response.transaction;
    
}