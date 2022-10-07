// Access Value
const user = [
    {id:1, name:"abul", job: "doctor"}
]
console.log(user[0].job);

const data = {
    count: 5000,
    data: [
        {id: 1, name:'babul',job:'leader'},
    ]
}
console.log(data.data[0].job);

// Access value of nested object
const scientist = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '34/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}
console.log(scientist.address?.street?.third);
// The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.