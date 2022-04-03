<template>
  <div>
    <div class="img">
      <img src="../assets/carte.jpg" alt="La carte du monde" />
    </div>
    <div class="container">
      <section id="enTete">
        <imagesGo v-if="imageAffichageBouton == true" />
        <button v-on:click="onClick">Démarer</button>

        <p>S'inscrire gratuitement :</p>
        <!-- Insertion de formulaire -->
        <form method="post" action="index.html">
          <label for="e-mail"></label>
          Votre adresse e-mail <input type="text" name="name" id="name" />
          <input type="submit" value="m'inscrire" />
        </form>
        <!-- ici on va pouvoir être redirigé vers le bas de page section en savoir plus -->
        <button class="EnSavoirPlus">
          <a href="#savoir_plus">En savoir plus</a>
        </button>
        <h2>Comment ça marche, les 8 Fantastiques ?</h2>
        <p>Nous simplifions le parcours à un niveau inégalé</p>
      </section>

      <section id="Parcours">
        <div class="un">
          <h1><button class="h1">1</button></h1>
          <p>
            Créer moi-même mon CV et le télécharger en PDF, ou en version web
          </p>
        </div>
        <div class="un">
          <h1><button class="h1">2</button></h1>
          <p>Me faire remarquer en un seul clic</p>
        </div>
        <div class="un">
          <h1><button class="h1">3</button></h1>
          <p>
            Trouver des offres d’emploi qui me correspondent, postuler et
            m’organiser
          </p>
        </div>
      </section>

      <div class="accueil">
        <h1>Les 8 Fantastiques</h1>
        <div class="slogan">
          <p>"You can't save the world alone."</p>
        </div>
        <div class="photo">
          <img src="../assets/guerriere.jpg" alt="illustration" />
        </div>
        <div class="presentation">
          <div id="savoir_plus">
            <h2>En savoir plus :</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, optio deleniti! Aliquam fugiat expedita, accusantium
              quae quasi eligendi ex perspiciatis quas vel inventore repudiandae
              dicta sunt perferendis cum blanditiis veritatis? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quo vero, soluta sunt
              quibusdam cumque cupiditate tempore molestiae quas natus dolorum
              eveniet recusandae! Voluptates sed dolorum at sunt numquam
              accusantium harum.
            </p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, optio deleniti! Aliquam fugiat expedita, accusantium
            quae quasi eligendi ex perspiciatis quas vel inventore repudiandae
            dicta sunt perferendis cum blanditiis veritatis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quo vero, soluta sunt
            quibusdam cumque cupiditate tempore molestiae quas natus dolorum
            eveniet recusandae! Voluptates sed dolorum at sunt numquam
            accusantium harum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, optio deleniti! Aliquam fugiat expedita, accusantium
            quae quasi eligendi ex perspiciatis quas vel inventore repudiandae
            dicta sunt perferendis cum blanditiis veritatis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quo vero, soluta sunt
            quibusdam cumque cupiditate tempore molestiae quas natus dolorum
            eveniet recusandae! Voluptates sed dolorum at sunt numquam
            accusantium harum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagesGo from "./imagesGo.vue";

export default {
  name: "App",
  components: {
    imagesGo,
  },
  data() {
    return {
      imageAffichageBouton: false,
    };
  },
  methods: {
    onClick: function () {
      this.imageAffichageBouton = true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Patrick+Hand&family=Shizuru&display=swap");

.container {
  margin: 0 10% 0 10%;
  background-color: skyblue;
  font-family: "patrick Hand", "Luxurious roman", "cursive";
}
button {
  width: 85%;
  height: 200px;
  background-color: gray;
  font-size: 3em;
  border-radius: 15%;
}
button:hover {
  background-color: #771505;
  color: #f0c77a;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  /**transition modifier la valeur d'une propriété CSS dans le temps**/
  /**Ease-in-out : la transition commence et se finit lentement**/
}
img {
  width: 100%;
  height: 500px;
}
#enTete {
  text-align: center;
}
.EnSavoirPlus {
  color: rgb(58, 59, 100);
  font-size: 50px;
}
#Parcours {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.un {
  width: 33%;
  text-align: center;
  padding: 0 5% 0 5%;
  margin-top: -80px;
}
.un p {
  margin-top: -50px;
  margin-bottom: 60px;
}
.h1 {
  font-family: "shizuru", "Luxurious roman", "patrick Hand", "cursive";
  color: rgb(19, 16, 18);
  font-size: 1em;
}

.slogan {
  padding-left: 2%;
  font-size: 30px;
}

.accueil {
  color: black;
  text-align: center;
}
.accueil img {
  border-radius: 50%;
  width: 50%;
}
.un h1 {
  font-size: 100px;
  color: rgb(255, 111, 200);
}
.slider {
  width: fit-content;
  height: fit-content;
}
.slider_nav {
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-right: 5px;
  }
}
</style>
