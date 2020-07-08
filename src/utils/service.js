import axios from 'axios';

const API_KEY='01352df94e0c46e9bb394a793b8c1a28';

const NewsService = {

    async getNewsByCountry(countryName) {
        const encodedURI = window.encodeURI(`/proxy/v2/top-headlines?country=${countryName}&apiKey=${API_KEY}`);

        try {
            return await axios({
                method: "GET",
                url: encodedURI,
                "headers": {
                    'Content-Type': "application/json",
                    "SERVER": "NEWS_SERVER"
                }
            }).then(function (response) {
                return response.data
            })
        } catch (error) {
            console.error(error)
        }
    },
    async getSearchResult(searchParam) {
        const encodedURI = window.encodeURI(`/proxy/v2/top-headlines?q=${searchParam.searchValue}&apiKey=${API_KEY}`);

        try {
            return await axios({
                method: "GET",
                url: encodedURI,
                "headers": {
                    'Content-Type': "application/json",
                    "SERVER": "NEWS_SERVER"
                }
            }).then(function (response) {
                return response.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export default NewsService;