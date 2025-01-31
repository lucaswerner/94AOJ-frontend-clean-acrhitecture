export const cardDataList = [
    {
        data: {
            id: 1,
            image: [
                "https://files.menudino.com/cardapios/37486/160.jpg"
            ],
            title: "CHICKEN SUPREME",
            description: "10 unidades de franguinhos empanados + molho tropical. :)",
            value: 40
        },
        onAdd: (data: object) => { console.log('Add', data) },
        onRemove: (data: object) => { console.log('Remove', data) },
        count: 0
    },
    {
        data: {
            id: 2,
            image: [
                "https://files.menudino.com/cardapios/37486/30.jpg",
            ],
            title: "COCA COLA",
            description: "Lata - 350ml.",
            value: 6
        },
        onAdd: (data: object) => { console.log('Add', data) },
        onRemove: (data: object) => { console.log('Remove', data) },
        count: 0
    },
    {
        data: {
            id: 3,
            image: [
                "https://files.menudino.com/cardapios/37486/21.jpg",
            ],
            title: "BATATA CHEDDAR E BACON",
            description: "Batatas sequinhas de 7mm, cobertas com delicioso creme de cheddar e cubinhos de bacon! :) ",
            value: 20
        },
        onAdd: (data: object) => { console.log('Add', data) },
        onRemove: (data: object) => { console.log('Remove', data) },
        count: 0
    },
    {
        data: {
            id: 4,
            image: [
                "https://files.menudino.com/cardapios/37486/156.jpg",
            ],
            title: "SWEET FRIES",
            description: "Batatas sequinhas de 7mm cobertas com um delicioso creme de avelã e paçoca... Você vai se surpreender!",
            value: 22
        },
        onAdd: (data: object) => { console.log('Add', data) },
        onRemove: (data: object) => { console.log('Remove', data) },
        count: 0
    }
];
