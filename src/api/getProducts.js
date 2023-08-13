import axios from 'axios';

const getProducts = async () => {
    try {
        const config = {
            baseURL: 'https://5fc9346b2af77700165ae514.mockapi.io',
            url: '/products',
            method: 'GET'
        };

        const { data } = await axios(config);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default getProducts;