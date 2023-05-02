import axios from 'axios';

const url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

export default function getBranches() {
    return axios.get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}
