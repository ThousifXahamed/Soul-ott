import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjMxNjAwMTYzZjNlZGQyNGE5MmYyNDU3ZjYzZTY4NiIsInN1YiI6IjY1ZmZlMmU2NjJmMzM1MDE3ZDUyNDYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5fLfKRzObkZY9IzCG9zz4RMPqI4_Wv5IQ83Re9zx_yE'

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
