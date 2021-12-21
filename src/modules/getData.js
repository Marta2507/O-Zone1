const getData = () => {
    return fetch('https://test-df07c-default-rtdb.firebaseio.com/goods.json')
        .then(response => {
            return response.json();
        });
};

export default getData;