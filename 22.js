let user = {
    name: 'aakash',
    address: {
        personal: {
            city: 'ranchi',
            area: 'Doranda'
        },
        office: {
            city: 'bangalore',
            area: {
                landmark: 'baghmane'
            }
        }
    }
};

let finalObj = {};
const getUser = (user) => {
    for (let key in user) {
        console.log('key', key);
    }
}

getUser(user);


