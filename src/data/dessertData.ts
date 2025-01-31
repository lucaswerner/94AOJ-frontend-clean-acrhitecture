export const cardDataList = [
  {
    data: {
      id: 1,
      image: [
        "https://files.menudino.com/cardapios/37486/232.jpg"
      ],
      title: "PUDIM DOS DEUSES",
      description: "Um delicioso Pudim dos deuses 130gr.",
      value: 14
    },
    onAdd: (data: object) => { console.log('Add', data) },
    onRemove: (data: object) => { console.log('Remove', data) },
    count: 0
  },
  {
    data: {
      id: 2,
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
  },
  {
    data: {
      id: 3,
      image: [
        "https://files.menudino.com/cardapios/37486/127.jpg",
      ],
      title: "SWEET BURGER",
      description: "Mini pão brioche bem fofinho, creme de avelã cremoso e pedaços de morango fresquinhos. Finalizado com leite ninho.",
      value: 14
    },
    onAdd: (data: object) => { console.log('Add', data) },
    onRemove: (data: object) => { console.log('Remove', data) },
    count: 0
  }
];
