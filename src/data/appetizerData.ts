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
            "https://files.menudino.com/cardapios/37486/19.jpg",
          ],
          title: "BATATA TRADICIONAL",
          description: "Batatas sequinhas de 7mm! :)",
          value: 12
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
            "https://files.menudino.com/cardapios/37486/161.jpg"
          ],
          title: "ONION RINGS",
          description: "Anéis de cebola crocantes! :)",
          value: 13
      },
      onAdd: (data: object) => { console.log('Add', data) },
      onRemove: (data: object) => { console.log('Remove', data) },
      count: 0
  }
];
