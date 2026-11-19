import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';


const services = [
  ['Kunststof kozijnen', 'Nieuwe kozijnen die passen bij de uitstraling van uw woning, met moderne isolatiemogelijkheden.'],
  ['Kunststof deuren', 'Een stijlvolle voordeur of achterdeur, op maat gemaakt voor uw woning.'],
  ['Schuifpuien', 'Meer licht, ruimte en een mooie verbinding tussen binnen en buiten.'],
  ['Rolluiken', 'Extra comfort, privacy en bescherming tegen zonlicht.'],
  ['Horren', 'Geniet van frisse lucht zonder ongewenste insecten in huis.'],
  ['Meer mogelijkheden', 'Ook voor dakramen, gevelbekleding en dakkapellen kunt u bij ons terecht.'],
];
function App(){
  return <>
    <header className="nav">
      <a className="brand" href="#top"><span className="brand-mark">BK</span><span>BETUWE<span className="brand-light">-KOZIJNEN</span><small>LOKAAL VAKMANSCHAP</small></span></a>
      <nav><a href="#diensten">Onze diensten</a><a href="#over">Over ons</a><a href="#werkwijze">Werkwijze</a></nav>
      <a className="nav-cta" href="#offerte">Offerte aanvragen <span>↗</span></a>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow"><span className="dot"></span> KOZIJNEN & RENOVATIE IN DE BETUWE</p>
          <h1>Een nieuwe uitstraling.<br/><em>Een beter thuis.</em></h1>
          <p className="hero-text">Nederlandse VEKA kunststof kozijnen, vakkundig geleverd en gemonteerd. Persoonlijk contact met mensen uit de regio.</p>
          <div className="hero-actions"><a className="button button-light" href="#offerte">Vraag een offerte aan <span>↗</span></a><a className="text-link" href="#diensten">Ontdek onze diensten <span>↓</span></a></div>
          <div className="hero-trust"><span>✓ Lokale vakmensen</span><span>✓ Ervaren monteurs</span><span>✓ Van advies tot montage</span></div>
        </div>
        <div className="hero-visual" role="img" aria-label="Impressie van moderne woning met kozijnen">
          <div className="visual-window"><div className="pane pane-a"></div><div className="pane pane-b"></div><div className="pane pane-c"></div><div className="pane pane-d"></div></div>
          <div className="visual-caption"><span>DETAIL & KWALITEIT</span><strong>Mooi tot in het kozijn.</strong></div>
        </div>
        <div className="hero-bottom"><span>01 — 03</span><span className="hero-scroll">SCROLL OM TE ONTDEKKEN ↓</span><span>BETUWE · GELDERLAND</span></div>
      </section>
      <section className="intro section" id="over">
        <div className="section-tag">01 / WIE WIJ ZIJN</div><div className="intro-copy"><h2>Goed werk begint<br/>met <em>vertrouwen.</em></h2><p>Wij geloven in duidelijk advies, degelijk vakwerk en afspraken die u kunt vertrouwen. Als lokaal team helpen we u van het eerste gesprek tot de laatste afwerking bij het vernieuwen van uw woning.</p><a className="under-link" href="#offerte">Maak kennis met ons <span>↗</span></a></div>
      </section>
      <section className="services section" id="diensten">
        <div className="section-heading"><div className="section-tag">02 / WAT WE DOEN</div><h2>Alles voor een mooier<br/><em>en comfortabeler thuis.</em></h2><p>Van één kozijn tot een complete renovatie. We denken met u mee en verzorgen levering en montage.</p></div>
        <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s[0]}><div className="service-number">0{i+1}</div><div className="service-icon">{['▧','▤','▥','▦','◫','＋'][i]}</div><h3>{s[0]}</h3><p>{s[1]}</p><a href="#offerte" aria-label={`Offerte voor ${s[0]}`}>↗</a></article>)}</div>
      </section>
      <section className="local-band"><div><span className="eyebrow">GEWOON GOED GEREGELD</span><h2>Van hier. Voor uw huis.</h2><p>Met lokale mensen, ruime ervaring en korte lijnen. We komen bij u langs, luisteren naar uw wensen en maken een voorstel dat bij uw woning past.</p></div><a className="button button-outline" href="#offerte">Bespreek uw plannen <span>↗</span></a></section>
      <section className="steps section" id="werkwijze"><div className="section-tag">03 / ZO WERKEN WE</div><h2>In drie stappen<br/><em>naar nieuw kozijnwerk.</em></h2><div className="step-grid"><div><b>01</b><h3>Vertel ons uw wensen</h3><p>Stuur uw aanvraag en eventueel foto's van de huidige situatie.</p></div><div><b>02</b><h3>Persoonlijk advies</h3><p>We nemen contact op en bespreken de mogelijkheden voor uw woning.</p></div><div><b>03</b><h3>Vakkundige montage</h3><p>Na akkoord plannen we het werk en zorgen we voor een nette uitvoering.</p></div></div></section>
      <section className="quote-section" id="offerte"><div className="quote-copy"><div className="section-tag">04 / VRIJBLIJVENDE OFFERTE</div><h2>Uw plannen.<br/><em>Onze aanpak.</em></h2><p>Heeft u kozijnen, een deur, schuifpui of iets anders in gedachten? Vertel ons erover. Foto's meesturen mag — zo krijgen we alvast een beeld.</p><div className="contact-note"><span>✉</span><div><strong>Persoonlijk contact</strong><small>We bespreken samen de volgende stap.</small></div></div></div>
        <form className="quote-form" onSubmit={(e)=>{e.preventDefault(); alert('Dit formulier is een prototype. We koppelen het straks aan e-mail zodat aanvragen echt binnenkomen.')}}><h3>Vraag uw offerte aan</h3><p className="form-sub">Laat uw gegevens achter, dan nemen we contact op.</p><label>Waar bent u naar op zoek?</label><select required defaultValue=""><option value="" disabled>Selecteer een dienst</option><option>Kunststof kozijnen</option><option>Deuren</option><option>Schuifpui</option><option>Rolluiken</option><option>Horren</option><option>Dakramen</option><option>Gevelbekleding</option><option>Dakkapel</option><option>Anders / meerdere diensten</option></select><div className="form-row"><div><label>Naam</label><input placeholder="Uw naam" required/></div><div><label>Woonplaats</label><input placeholder="Bijv. Huissen"/></div></div><div className="form-row"><div><label>Telefoon</label><input type="tel" placeholder="06 ..." required/></div><div><label>E-mail</label><input type="email" placeholder="naam@email.nl" required/></div></div><label>Uw bericht</label><textarea rows="3" placeholder="Vertel kort wat u wilt laten vervangen of vernieuwen..."></textarea><label className="upload">＋ Foto's toevoegen <small>Foto's van de huidige situatie (optioneel)</small><input type="file" accept="image/*" multiple /></label><button className="button button-dark" type="submit">Verstuur aanvraag <span>↗</span></button><small className="form-disclaimer">Dit is momenteel een voorbeeldformulier. E-mailverwerking en foto-upload worden in de volgende bouwstap aangesloten.</small></form>
      </section>
      <section className="footer-cta"><div className="section-tag">BETUWE-KOZIJNEN</div><h2>Uw woning verdient<br/><em>goed vakwerk.</em></h2><a href="#offerte" className="button button-light">Neem contact op <span>↗</span></a></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">BK</span><span>BETUWE<span className="brand-light">-KOZIJNEN</span><small>LOKAAL VAKMANSCHAP</small></span></a><span>© {new Date().getFullYear()} Betuwe-Kozijnen</span><span>Website in ontwikkeling</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
