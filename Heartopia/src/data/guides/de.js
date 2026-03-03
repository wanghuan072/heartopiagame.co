export default [
    {
        id: 1,
        title: 'Heartopia Einsteiger-Guide',
        description: 'Ein kompletter Heartopia Anfänger-Guide: DG-Level, Hobbys, tägliche Routine, Stadt-Tipps, Geldverdienen und wie man Angeln, Gartenarbeit, Kochen, Vogelbeobachtung und Haustiere freischaltet.',
        publishDate: '2026-02-01',
        addressBar: 'beginner-guide',
        imageSrc: 'https://picsum.photos/800/450?random=guide1',
        imageAlt: 'Heartopia Einsteiger-Guide Cover',
        seo: {
            title: 'Heartopia Einsteiger-Guide | Heartopia Guide',
            description: 'Kompletter Starter-Guide für Heartopia: DG-Level, Hobbys, tägliche Routine, Stadt-Tipps und erste Schritte.',
            keywords: 'heartopia, anfänger, guide, tipps, DG level, hobbys, angeln, gartenarbeit',
        },
        detailsHtml: `
            <h2>Willkommen in Heartopia</h2>
            <p>Heartopia ist eine gemütliche Lebenssimulation, in der du dein Inselleben aufbaust: Angeln, Gärtnern, Kochen, Vögel und Insekten anfreunden und dich um Haustiere kümmern. Dieser Heartopia Einsteiger-Guide führt dich durch alles, was du in deinen ersten Tagen brauchst – vom Erhöhen deines DG-Levels über das Freischalten von Hobbys bis hin zu einer soliden täglichen Routine und Tipps zum frühen Geldverdienen.</p>
      
            <h2>DG-Level &amp; Fortschritt</h2>
            <p>Dein <strong>DG (Development Guild) Level</strong> ist der Schlüssel zum Freischalten des Spiels. Es eröffnet neue Hobbys, Gebiete und Funktionen. Ignoriere es nicht.</p>
            <h3>So steigerst du dein DG-Level</h3>
            <ul>
              <li><strong>Tägliche Quests</strong> — Schließe jeden Tag die 5 täglichen Quests ab, um Beitragsmedaillen zu erhalten.</li>
              <li><strong>Wöchentliche Quests</strong> — Erledige wöchentliche Ziele für größere Belohnungen.</li>
              <li><strong>Hauptstory</strong> — Treibe die Hauptgeschichte voran, um Medaillen zu verdienen und NPCs sowie Orte freizuschalten.</li>
            </ul>
            <p>Gib Beitragsmedaillen in der D.G. Mitglieder-Gilde aus, um aufzusteigen. Plane voraus: Einige Hobbys oder Funktionen benötigen ein bestimmtes DG-Level (z. B. die Zoohandlung ab Stufe 12).</p>
      
            <h2>Deine ersten Hobbys</h2>
            <p>Hobbys sind das Herzstück von Heartopia. Du beginnst mit einigen wenigen und schaltest weitere mit <strong>Hobby-Erweiterungstickets</strong> frei (erhältlich durch DG-Level-Belohnungen und Quests).</p>
            <h3>Angeln</h3>
            <p>Das Angeln wird früh im Tutorial freigeschaltet. Du fängst <a href="/wiki/fish">Fische</a> basierend auf Ort, Wetter und Tageszeit. Jeder Fisch hat eine Schattengröße (S, M, L oder spezial). Verbessere das Angel-Hobby, um seltenere Fische zu fangen und mehr zu verdienen. Verkaufe Fische oder verwende sie zum <a href="/wiki/recipes">Kochen</a>.</p>
            <h3>Gartenarbeit</h3>
            <p>Die Gartenarbeit wird ebenfalls während des Tutorials freigeschaltet. Du kannst <strong><a href="/wiki/crops">Nutzpflanzen</a></strong> und <strong><a href="/wiki/flowers">Blumen</a></strong> anbauen. Kaufe Samen, pflanze, bewässere und ernte sie. Ein höheres Gartenarbeits-Level schaltet mehr Samen und bessere Verkaufspreise frei. Schau im <a href="/wiki">Wiki</a> nach Wachstumszeiten und Sternenbewertungen.</p>
            <h3>Weitere Hobbys freischalten</h3>
            <p>Nutze Hobby-Erweiterungstickets, um <strong>Kochen</strong> (kombiniere Zutaten und <a href="/wiki/fish">Fische</a> für <a href="/wiki/recipes">Rezepte</a>), <strong><a href="/wiki/birds">Vogelbeobachtung</a></strong>, <strong><a href="/wiki/insects">Insektenfangen</a></strong> und später <strong>Katzenpflege</strong> sowie <strong>Hundepflege</strong> freizuschalten (nach Erreichen von DG Stufe 12 und einem Besuch in Frau Joans Zoohandlung – siehe <a href="/wiki/pets">Haustiere</a>). Setze Prioritäten nach deinem Geschmack – Kochen ist ideal für Profit und Quests.</p>
      
            <h2>Tägliche Routine (Was jeden Tag zu tun ist)</h2>
            <p>Eine einfache tägliche Routine sorgt für stetigen Fortschritt und Einnahmen.</p>
            <ul>
              <li><strong>Schließe 5 tägliche Quests ab</strong> — Höchste Priorität für Beitragsmedaillen und DG-Fortschritt.</li>
              <li><strong>Überprüfe den Planeten</strong> — Besuche den Planeten für Überraschungsgegenstände und Ressourcen.</li>
              <li><strong>Gieße Pflanzen und Blumen</strong> — Überspringe das nicht, sonst wachsen sie nicht rechtzeitig.</li>
              <li><strong>Angeln und Sammeln</strong> — Fülle deine Energie auf und verkaufe oder koche. Achte auf Wetter und Zeit für seltene <a href="/wiki/fish">Fische</a>; siehe <a href="/wiki/foraging">Sammeln</a> für Fundorte.</li>
              <li><strong>Sprich mit NPCs</strong> — Baue Beziehungen auf und aktiviere Quests oder Story-Elemente.</li>
              <li><strong>Besuche Läden</strong> — Kaufe Samen, Werkzeuge und prüfe das wechselnde Sortiment.</li>
              <li><strong>Koche, falls freigeschaltet</strong> — Nutze <a href="/wiki/fish">Fische</a> und <a href="/wiki/crops">Pflanzen</a> für <a href="/wiki/recipes">Rezepte</a>; viele Gerichte lassen sich gut verkaufen oder werden für Quests benötigt.</li>
            </ul>
      
            <h2>Stadt &amp; NPCs</h2>
            <p>Erkunde die Stadt und sprich mit jedem. NPCs geben Quests, verkaufen Gegenstände und schalten Funktionen frei. Frau Joan leitet die <a href="/wiki/pets">Zoohandlung</a> (Freischaltung ab DG Stufe 12). Andere Läden verkaufen Samen, Möbel und Erweiterungsgegenstände. Der Aufbau von Freundschaften mit Charakteren schaltet oft neue Dialoge und Belohnungen frei.</p>
      
            <h2>Tipps zum Geldverdienen für Anfänger</h2>
            <ul>
              <li><strong>Verkaufe Ernten mit hohen Sternen</strong> — Pflanzen und Fische mit mehr Sternen bringen mehr Gold. Konzentriere dich auf Qualität, sobald du kannst.</li>
              <li><strong>Koche und verkaufe Gerichte</strong> — Viele <a href="/wiki/recipes">Rezepte</a> bringen mehr ein als die rohen Zutaten. Nutze die <a href="/wiki/recipes">Wiki-Rezeptliste</a>, um profitable Gerichte zu finden.</li>
              <li><strong>Erledige Quests</strong> — Hauptstory, tägliche und wöchentliche Quests geben Münzen und Gegenstände.</li>
              <li><strong>Sammeln und verkaufen</strong> — <a href="/wiki/foraging">Sammelobjekte</a> (Pilze, Kräuter etc.) können verkauft oder für Energie genutzt werden.</li>
              <li><strong>Gib anfangs nicht zu viel aus</strong> — Spare für Saatgut-Nachschub und Hobby-Erweiterungstickets.</li>
            </ul>
      
            <h2>Codes einlösen</h2>
            <p>Heartopia gibt manchmal Codes für Gegenstände oder Währung aus. Prüfe die offiziellen Social-Media-Kanäle oder die In-Game-Mitteilungen. Nutze die <a href="/codes"><strong>Codes</strong></a>-Seite, um zu sehen, wie man sie einlöst und um die neuesten Heartopia-Codes zu finden.</p>
      
            <h2>Zusammenfassung der Kurztipps</h2>
            <ul>
              <li>Erledige immer deine 5 täglichen Quests.</li>
              <li>Steigere dein DG-Level und nutze Hobby-Erweiterungstickets für Kochen und andere Hobbys, die dir gefallen.</li>
              <li>Gieße täglich deine Pflanzen und plane die Ernte nach Wachstumszeit.</li>
              <li>Nutze das <a href="/wiki">Wiki</a> für <a href="/wiki/fish">Fisch-Standorte</a>, die <a href="/wiki/crops">Pflanzenliste</a> und <a href="/wiki/recipes">Rezepte</a>.</li>
              <li>Sprich mit NPCs und treibe die Hauptstory voran, um mehr Inhalte freizuschalten.</li>
            </ul>
            <p>Halte dich an diesen Heartopia Einsteiger-Guide für einen reibungslosen Start. Für <a href="/wiki/fish">Fische</a>, <a href="/wiki/crops">Pflanzen</a>, <a href="/wiki/recipes">Rezepte</a> und <a href="/wiki/achievements">Erfolge</a> nutze das <a href="/wiki">Heartopia Wiki</a> im Hauptmenü.</p>
          `,
    },
]