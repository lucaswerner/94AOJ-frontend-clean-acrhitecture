<template>
    <div class="home-container">
      <div class="home-content">
        <h1 class="title">The Mixed Burger</h1>
        <p class="subtitle">O melhor hambúrguer artesanal da região</p>
        <img class="main-image" src="../../../../assets/lanche-background.png" alt="Lanche Background?">
        <p class="subtitle-2"><a>Conheça Nosso Cardápio</a></p>
        <div class="carousel">
            <slide>
              <img class="carousel-image" src="../../../../assets/double-burger-com-batata.jpg" alt="Double Burger com Batata">
            </slide>
            <slide>
              <img class="carousel-image" src="../../../../assets/smash-burger.jpg" alt="Smash Burger">
            </slide>
            <slide>
              <img class="carousel-image" src="../../../../assets/nuggets-vegano.jpg" alt="Nuggets Vegano">
            </slide>
            <slide>
              <img class="carousel-image" src="../../../../assets/bebidas.jpeg" alt="Bebidas">
            </slide>
            <slide>
              <img class="carousel-image" src="../../../../assets/sobremesa.jpg" alt="Sobremesa">
            </slide>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
  background-color: #050205;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../../../assets/background.jpg');
  background-size: cover; 
  background-position: center;
}

.home-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 70px;
  border-radius: 10px;
}

.title {
    font-style: normal;
    font-weight: 500;
    color: #000;
    font-size: 50px;
    letter-spacing: 5px;
    line-height: 60px;
    margin-bottom: 20px;
    color: #233d58;
}

.subtitle {
    color: #000;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 40px;
    color: #233d58;
}

.main-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.menu-link {
  margin-bottom: 20px;
}

.subtitle-2 {
    padding-top: 20px;
    color: #000;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 40px;
    color: #233d58;
}

.carousel {
  display: flex;
  gap: 10px;
}

.carousel-image {
  width: 100%;
  max-height: 100px; /* Defina a altura desejada */
  max-width: 170px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover; /* Para garantir que a imagem se ajuste ao contêiner */
}

.carousel img:hover {
  transform: scale(1.05);
}

.menu-link p {
  font-size: 1.2em;
  color: #495057;
}

</style>