export default [
    {
        id: 1,
        title: 'Heartopia Einsteiger-Guide',
        description: 'Ein kompletter Heartopia Anfänger-Guide: DG-Level, Hobbys, tägliche Routine, Stadt-Tipps, Geldverdienen und wie man Angeln, Gartenarbeit, Kochen, Vogelbeobachtung und Haustiere freischaltet.',
        publishDate: '2026-03-04',
        addressBar: 'beginner-guide',
        imageSrc: '/images/guide/guide01-01.webp',
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
    {
      id: 2,
      title: 'Heartopia Guide: Tägliche & wöchentliche Quests',
      description:
        'Wie tägliche und wöchentliche Quests sowie die Hauptstory Beitragsmedaillen liefern und dein DG-Level voranbringen—mit Checkliste, damit du nicht hinterherhinkst.',
      publishDate: '2026-03-23',
      addressBar: 'daily-weekly-quests-dg-medals',
      imageSrc: '/images/guide/guide01-01.webp',
      imageAlt: 'Heartopia tägliche Quests und Beitragsmedaillen',
      seo: {
        title: 'Heartopia Tägliche & Wöchentliche Quests | Beitragsmedaillen & DG-Level',
        description:
          'Heartopia Quest-Guide: Erledige 5 tägliche Quests, wöchentliche Ziele und die Hauptstory für Beitragsmedaillen. Gib sie in der D.G.-Gilde aus, um das DG-Level zu erhöhen.',
        keywords: 'heartopia, tägliche quests, wöchentliche quests, beitragsmedaillen, dg level, development guild',
      },
      detailsHtml: `
            <h2>Warum Quests in Heartopia wichtig sind</h2>
            <p>Dein <strong>DG-Level (Development Guild)</strong> schaltet Hobbys, Gebiete und Systeme frei. <strong>Beitragsmedaillen</strong> gibst du in der <strong>D.G. Mitglieder-Gilde</strong> aus, um das DG-Level zu steigern. Zuverlässige Quellen sind <strong>tägliche Quests</strong>, <strong>wöchentliche Quests</strong> und die <strong>Hauptstory</strong>—derselbe Fortschrittszyklus wie im <a href="/guide/beginner-guide">Einsteiger-Guide</a>.</p>

            <h2>Tägliche Quests (5 pro Tag)</h2>
            <p>Heartopia bietet dir jeden Tag <strong>fünf tägliche Quests</strong>. Sie sind eine der besten Quellen für <strong>Beitragsmedaillen</strong> zum DG-Aufstieg. Mach sie zur Priorität, bevor du Energie in optionale Aktivitäten steckst: Sie setzen sich täglich zurück—was du auslässt, holst du erst im nächsten Zyklus nach.</p>
            <ul>
              <li><strong>Quest-Menü beim Einloggen prüfen</strong> — Nimm die fünf Tagesaufgaben und erledige sie sinnvoll (z. B. Stadtbesuche mit Angeln oder Erledigungen kombinieren).</li>
              <li><strong>Mit der Routine verbinden</strong> — Viele Ziele überschneiden sich mit Gießen, Angeln, NPC-Gesprächen und Kochen—wie im <a href="/guide/beginner-guide">Einsteiger-Guide</a> beschrieben.</li>
            </ul>

            <h2>Wöchentliche Quests</h2>
            <p>Neben den Dailies gibt es <strong>wöchentliche Ziele</strong> mit <strong>größeren Belohnungen</strong>. Sie dauern länger—verteile sie über die Woche statt alles auf den letzten Tag zu schieben. Wöchentlicher und täglicher Fortschritt ergänzen sich und versorgen dich mit Medaillen und weiteren Drops.</p>

            <h2>Hauptstory</h2>
            <p>Die <strong>Hauptgeschichte</strong> vergibt <strong>Beitragsmedaillen</strong> und hilft, <strong>NPCs und Orte freizuschalten</strong>. Wenn sich das DG-Level träge anfühlt, spiel die Story voran—neue Figuren und Gebiete bringen meist mehr Quests und Shops. Die <strong>Zoohandlung von Mrs. Joan</strong> öffnet ab <strong>DG Stufe 12</strong>, siehe unsere <a href="/wiki/pets">Haustiere</a>-Seite.</p>

            <h2>Beitragsmedaillen sinnvoll einsetzen</h2>
            <p>In der <strong>D.G. Mitglieder-Gilde</strong> tauschst du Beitragsmedaillen gegen <strong>DG-Levelaufstiege</strong>. Plane, was du als Nächstes brauchst: Höheres DG schaltet <strong>Hobby-Erweiterungstickets</strong> und Meilenstein-Features (Haustiere, weitere Hobbys) frei. Konstantes Leveln schlägt Medaillen horten ohne Plan.</p>

            <h2>Bezug zu den Hobbys</h2>
            <p>DG-Belohnungen und Quests liefern auch <strong>Hobby-Erweiterungstickets</strong> für <strong>Kochen</strong>, <strong><a href="/wiki/birds">Vogelbeobachtung</a></strong>, <strong><a href="/wiki/insects">Insektenfang</a></strong> und Haustierpfade. Danach helfen dir <a href="/wiki/fish">Fische</a>, <a href="/wiki/crops">Pflanzen</a> und <a href="/wiki/recipes">Rezepte</a> im <a href="/wiki">Wiki</a>.</p>

            <h2>Kurz-Checkliste</h2>
            <ul>
              <li>Alle <strong>5 täglichen Quests</strong> vor dem Ausloggen erledigen.</li>
              <li><strong>Wöchentliche</strong> Ziele im Blick behalten und stückweise abarbeiten.</li>
              <li>Bei stockenden Medaillen oder Freischaltungen die <strong>Hauptstory</strong> voranbringen.</li>
              <li>Medaillen in der <strong>D.G. Mitglieder-Gilde</strong> einlösen, damit das DG-Level weitersteigt.</li>
            </ul>

            <h2>Mehr zu Heartopia</h2>
            <p>Neu dabei? Lies den vollen <a href="/guide/beginner-guide">Heartopia Einsteiger-Guide</a>. Für Codes und zeitlich begrenzte Belohnungen: <a href="/codes">Codes</a>. Sammler finden <a href="/wiki/achievements">Erfolge</a> im <a href="/wiki">Heartopia Wiki</a>.</p>
          `,
    },
]