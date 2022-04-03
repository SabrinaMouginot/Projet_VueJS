<template>
  <div>
    <div><p>plop</p></div>

    <div class="img">
      <img src="carte.jpg" alt="La carte du monde" />
    </div>
    <div class="container">
      <section id="enTete">
        <button>
          <a href="images.html" target="_blank">Démarrer</a>
        </button>

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
          <img src="guerriere.jpg" alt="illustration" />
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
    <section>
      <footer>
        <a href="../generateur_de_cv_cansu-main/quisommesnous.html"
          >Qui sommes nous?</a
        >
        <a href="../Mentions_Legales-main/Conditions_Generales.html"
          >Mentions legales</a
        >
        <a href="../theme-marem-main/login.html">Connectez-vous</a>
      </footer>
    </section>
  </div>
</template>