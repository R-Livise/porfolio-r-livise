import NavbarOption from "./components/navbar-option.js"
import WorkPreview from "./components/work-preview.js"


const Template = async () => {
    customElements.define('navbar-option', NavbarOption);
    customElements.define('work-preview', WorkPreview);
    const view = /* vue-html*/`
  <navbar-option items-option="3" size-change="850px">
    <span slot="logo"><i class="icon-menu"></i></span>
    <span slot="title">
      <p>R-Livise</p>
    </span>
    <li tabindex="0" slot="option-1" data-redirect="info">
      <span class="nav-option"><i class="icon-info"></i></span
      ><span> Informacion</span>
    </li>
    <li tabindex="0" slot="option-2" data-redirect="work">
      <span class="nav-option"><i class="icon-work"></i></span
      ><span>Trabajos</span>
    </li>
    <li tabindex="0" slot="option-3" data-redirect="contact">
      <span class="nav-option"><i class="icon-phone"></i></span
      ><span>Contacto</span>
    </li>
  </navbar-option>
  <section class="info" id="info">
    <div class="info__container">
      <div class="info__container--text">
        <h2 class="info__title">Hola</h2>
        <div class="info__context">
          <p>
            Hola soy Rafael Livise, programador con mas de 3 años de
            experiencia en tegnologias web, estoy en constante aprendizaje
            mediante documentacion y cursos en linea.
          </p>
          <p>
            He participado en concursos de progamanción con mis conpañeros
            en la carrera de Ingenieria de Sitemas (<a
              href="https://utpsedearequipa.edu.pe/noticias/alumnos-utp-destacan-en-hackathon-de-oracle-apex-a-nivel-latinoamerica"
              >APEX</a
            >) , como actualmente soy como freelance.
          </p>
          <p>
            Esta pagina hecha en JS vanilla concentra mis practicas, las
            cuales ire actualizando.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="work" id="work">
    <div class="work__container" id="work-container">
      
    </div>
  </section>
  <section class="contact" id="contact">
    <div class="contact__container">
      <form class="contact__container--form">
        <h3>Enviame tu correo para contactarnos.</h3>
        <br />
        <label for="email">Email:</label>
        <div>
          <input type="email" id="email"required />
        </div>
        <br />
        <label for="message">Mensaje:</label>
        <div>
          <textarea
            id="message"
            rows="6"
            required
          ></textarea>
        </div>
        <br />
        <button type="sumbit" class="contact__button">Enviar</button>
      </form>
      <div class="contact__container--contact">
        <a
          href="https://www.linkedin.com/in/rafael-livise-larico-97b323151/"
          class="social-link"
          target="_blank"
          ><span><i class="icon-linkedin"></i></span
        ></a>
        <a
          href="https://twitter.com/rflivise"
          class="social-link"
          target="_blank"
          ><span><i class="icon-twitter"></i></span
        ></a>
        <a
          href="https://github.com/R-Livise"
          class="social-link"
          target="_blank"
          ><span><i class="icon-github"></i></span
        ></a>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footer__container">
      <p>Rafael Livise Larico @ 2020</p>
    </div>
  </footer>
    `;
    return view;
};

export default Template;