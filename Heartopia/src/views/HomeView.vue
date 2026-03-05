<template>
  <div class="home-page">
    <!-- Hero - 背景图 + 毛玻璃居中卡 -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-glass">
          <p class="hero-badge">{{ t('HomePage.hero.badge') }}</p>
          <h1>{{ t('HomePage.hero.title') }}</h1>
          <p class="hero-desc">
            {{ t('HomePage.hero.descIntro') }}<a :href="getLocalizedPath('/codes')">{{ t('HomePage.hero.descGiftCodes') }}</a>{{ t('HomePage.hero.descLookUp') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('HomePage.hero.descRecipes') }}</a>{{ t('HomePage.hero.descAndCreatures') }}<a :href="getLocalizedPath('/wiki')">{{ t('HomePage.hero.descWiki') }}</a>{{ t('HomePage.hero.descExplore') }}<a :href="getLocalizedPath('/map')">{{ t('HomePage.hero.descMap') }}</a>{{ t('HomePage.hero.descAndCatch') }}<a :href="getLocalizedPath('/events')">{{ t('HomePage.hero.descEvents') }}</a>{{ t('HomePage.hero.descAnd') }}<a :href="getLocalizedPath('/characters')">{{ t('HomePage.hero.descCharacters') }}</a>{{ t('HomePage.hero.descEnd') }}
          </p>
          <div class="hero-ctas">
            <a :href="getLocalizedPath('/codes')" class="btn btn-primary">{{ t('HomePage.hero.btn1') }}</a>
            <a :href="getLocalizedPath('/wiki')" class="btn btn-outline">{{ t('HomePage.hero.btn2') }}</a>
          </div>
        </div>
        <div class="hero-downloads">
          <a href="https://apps.apple.com/us/app/heartopia/id6746151928" class="store-pill store-apple" target="_blank">
            <span class="store-icon">
              <svg t="1772272572397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5612" width="128" height="128"><path d="M894.952065 742.033623c-1.27992 3.83976-21.310668 73.147428-70.523592 144.438972-42.621336 61.500156-86.71458 123.51228-156.278232 124.600213-68.47572 1.215924-90.362352-40.509468-168.501469-40.509468-78.011124 0-102.521592 39.421536-167.221549 41.725392-66.87582 2.687832-118.3926-67.1958-161.077932-128.375977C83.866758 758.544591 16.606962 528.670958 106.841322 374.632585c44.47722-77.11518 124.280232-126.07212 211.186801-127.480032 65.531904-1.215924 127.864008 44.029248 167.669521 44.029248 40.893444 0 116.280732-54.71658 195.827761-46.525092 33.27792 1.407912 126.456096 13.75914 186.484344 100.089744-4.671708 3.1998-111.481032 65.659896-110.265108 192.883945 1.5999 153.526405 135.799513 203.891257 137.207424 204.403225M629.496656 162.357853c35.83776-43.389288 59.452284-103.03356 53.244673-162.293857-51.1968 1.983876-113.656896 33.725892-150.710581 76.923192-32.829948 37.629648-61.692144 98.23386-53.628648 156.790201 56.892444 3.391788 115.384788-29.566152 151.03056-71.419536" fill="#ffffff" p-id="5613"></path></svg>
            </span>
            <span class="store-text">
              <span class="store-top">{{ t('HomePage.store.appStoreLine1') }}</span>
              <span class="store-bottom">{{ t('HomePage.store.appStoreLine2') }}</span>
            </span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.xd.xdtglobal.gp" class="store-pill store-google" target="_blank">
            <span class="store-icon">
              <svg t="1772272800220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6834" width="128" height="128"><path d="M38.253714 990.427429l479.085715-477.988572L38.253714 33.609143C26.441143 52.589714 18.285714 83.456 18.285714 127.890286v768.219428c0 44.434286 8.155429 75.264 19.968 94.354286z" fill="#00D1FF" p-id="6835"></path><path d="M719.725714 714.678857l-157.001143-157.769143L96.329143 1024h4.534857c39.899429 0 74.386286-14.518857 129.755429-44.470857l489.069714-264.850286z" fill="#F7364A" p-id="6836"></path><path d="M778.642286 341.028571l-170.569143 171.446858 170.569143 170.496 103.460571-56.246858c38.107429-20.845714 96.182857-58.953143 96.182857-114.249142 0-56.246857-58.075429-94.354286-96.182857-115.2L778.605714 340.992z" fill="#FFCB02" p-id="6837"></path><path d="M96.329143 0l466.395428 467.090286 156.964572-157.805715L230.619429 44.434286C175.250286 14.518857 140.763429 0 100.864 0h-4.534857z" fill="#00F076" p-id="6838"></path></svg>
            </span>
            <span class="store-text">
              <span class="store-top">{{ t('HomePage.store.googleLine1') }}</span>
              <span class="store-bottom">{{ t('HomePage.store.googleLine2') }}</span>
            </span>
          </a>
          <a href="https://d.tap.io/pc/latest/coop-pc?jid=id231364" class="store-pill store-taptap" target="_blank">
            <span class="store-icon">
              <svg t="1772272961630" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7816" width="128" height="128"><path d="M419.84 540.16v400.384L0 883.2v-342.528h419.84z m0-457.216v405.504H0V140.8l419.84-57.856z m604.16 457.216V1024L465.92 947.2v-406.528h558.08zM1024 0v488.448H465.92V76.8L1024 0z" fill="#ffffff" p-id="7817"></path></svg>
            </span>
            <span class="store-text">
              <span class="store-top">{{ t('HomePage.store.tapTapLine1') }}</span>
              <span class="store-bottom">{{ t('HomePage.store.tapTapLine2') }}</span>
            </span>
          </a>
          <a href="https://store.steampowered.com/app/4025700" class="store-pill store-steam" target="_blank">
            <span class="store-icon">
              <svg t="1772272990671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8883" width="128" height="128"><path d="M510.4 0C243.2 0 20.8 208 1.6 470.4l273.6 113.6c24-16 51.2-24 81.6-24h8l121.6-177.6v-1.6c0-105.6 86.4-193.6 193.6-193.6s193.6 86.4 193.6 193.6-86.4 193.6-193.6 193.6h-4.8l-174.4 124.8v6.4c0 80-65.6 145.6-145.6 145.6-70.4 0-129.6-51.2-142.4-116.8L17.6 651.2C78.4 865.6 276.8 1024 510.4 1024c283.2 0 512-228.8 512-512S793.6 0 510.4 0z" p-id="8884" fill="#ffffff"></path><path d="M321.6 777.6L259.2 752c11.2 24 30.4 43.2 56 52.8 54.4 24 118.4-3.2 142.4-57.6 11.2-27.2 11.2-56 0-83.2-11.2-27.2-32-48-57.6-59.2s-54.4-9.6-80-1.6l65.6 27.2c40 17.6 60.8 64 43.2 104-19.2 40-65.6 59.2-107.2 43.2zM808 379.2c0-70.4-57.6-129.6-129.6-129.6-70.4 0-129.6 57.6-129.6 129.6s59.2 129.6 129.6 129.6 129.6-57.6 129.6-129.6z m-224 0c0-54.4 43.2-96 96-96 54.4 0 96 43.2 96 96 0 54.4-43.2 96-96 96-52.8 1.6-96-41.6-96-96z" p-id="8885" fill="#ffffff"></path></svg>
            </span>
            <span class="store-text">
              <span class="store-top">{{ t('HomePage.store.steamLine1') }}</span>
              <span class="store-bottom">{{ t('HomePage.store.steamLine2') }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Why - 左右交替 -->
    <section class="why-section">
      <div class="container">
        <div class="why-content">
          <h2 class="section-heading">{{ t('HomePage.why.title') }}</h2>
          <div class="why-grid">
            <article class="why-card">
              <div class="why-icon box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  />
                </svg>
              </div>
              <h3>{{ t('HomePage.why.card1Title') }}</h3>
              <p>{{ t('HomePage.why.card1Desc') }}</p>
            </article>
            <article class="why-card">
              <div class="why-icon heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
              </div>
              <h3>{{ t('HomePage.why.card2Title') }}</h3>
              <p>{{ t('HomePage.why.card2Desc') }}</p>
            </article>
            <article class="why-card">
              <div class="why-icon globe">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
              </div>
              <h3>{{ t('HomePage.why.card3Title') }}</h3>
              <p>{{ t('HomePage.why.card3Desc') }}</p>
            </article>
            <article class="why-card">
              <div class="why-icon users">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>{{ t('HomePage.why.card4Title') }}</h3>
              <p>{{ t('HomePage.why.card4Desc') }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Map - 左：图标+标题+描述+两列特性+按钮；右：iframe 地图 -->
    <section class="map-section">
      <div class="container">
        <div class="map-content">
          <div class="map-block">
            <div class="map-icon-wrap">
              <svg class="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M2 6v14l6-3 6 3 6-3 6 3V6l-6 3-6-3-6 3z"/>
                <path d="M8 3v14M16 3v14"/>
              </svg>
            </div>
            <h2 class="map-title">{{ t('HomePage.map.title') }}</h2>
            <p class="map-desc">{{ t('HomePage.map.descIntro') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('HomePage.map.descFish') }}</a>, <a :href="getLocalizedPath('/wiki/insects')">{{ t('HomePage.map.descBugs') }}</a>, <a :href="getLocalizedPath('/wiki/birds')">{{ t('HomePage.map.descBirds') }}</a>{{ t('HomePage.map.descResources') }}<a :href="getLocalizedPath('/characters')">{{ t('HomePage.map.descNpcs') }}</a>{{ t('HomePage.map.descEnd') }}</p>
            <ul class="map-features">
              <li>
                <svg class="map-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span>{{ t('HomePage.map.feat1') }}</span>
              </li>
              <li>
                <svg class="map-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5L12 2z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span>{{ t('HomePage.map.feat2') }}</span>
              </li>
              <li>
                <svg class="map-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{{ t('HomePage.map.feat3') }}</span>
              </li>
              <li>
                <svg class="map-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h8"/>
                </svg>
                <span>{{ t('HomePage.map.feat4') }}</span>
              </li>
            </ul>
            <a :href="getLocalizedPath('/map')" class="map-btn">
              <svg class="map-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M2 6v14l6-3 6 3 6-3 6 3V6l-6 3-6-3-6 3z"/>
                <path d="M8 3v14M16 3v14"/>
              </svg>
              <span>{{ t('HomePage.map.btn') }}</span>
              <svg class="map-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="map-image">
            <iframe
              src="https://heartopiamap.com/"
              title="Heartopia Interactive Map"
              class="map-iframe"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Browse Database – Bento cards -->
    <section class="db-section">
      <div class="container">
        <h2 class="db-heading">{{ t('HomePage.db.heading') }}</h2>
        <p class="db-desc"><a :href="getLocalizedPath('/wiki/recipes')">{{ t('HomePage.db.recipesTitle') }}</a>{{ t('HomePage.db.descAfterRecipes') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('HomePage.db.fish') }}</a>{{ t('HomePage.db.descAfterFish') }}<a :href="getLocalizedPath('/wiki/insects')">{{ t('HomePage.db.insects') }}</a>{{ t('HomePage.db.descAfterInsects') }}<a :href="getLocalizedPath('/wiki/birds')">{{ t('HomePage.db.birds') }}</a>{{ t('HomePage.db.descAfterBirds') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('HomePage.db.crops') }}</a>{{ t('HomePage.db.descAfterCrops') }}<a :href="getLocalizedPath('/wiki')">{{ t('HomePage.db.wikiLink') }}</a>{{ t('HomePage.db.descAfterWiki') }}</p>

        <div class="db-bento">
          <div class="db-cell db-cell--feature">
            <a :href="getLocalizedPath('/wiki/recipes')" class="db-card db-card--warm">
              <span class="db-card-pill">{{ t('HomePage.db.pillCooking') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 10h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z"/>
                  <path d="M8 8V6M16 8V6M12 6v2"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.recipesTitle') }}</h3>
              <p class="db-card-tagline">{{ t('HomePage.db.recipesTagline') }}</p>
              <span class="db-card-hint">{{ t('HomePage.db.viewGuide') }}</span>
            </a>
          </div>
          <div class="db-cell db-cell--feature">
            <a :href="getLocalizedPath('/wiki/achievements')" class="db-card db-card--gold">
              <span class="db-card-pill">{{ t('HomePage.db.pillProgress') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M8 21h8M12 17v4M7 10l2 2 2-2 2 2 2-2M6 4h12l-1.5 6H7.5L6 4z"/>
                  <path d="M9 10h6M8 14h8"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.achievementsTitle') }}</h3>
              <p class="db-card-tagline">{{ t('HomePage.db.achievementsTagline') }}</p>
              <span class="db-card-hint">{{ t('HomePage.db.viewGuide') }}</span>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/fish')" class="db-card db-card--sea">
              <span class="db-card-pill">{{ t('HomePage.db.pillCollection') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 12c-2.5 0-4.5 2-4.5 4.5S9.5 21 12 21s4.5-2 4.5-4.5S14.5 12 12 12z"/>
                  <path d="M17 9c-1.5-1-3.5-1.5-5-1.5s-3.5.5-5 1.5"/>
                  <path d="M7 15c1.5 1 3.5 1.5 5 1.5s3.5-.5 5-1.5"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.fish') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/insects')" class="db-card db-card--amber">
              <span class="db-card-pill">{{ t('HomePage.db.pillCollection') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 4c-2 2-2 6-2 8s0 6 2 8 2-6 2-8 0-6-2-8z"/>
                  <path d="M8 8c0 2 1 4 4 4s4-2 4-4"/>
                  <path d="M4 12l2 2M20 12l-2 2M12 4v2M12 18v2"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.insects') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/birds')" class="db-card db-card--sky">
              <span class="db-card-pill">{{ t('HomePage.db.pillCollection') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 5c-3 0-5 2-5 5 0 3 2 5 5 6 3-1 5-3 5-6 0-3-2-5-5-5z"/>
                  <circle cx="12" cy="9" r="1.8"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.birds') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/crops')" class="db-card db-card--leaf">
              <span class="db-card-pill">{{ t('HomePage.db.pillFarming') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 20V8M9 11l3-3 3 3"/>
                  <path d="M8 14h2M14 14h2M10 17h4M7 20h10"/>
                  <path d="M12 4l-1 2h2L12 4z"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.crops') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/flowers')" class="db-card db-card--blush">
              <span class="db-card-pill">{{ t('HomePage.db.pillFarming') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
                  <path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"/>
                  <path d="M12 8c-2 0-3 1.5-3 4s1 4 3 4 3-1.5 3-4-1-4-3-4z"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.flowers') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/foraging')" class="db-card db-card--mint">
              <span class="db-card-pill">{{ t('HomePage.db.pillCollection') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 22v-8M12 14c-2 0-3-1.5-3-4l3-8 3 8c0 2.5-1 4-3 4z"/>
                  <path d="M8 18l2-4 2 4M16 18l-2-4-2 4"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.foraging') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/wild-animals')" class="db-card db-card--earth">
              <span class="db-card-pill">{{ t('HomePage.db.pillWildlife') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 10c-1.5 0-2.5 1.2-2.5 2.5S10.5 15 12 15s2.5-1.2 2.5-2.5S13.5 10 12 10z"/>
                  <path d="M18 10c-.8 0-1.5.7-1.5 1.5S17.2 13 18 13s1.5-.7 1.5-1.5S18.8 10 18 10z"/>
                  <path d="M6 10c.8 0 1.5.7 1.5 1.5S6.8 13 6 13s-1.5-.7-1.5-1.5S5.2 10 6 10z"/>
                  <ellipse cx="12" cy="16" rx="3.5" ry="1.8"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.wildAnimals') }}</h3>
            </a>
          </div>
          <div class="db-cell db-cell--tile">
            <a :href="getLocalizedPath('/wiki/pets')" class="db-card db-card--rose">
              <span class="db-card-pill">{{ t('HomePage.db.pillCompanions') }}</span>
              <span class="db-card-icon-wrap">
                <svg class="db-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
              <h3 class="db-card-title">{{ t('HomePage.db.pets') }}</h3>
            </a>
          </div>
        </div>

        <p class="db-wiki-link">
          <a :href="getLocalizedPath('/wiki')">{{ t('HomePage.db.viewAllWiki') }}</a>
        </p>
      </div>
    </section>

    <!-- Daily Checklist -->
    <section class="checklist-section">
      <div class="container">
        <div class="checklist-content">
          <h2 class="section-heading">{{ t('HomePage.checklist.title') }}</h2>
          <p class="section-desc">{{ t('HomePage.checklist.descPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('HomePage.db.wikiLink') }}</a>{{ t('HomePage.checklist.descPart2') }}<a :href="getLocalizedPath('/guide')">{{ t('Header.nav.text4') }}</a>{{ t('HomePage.checklist.descPart3') }}</p>
          <div class="checklist-board">
            <div class="checklist-column">
              <h3>{{ t('HomePage.checklist.col1Title') }}</h3>
              <ul>
                <li>
                  <span class="check-icon">📋</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.dailyQuests') }}</strong>
                    <span>{{ t('HomePage.checklist.dailyQuestsDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">⭐</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.weeklyQuest') }}</strong>
                    <span>{{ t('HomePage.checklist.weeklyQuestDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">💭</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.dreams') }}</strong>
                    <span>{{ t('HomePage.checklist.dreamsDesc') }}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="checklist-column">
              <h3>{{ t('HomePage.checklist.col2Title') }}</h3>
              <ul>
                <li>
                  <span class="check-icon">🪐</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.planet') }}</strong>
                    <span>{{ t('HomePage.checklist.planetDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">☁️</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.weather') }}</strong>
                    <span>{{ t('HomePage.checklist.weatherDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🌳</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.slipperyOak') }}</strong>
                    <span>{{ t('HomePage.checklist.slipperyOakDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🫧</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.bubbles') }}</strong>
                    <span>{{ t('HomePage.checklist.bubblesDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🦊</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.wildAnimals') }}</strong>
                    <span>{{ t('HomePage.checklist.wildAnimalsDesc') }}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="checklist-column">
              <h3>{{ t('HomePage.checklist.col3Title') }}</h3>
              <ul>
                <li>
                  <span class="check-icon">🌱</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.garden') }}</strong>
                    <span>{{ t('HomePage.checklist.gardenDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🚜</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.farm') }}</strong>
                    <span>{{ t('HomePage.checklist.farmDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🌸</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.flowers') }}</strong>
                    <span>{{ t('HomePage.checklist.flowersDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🐾</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.pets') }}</strong>
                    <span>{{ t('HomePage.checklist.petsDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🎣</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.hobbies') }}</strong>
                    <span>{{ t('HomePage.checklist.hobbiesDesc') }}</span>
                  </span>
                </li>
                <li>
                  <span class="check-icon">🏬</span>
                  <span class="check-line">
                    <strong>{{ t('HomePage.checklist.npcs') }}</strong>
                    <span>{{ t('HomePage.checklist.npcsDesc') }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Characters -->
    <section class="characters-section">
      <div class="container">
        <div class="characters-content">
          <div class="characters-head">
            <h2 class="section-heading">{{ t('HomePage.characters.title') }}</h2>
            <a :href="getLocalizedPath('/characters')" class="link-arrow">{{ t('HomePage.characters.viewAll') }}</a>
          </div>
          <div v-if="characterList.length" class="characters-gallery">
            <div class="characters-gallery-main">
              <img
                :src="characterList[selectedCharIndex].src"
                :alt="characterList[selectedCharIndex].name"
                class="characters-gallery-img"
              />
              <p class="characters-gallery-name">{{ characterList[selectedCharIndex].name }}</p>
            </div>
            <div class="characters-gallery-strip">
              <button
                v-for="(char, i) in characterList"
                :key="char.id"
                type="button"
                class="characters-thumb"
                :class="{ 'characters-thumb--active': i === selectedCharIndex }"
                @click="selectedCharIndex = i"
              >
                <img :src="char.src" :alt="char.name" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-content">
          <h2 class="section-heading">{{ t('HomePage.faq.title') }}</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q1') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a1') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q2') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a2Part1') }}<a href="/codes">{{ t('HomePage.faq.a10Part2') }}</a>{{ t('HomePage.faq.a2Part2') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q3') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a3') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q4') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a4') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q5') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a5Part1') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('HomePage.faq.a5Part2') }}</a>{{ t('HomePage.faq.a5Part3') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('HomePage.faq.a5Part4') }}</a>{{ t('HomePage.faq.a5Part5') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q6') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a6Part1') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('HomePage.faq.a6Part2') }}</a>{{ t('HomePage.faq.a6Part3') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('HomePage.faq.a6Part4') }}</a>{{ t('HomePage.faq.a6Part5') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('HomePage.faq.a6Part6') }}</a>{{ t('HomePage.faq.a6Part7') }}<a :href="getLocalizedPath('/wiki/birds')">{{ t('HomePage.faq.a6Part8') }}</a>{{ t('HomePage.faq.a6Part9') }}<a :href="getLocalizedPath('/wiki/insects')">{{ t('HomePage.faq.a6Part10') }}</a>{{ t('HomePage.faq.a6Part11') }}<a :href="getLocalizedPath('/guide')">{{ t('HomePage.faq.a6Part12') }}</a>{{ t('HomePage.faq.a6Part13') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q7') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a7') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q8') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a8') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q9') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a9') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q10') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a10Part1') }}<a href="/codes">{{ t('HomePage.faq.a10Part2') }}</a>{{ t('HomePage.faq.a10Part3') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharactersData } from '@/composables/useCharactersData'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { characters, loadData } = useCharactersData()

onMounted(() => loadData())
watch(() => locale.value, () => loadData())

const characterList = computed(() =>
  (characters.value || [])
    .filter((c) => c.isHome === true)
    .map((c) => ({
      id: c.id,
      name: c.name,
      src: c.imageUrl?.trim() ? c.imageUrl : 'https://picsum.photos/200',
    }))
)
const selectedCharIndex = ref(0)
</script>

<style scoped>
/* ---------- Base ---------- */
.home-page {
  min-height: 100vh;
}

/* ---------- 共用：标题与链接 ---------- */
.section-heading {
  font-weight: 600;
  color: var(--color-text);
}

.why-content .section-heading {
  text-align: center;
  margin-bottom: 2.5rem;
}

.db-content .db-heading {
  text-align: center;
  margin-bottom: 0.5rem;
}

/* db-heading/db-desc used below in db-section */

.checklist-content .section-heading {
  text-align: center;
  margin-bottom: 0.5rem;
}

.characters-content .section-heading {
  margin-bottom: 0;
}

.map-main .section-heading {
  margin-bottom: 0.5rem;
}

.faq-content .section-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.section-desc {
  text-align: center;
  color: var(--color-text-soft);
  margin-bottom: 2rem;
}
.section-desc a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.section-desc a:hover {
  text-decoration: underline;
}

.link-arrow {
  color: var(--color-primary-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.link-arrow:hover {
  color: var(--color-cta);
  text-decoration: none;
}

/* ---------- 按钮 ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.25rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 16px;
  transition: all 280ms cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
}

.btn-primary {
  background: var(--color-cta);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: var(--color-cta-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(74, 85, 104, 0.06);
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  color: var(--color-text);
  border: 2px solid rgba(74, 85, 104, 0.1);
}

.btn-outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
}

/* ---------- Hero ---------- */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: linear-gradient(
      180deg,
      rgba(224, 244, 255, 0.08) 0%,
      rgba(255, 245, 240, 0.18) 100%
    ),
    url('/images/bg.webp');
  background-size: cover;
  background-position: center;
}

.hero-container {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-glass {
  max-width: 1000px;
  margin: 0 auto 1.5rem;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 32px;
  box-shadow: 0 4px 20px rgba(74, 85, 104, 0.06);
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: rgba(231, 111, 81, 0.12);
  color: var(--color-cta);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.hero-glass h1 {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-shadow:
    0 6px 0 rgba(107, 155, 123, 0.95),
    0 12px 20px rgba(0, 0, 0, 0.18);
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--color-text-soft);
  margin-bottom: 1.5rem;
}
.hero-desc a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.hero-desc a:hover {
  text-decoration: underline;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-ctas .btn {
  padding: 0.85rem 1.5rem;
}

.hero-downloads {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.store-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.3rem;
  border-radius: 999px;
  background: #050608;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.85rem;
}

.store-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.store-top {
  font-size: 0.68rem;
  opacity: 0.85;
}

.store-bottom {
  font-size: 0.9rem;
  font-weight: 600;
}

.store-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.store-icon {
  width: 22px;
  height: 22px;
}

/* ---------- Why ---------- */
.why-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f7fbff 0%, #f3fff7 100%);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.why-card {
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 20px rgba(74, 85, 104, 0.06);
  transition: all 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(74, 85, 104, 0.06);
  border-color: rgba(139, 189, 155, 0.35);
}

.why-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.why-icon.box {
  background: rgba(139, 189, 155, 0.25);
  color: var(--color-primary-dark);
}
.why-icon.heart {
  background: rgba(232, 180, 184, 0.35);
  color: var(--color-cta);
}
.why-icon.globe {
  background: rgba(184, 212, 200, 0.4);
  color: var(--color-primary-dark);
}
.why-icon.users {
  background: rgba(212, 165, 165, 0.25);
  color: var(--color-cta);
}

.why-card h3 {
  margin-bottom: 0.35rem;
}
.why-card p {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0;
}

/* ---------- Browse Database (Bento) ---------- */
.db-section {
  padding: 4rem 0 5rem;
  background: linear-gradient(165deg, #f5f0f8 0%, #eef6f4 50%, #fff5f0 100%);
}

.db-heading {
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-text);
  margin: 0 0 0.35rem;
  text-align: center;
  letter-spacing: -0.02em;
}

.db-desc {
  text-align: center;
  color: var(--color-text-soft);
  margin: 0 0 2rem;
  line-height: 1.5;
  font-size: 0.95rem;
}
.db-desc a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.db-desc a:hover {
  text-decoration: underline;
}

.db-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.75rem;
}

.db-cell {
  min-width: 0;
}
.db-cell--feature {
  grid-column: span 2;
}

.db-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  min-height: 0;
  padding: 1.5rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  border-left: 4px solid transparent;
}
.db-card::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -20%;
  width: 60%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
  pointer-events: none;
}
.db-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 55%);
  pointer-events: none;
}
.db-card:hover {
  text-decoration: none;
  color: inherit;
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.db-card-pill {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

.db-card-icon-wrap {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 0.85rem;
  position: relative;
  z-index: 1;
}
.db-cell--feature .db-card-icon-wrap {
  width: 4rem;
  height: 4rem;
  border-radius: 16px;
  margin-bottom: 1rem;
}
.db-card-svg {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}
.db-cell--feature .db-card-svg {
  width: 1.75rem;
  height: 1.75rem;
}

.db-cell--feature .db-card {
  min-height: 160px;
  padding: 1.75rem 1.75rem;
  border-radius: 24px;
}
.db-cell--feature .db-card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  letter-spacing: -0.02em;
  line-height: 1.25;
}
.db-cell--feature .db-card-tagline {
  font-size: 0.88rem;
  opacity: 0.92;
  margin: 0;
  line-height: 1.5;
  flex: 1;
}
.db-cell--feature .db-card-hint {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.85;
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;
}

.db-cell--tile .db-card {
  padding: 1.25rem 1.25rem;
  border-radius: 18px;
}
.db-cell--tile .db-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
}

.db-card-title,
.db-card-tagline {
  position: relative;
  z-index: 1;
}

.db-card-hint {
  position: relative;
  z-index: 1;
}

.db-card--disabled {
  cursor: default;
  opacity: 0.82;
}
.db-card--disabled:hover {
  transform: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}
.db-card-coming {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.9;
  margin-top: 0.25rem;
  position: relative;
  z-index: 1;
}

/* Accent gradients + left border + dark text */
.db-card--warm {
  background: linear-gradient(145deg, #fff8f0 0%, #ffecd9 50%, #ffe0c4 100%);
  border-left-color: #e8a878;
  color: #4a3020;
}
.db-card--gold {
  background: linear-gradient(145deg, #fffbf0 0%, #fff3d4 50%, #ffe8b8 100%);
  border-left-color: #d4a84b;
  color: #4a3d1a;
}
.db-card--sea {
  background: linear-gradient(145deg, #f0fcfb 0%, #d8f5f2 50%, #b8ebe6 100%);
  border-left-color: #5eb5b0;
  color: #1a4545;
}
.db-card--amber {
  background: linear-gradient(145deg, #fff9f0 0%, #fef0d8 50%, #fce4bc 100%);
  border-left-color: #c99a50;
  color: #4a3518;
}
.db-card--sky {
  background: linear-gradient(145deg, #f5faff 0%, #e3efff 50%, #cce0ff 100%);
  border-left-color: #6b9ed4;
  color: #2a3855;
}
.db-card--leaf {
  background: linear-gradient(145deg, #f2fdf2 0%, #ddf5dd 50%, #c5ecc5 100%);
  border-left-color: #6bb86b;
  color: #1a451a;
}
.db-card--blush {
  background: linear-gradient(145deg, #fff5f9 0%, #fce8f0 50%, #f8d6e4 100%);
  border-left-color: #d490a8;
  color: #4a2535;
}
.db-card--mint {
  background: linear-gradient(145deg, #f2fdf6 0%, #dcfae8 50%, #c2f0d2 100%);
  border-left-color: #5eb88a;
  color: #1a4530;
}
.db-card--earth {
  background: linear-gradient(145deg, #faf8f4 0%, #f2ebe0 50%, #e8dcc8 100%);
  border-left-color: #a89070;
  color: #3d3225;
}
.db-card--rose {
  background: linear-gradient(145deg, #fff4f5 0%, #fce8ea 50%, #f8d4d8 100%);
  border-left-color: #d47888;
  color: #4a2528;
}

.db-wiki-link {
  text-align: center;
  margin: 0;
  font-size: 0.95rem;
}
.db-wiki-link a {
  color: var(--color-primary-dark);
  font-weight: 600;
}
.db-wiki-link a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .db-bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .db-cell--feature {
    grid-column: span 2;
  }
}
@media (max-width: 768px) {
  .db-bento {
    grid-template-columns: 1fr;
  }
  .db-cell--feature {
    grid-column: span 1;
  }
  .db-cell--feature .db-card {
    min-height: 130px;
  }
}

/* ---------- Daily Checklist ---------- */
.checklist-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f5f0ff 0%, #fff7ff 100%);
}

.checklist-board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.checklist-column {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 1.5rem 1.4rem;
  box-shadow: 0 6px 24px rgba(74, 85, 104, 0.08);
}

.checklist-column h3 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 1rem;
  color: var(--color-primary-dark);
}

.checklist-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.checklist-column li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.6rem;
  align-items: flex-start;
}

.check-icon {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 6px rgba(74, 85, 104, 0.18);
}

.check-line {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.check-line strong {
  font-size: 0.9rem;
}

.check-line span {
  font-size: 0.8rem;
  color: var(--color-text-soft);
}

/* ---------- Meet the Characters (相册) ---------- */
.characters-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f0faff 0%, #f7fffe 100%);
}

.characters-content {
  margin: 0 auto;
}

.characters-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.characters-gallery {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.characters-gallery-main {
  max-width: 420px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(74, 85, 104, 0.1);
}

.characters-gallery-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  object-position: center top;
}

.characters-gallery-name {
  margin: 0;
  padding: 0.85rem 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
}

.characters-gallery-strip {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 60%;
  margin: 0 auto;
}

.characters-thumb {
  flex: 1;
  padding: 0;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 12px rgba(74, 85, 104, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.characters-thumb:hover {
  box-shadow: 0 4px 20px rgba(74, 85, 104, 0.12);
  transform: translateY(-2px);
}

.characters-thumb--active {
  box-shadow: 0 0 0 3px var(--color-primary);
}

.characters-thumb img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top;
  background: rgba(255, 255, 255, 0.5);
}

/* ---------- Map（参考排版：左对齐单栏） ---------- */
.map-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #e9f8ff 0%, #fffdf5 100%);
}

.map-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;
  border: 1px solid rgba(74, 85, 104, 0.12);
  border-radius: 20px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.6);
}

.map-block {
  text-align: left;
}

.map-icon-wrap {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 10px;
  background: #d4e8f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.map-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #2563eb;
}

.map-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.map-desc {
  color: var(--color-text-soft);
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0 0 1.25rem;
}
.map-desc a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.map-desc a:hover {
  text-decoration: underline;
}

.map-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 2rem;
}

.map-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
}

.map-feat-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  color: #2563eb;
}

.map-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background: #2563eb;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.map-btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.map-btn-icon,
.map-btn-arrow {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}

.map-image {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(74, 85, 104, 0.08);
  background: #e8f0f4;
  min-height: 320px;
}

.map-image img,
.map-iframe {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: block;
  border: none;
}

.map-iframe {
  aspect-ratio: 16 / 9;
  min-height: 280px;
}

@media (max-width: 1024px) {
  .map-content {
    grid-template-columns: 1fr;
  }
  .map-image {
    min-height: 280px;
  }
  .map-iframe {
    min-height: 260px;
  }
}

/* ---------- FAQ ---------- */
.faq-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 100%);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding-bottom: 1rem;
}

.faq-q {
  padding: 0;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}

.faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0.25rem 0 0;
}
.faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.faq-a a:hover {
  text-decoration: underline;
}

/* ---------- 响应式：1024 iPad / 768 移动端 ---------- */
@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .why-section,
  .map-section,
  .db-section,
  .checklist-section,
  .characters-section,
  .faq-section {
    padding: 3rem 0;
  }
  .checklist-board {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  /* 移动端设计 token：只在此处改数值，下面全部用变量引用 */
  .home-page {
    --m-h1: 1.5rem;
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;      /* 标题/标签与内容间距 */
    --m-block: 1rem;      /* 板块 padding、大间距 */
    --m-tight: 0.75rem;   /* 网格/列表 gap */
  }

  .hero-section,
  .why-section,
  .map-section,
  .db-section,
  .checklist-section,
  .characters-section,
  .faq-section {
    padding: var(--m-block) 0;
  }

  .hero-section {
    min-height: auto;
  }
  .hero-glass {
    padding: var(--m-block);
    margin-bottom: var(--m-block);

  }
  .hero-glass h1 {
    font-size: var(--m-h1);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .hero-badge,
  .why-icon,
  .map-icon-wrap,
  .db-card-pill,
  .db-card-icon-wrap {
    margin-bottom: var(--m-gap);
  }
  .hero-desc,
  .section-desc,
  .map-desc {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .hero-ctas {
    gap: var(--m-gap);
  }
  .hero-ctas .btn {
    padding: 0.6rem var(--m-block);
    font-size: var(--m-p);
  }
  .hero-downloads {
    margin-top: var(--m-block);
    gap: var(--m-gap);
  }
  .store-pill,
  .store-bottom {
    font-size: var(--m-p);
  }
  .store-pill {
    padding: 0.5rem var(--m-block);
  }

  .section-heading,
  .map-title,
  .db-heading {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }

  .why-grid {
    grid-template-columns: 1fr;
    gap: var(--m-tight);
  }
  .why-card {
    padding: var(--m-block);
  }
  .why-card h3 {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .why-card p {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }

  .map-content {
    padding: var(--m-block);
    gap: var(--m-tight);
  }
  .map-features li,
  .map-btn {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .map-features {
    margin-bottom: var(--m-gap);
  }

  .db-desc {
    font-size: var(--m-p);
    margin-bottom: var(--m-tight);
    line-height: var(--m-line);
  }
  .db-bento {
    gap: var(--m-tight);
    margin-bottom: var(--m-tight);
  }
  .db-card,
  .db-cell--feature .db-card,
  .db-cell--tile .db-card {
    padding: var(--m-block);
  }
  .db-cell--feature .db-card {
    min-height: auto;
  }
  .db-card-title {
    font-size: var(--m-h3);
    line-height: var(--m-line);
  }
  .db-cell--feature .db-card-title {
    margin-bottom: var(--m-gap);
  }
  .db-cell--feature .db-card-tagline,
  .db-wiki-link {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }

  .checklist-board {
    grid-template-columns: 1fr;
    gap: var(--m-tight);
  }
  .checklist-column {
    padding: var(--m-block);
  }
  .checklist-column h3 {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .check-line strong,
  .check-line span {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }

  .characters-head {
    margin-bottom: var(--m-tight);
  }
  .characters-gallery-name {
    font-size: var(--m-h3);
    padding: var(--m-gap) var(--m-block);
    line-height: var(--m-line);
  }

  .faq-list {
    gap: var(--m-tight);
  }
  .faq-item {
    padding-bottom: var(--m-gap);
  }
  .faq-q {
    font-size: var(--m-h3);
    line-height: var(--m-line);
  }
  .faq-a {
    font-size: var(--m-p);
    margin-top: var(--m-gap);
    line-height: var(--m-line);
  }
}
</style>
