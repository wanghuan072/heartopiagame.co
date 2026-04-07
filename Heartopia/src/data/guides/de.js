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
      imageSrc: '/images/guide/guide02-01.webp',
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
    {
      id: 3,
      title: 'So nutze ich Karte & Wiki in Heartopia (Spieler-Workflow)',
      description:
        'Ein praxisnaher Spieler-Workflow: Routen planen, Sammelziele verfolgen und unnötige Wege vermeiden – mit interaktiver Karte, Wiki-Listen und Codes-Seite.',
      publishDate: '2026-03-23',
      addressBar: 'interactive-map-wiki-player-workflow',
      imageSrc: '/images/guide/guide03-01.webp',
      imageAlt: 'Heartopia interaktive Karte und Wiki – Spieler-Guide',
      seo: {
        title: 'Heartopia Interaktive Karte & Wiki | Spieler-Workflow',
        description:
          'Nutze interaktive Karte und Wiki zusammen, um Routen zu planen, Sammelziele zu tracken und Zeit zu sparen. Praktische Checklisten und Links.',
        keywords: 'heartopia, interaktive karte, wiki, guide, tipps, route, sammeln, codes',
      },
      detailsHtml: `
            <h2>Warum ich Map + Wiki kombiniere</h2>
            <p>Beim Spielen möchte ich unnötige Wege vermeiden – diese Sessions, in denen man “einfach losläuft” und am Ende vergisst, was man eigentlich farmen wollte. Am besten klappt das, wenn ich die <a href="/map"><strong>Interaktive Karte</strong></a> mit dem <a href="/wiki"><strong>Wiki</strong></a> kombiniere: Die Karte beantwortet <em>wohin</em> ich gehe, das Wiki beantwortet <em>was</em> ich suche.</p>

            <h2>Schritt 1: Erst ein Ziel wählen (nicht erst den Ort)</h2>
            <p>Bevor ich die Karte öffne, setze ich mir ein klares Ziel für die nächste Runde:</p>
            <ul>
              <li><strong>Eine Liste füllen</strong> (Fische, Insekten, Vögel usw.).</li>
              <li><strong>Für Kochen/Crafting vorbereiten</strong> und Zutaten sammeln.</li>
              <li><strong>Eine Quest-Routine</strong> erledigen, ohne ständig zurückzulaufen.</li>
            </ul>
            <p>Mit einem Ziel kann ich im Wiki eine kleine Checkliste bauen – und erst dann die Route planen.</p>

            <h2>Schritt 2: Im Wiki eine kurze Checkliste erstellen</h2>
            <p>Ich öffne die passende Wiki-Kategorie und wähle nur wenige Ziele (meist 3–7). Das sind meine Standardseiten:</p>
            <ul>
              <li><a href="/wiki/fish"><strong>Fische</strong></a></li>
              <li><a href="/wiki/insects"><strong>Insekten</strong></a> und <a href="/wiki/birds"><strong>Vögel</strong></a></li>
              <li><a href="/wiki/crops"><strong>Pflanzen</strong></a>, <a href="/wiki/flowers"><strong>Blumen</strong></a>, <a href="/wiki/foraging"><strong>Sammeln</strong></a></li>
              <li><a href="/wiki/recipes"><strong>Rezepte</strong></a></li>
            </ul>
            <p>Weniger ist mehr: Eine kurze Liste ist leichter “abzufahren” und fühlt sich nach echtem Fortschritt an.</p>

            <h2>Schritt 3: Route auf der Interaktiven Karte planen</h2>
            <p>Dann öffne ich die <a href="/map"><strong>Interaktive Karte</strong></a> und mache daraus eine Route. Meine Regel: <strong>Ziele nach Gebiet gruppieren</strong>, damit ich nicht kreuz und quer über die Insel laufe.</p>
            <ul>
              <li><strong>Stops bündeln</strong> — Wenn ich für Fisch in ein Gebiet gehe, nehme ich Sammelspots oder Shop-/NPC-Stopps in der Nähe gleich mit.</li>
              <li><strong>Ein Loop, ein Zweck</strong> — Zutatenfarm ist Zutatenfarm. Große Shopping-Touren mache ich separat, außer es liegt ohnehin auf dem Weg.</li>
            </ul>

            <h2>Schritt 4: Guides + Codes für schnelle Fortschritte</h2>
            <p>Wenn ich wenig Zeit habe, helfen mir zwei Seiten, damit ich nicht alles neu ausprobieren muss:</p>
            <ul>
              <li><a href="/guide"><strong>Guides</strong></a> — Routinen und Freischaltungen kompakt.</li>
              <li><a href="/codes"><strong>Codes</strong></a> — Codes schnell kopieren und im Spiel einlösen, wenn welche aktiv sind.</li>
            </ul>
            <p>Neu dabei? Starte mit dem <a href="/guide/beginner-guide">Einsteiger-Guide</a>. Wenn DG-Progress dein Bottleneck ist: <a href="/guide/daily-weekly-quests-dg-medals">Guide zu Daily &amp; Weekly Quests</a>.</p>

            <h2>Meine “keine Zeit verschwenden”-Checkliste</h2>
            <ul>
              <li><strong>Ein Ziel</strong> für die Session festlegen.</li>
              <li><strong>3–7 Ziele</strong> aus dem Wiki auswählen.</li>
              <li><strong>Route nach Gebiet</strong> planen, um Backtracking zu vermeiden.</li>
              <li><strong>Loop abschließen</strong>, dann neues Ziel setzen.</li>
            </ul>

            <h2>Mehr Ressourcen</h2>
            <p>Stöbere im <a href="/wiki">Heartopia Wiki</a>, schau bei <a href="/events">Events</a> für zeitlich begrenzte Inhalte vorbei und nutze <a href="/characters">Characters</a> als Nachschlagewerk.</p>
          `,
    },
    {
      id: 4,
      title: 'Heartopia Tipps: Energie, Kochen & Sea Fishing',
      description:
        'Nicht mitten auf der Route leer werden, mit Kochen smarter verkaufen und Sea Fishing über Bill starten — weniger Rätselraten.',
      publishDate: '2026-04-07',
      addressBar: 'energy-cooking-sea-fishing-player-tips',
      imageSrc: '/images/guide/guide04-01.webp',
      imageAlt: 'Heartopia Guide Energie Kochen Sea Fishing',
      seo: {
        title: 'Heartopia Energie, Kochen & Sea Fishing | Spieler-Tipps',
        description:
          'Energie mit Essen und Sammeln im Griff, mit Kochen mehr Gold, Sea Fishing mit Bill. Fischliste, Rezepte, Erfolge, Charaktere.',
        keywords: 'heartopia, energie, kochen, sea fishing, bill, rezepte, fische, achievements, tipps',
      },
      detailsHtml: `
            <h2>Energie: du routest nicht „schlecht“ — du bist unterversorgt</h2>
            <p>Der Klassiker: du bist halb über die Karte, Hobbys stehen noch an, und die <strong>Leiste ist leer</strong>. Angeln und Sammeln fressen Zeit; <a href="/wiki/foraging">Sammel</a>-Items füllen nach, und mit <strong>Kochen</strong> zeigen <a href="/wiki/recipes">Rezepte</a>, wie viel Energie zurückkommt — wähle Gerichte passend zur geplanten Session-Länge.</p>
            <ul>
              <li><strong>Hobbys ketten, aber Essen im Plan</strong>, nicht als Panik-Stop, bevor du in weite Zonen gehst.</li>
              <li><strong>Zutaten zur Route passend machen</strong> — <a href="/wiki/crops">Pflanzen</a>, <a href="/wiki/foraging">Sammeln</a>, <a href="/wiki/fish">Fische</a> kurz checken, damit nicht ein Kraut die Küche killt.</li>
            </ul>
            <p>Tagesstruktur: <a href="/guide/beginner-guide">Einsteiger-Guide</a>.</p>

            <h2>Kochen: roh geht — gekocht zahlt oft die Rechnung</h2>
            <p>Wenn Gold tröpfelt, ist der häufige Fehler: <strong>alles direkt aus dem Inventar verkaufen</strong>. <strong>Gekochte Gerichte schlagen oft Rohstapel</strong>, und Quests wollen oft was vom Herd. Such dir <strong>2–3 Stammrezepte</strong> aus der <a href="/wiki/recipes">Rezeptliste</a>, die du wirklich befüllen kannst — Zufallskochen verbrennt Zeit und Mats.</p>
            <ul>
              <li><strong>Kleine Zutatenreserve</strong>, damit ein Daily nicht scheitert, weil du die letzte Tomate verkauft hast.</li>
            </ul>

            <h2>Sea Fishing: wer’s hostet und was „Event“-Fisch ist</h2>
            <p><strong>Sea Fishing</strong> ist Boot/Gruppen-Winkel — nicht Ufer-Idle. <strong>Bill</strong> ist <strong>Sea Fishing Host</strong> im <strong>Fishing Village</strong>; bei ihm steigst du ein mit Freunden oder Leuten aus der Stadt. Standort vergessen? <a href="/characters">Charakterliste</a> zeigt ihn.</p>
            <p>Für Sammler: die <a href="/wiki/fish">Fischliste</a> markiert <strong>Sea Fishing</strong>, damit du normale Gewässer nicht mit Event-Pools verwechselst. <a href="/wiki/achievements">Erfolge</a>: <strong>Sea Fishing Master</strong> verlangt <strong>drei Haie aus golden fish shadows in einem Sea-Fishing-Event</strong> — hart, aber klar; höheres Angel-Ranking und Fokus auf goldene Schatten sind dein Hebel.</p>

            <h2>Bevor du ausloggst</h2>
            <ul>
              <li><a href="/wiki/recipes">Essen</a> einpacken, wenn die Runde länger als ein Kurzlap ist.</li>
              <li>Batch-Kochen, wenn Farm-Loop und Rezept-Kurzliste zusammenpassen.</li>
              <li>Boot-Tag: <strong>Bill</strong> finden, dann <a href="/wiki/fish">Sea-Fishing-Einträge</a> und Sea-Fishing bei <a href="/wiki/achievements">Achievements</a> abgleichen.</li>
            </ul>

            <h2>Weiterlesen</h2>
            <p><a href="/guide/daily-weekly-quests-dg-medals">Daily &amp; Weekly Quests &amp; DG-Medaillen</a> · <a href="/guide/interactive-map-wiki-player-workflow">Karte + Wiki Routen</a> · <a href="/codes">Codes</a> · <a href="/events">Events</a></p>
          `,
    },
]