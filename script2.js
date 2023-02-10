const fetch = require('node-fetch');

const getPeoplePromise = _fetch => {
    return _fetch('http://swapi.py4e.com/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

const getPeople = async (_fetch) => {
    const getRequest = await _fetch('http://swapi.py4e.com/api/people');
    const data = await getRequest.json();

    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeoplePromise,
    getPeople
}