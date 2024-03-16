import axios from "axios";

const REACT_APP_API_AUTH_URL = "https://crypto-wallet-server.mock.beeceptor.com";

// LogIn

export async function login({username, password}) {
    const response =  await axios.post(
        `${REACT_APP_API_AUTH_URL}/api/v1/login`,
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
        `${REACT_APP_API_AUTH_URL}/api/v1/register`,
        {
            username,
            password,
            email
        },
        
    );

    return response.data;
}
