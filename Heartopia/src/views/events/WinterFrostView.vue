<template>
  <div class="detail detail--winter">
    <div class="container">
      <header class="detail-hero">
      <nav class="detail-breadcrumb" aria-label="Breadcrumb">
        <a :href="getLocalizedPath('/')" class="detail-crumb">Home</a>
        <span class="detail-crumb-sep">›</span>
        <a :href="getLocalizedPath('/events')" class="detail-crumb">Events</a>
        <span class="detail-crumb-sep">›</span>
        <span class="detail-crumb-current">Winter Frost Season</span>
      </nav>
      <div class="detail-hero-badges">
        <span class="detail-hero-badge">Seasonal</span>
        <span class="detail-hero-status" :class="'detail-hero-status--' + eventStatus">
          {{ eventStatusLabel }}
        </span>
      </div>
      <h1 class="detail-hero-title">Winter Frost Season</h1>
      <p class="detail-hero-desc">This Heartopia event adds snow sculpting, Fashionwave Store, and event-exclusive items on Onsen Mountain.</p>
      <div class="detail-hero-chips">
        <span>Jan 31 – Mar 13</span>
        <span>Winter Utopia</span>
        <span>🪙 Fashion Wave Token</span>
      </div>
    </header>

    <div class="detail-body">
      <section class="detail-card detail-card--info">
        <h2 class="detail-card-title">Heartopia event info</h2>
        <dl class="detail-kv">
          <div><dt>Duration</dt><dd>Jan 31 – Mar 13, 2026 (6 weeks)</dd></div>
          <div><dt>Requirements</dt><dd>D.G. Member Level 6+</dd></div>
          <div><dt>Location</dt><dd>Winter Utopia (Onsen Mountain)</dd></div>
          <div><dt>Currency</dt><dd>🪙 Fashion Wave Token</dd></div>
          <div><dt>Heartopia event NPC</dt><dd>Azure — near bus stop in Winter Utopia, between bus stop and igloo</dd></div>
        </dl>
      </section>

      <section class="detail-card detail-card--items">
        <h2 class="detail-card-title">Event items</h2>
        <p class="detail-card-desc">This Heartopia event has 35 items across Fishing, Gardening, Cooking, Snow Sculpting, and token-exclusive regular items.</p>
        <div class="detail-cat-pills">
          <span>⭐ Event Exclusive</span>
          <span>🍳 Event Cooking</span>
          <span>⛄ Snow Sculpting</span>
          <span>🪙 Regular (Token)</span>
        </div>
        <p class="detail-card-note">This Heartopia event includes Frostspore sea creatures, White Radish, frosted pancakes, radish dishes, snow sculptures, and limited fish/insects/birds. See the <a href="/wiki/fish">fish</a>, <a href="/wiki/insects">insects</a>, and <a href="/wiki/birds">birds</a> Wiki pages for full lists; <a href="/wiki/recipes">recipes</a> for cooking. Prices vary by star tier.</p>
      </section>

      <section class="detail-card detail-card--snow">
        <h2 class="detail-card-title">Snow sculpting</h2>
        <p class="detail-card-desc">The Winter Frost Heartopia event introduces Snow Sculpting as a new hobby.</p>
        <div class="detail-two-col">
          <div>
            <h3>Unlock &amp; progress</h3>
            <ul class="detail-list">
              <li><strong>Unlock</strong> 100 Wishing Stars at Azure’s Fashionwave Hobby Store</li>
              <li><strong>Max level</strong> 5</li>
              <li><strong>Gameplay</strong> 20 seconds — tap snow icons as they light up; 20 EXP per sculpture</li>
            </ul>
          </div>
          <div>
            <h3>Equipment</h3>
            <ul class="detail-list">
              <li><strong>Snow Machine</strong> — 1 snowball/hour, stores up to 20</li>
              <li><strong>Snow Sculpting Bench</strong> — free from Azure (do not buy)</li>
            </ul>
          </div>
        </div>
        <h3 class="detail-sub">Sculptures by level</h3>
        <p class="detail-card-desc">Level 1: Geometric Snow Brick, Igloo Brick, Ice Cream Cone, Poop · Level 2: Smiling Cedar, Milu Tata, Beaver Boba · Level 3: Sheep Jojo, Swan Dory, Rabbit Nia · Level 4: Chef Moe, Bee Naniwa, Koala Bay · Level 5: Tiger Boo, Bear Nya</p>
      </section>

      <section class="detail-card detail-card--store">
        <h2 class="detail-card-title">Fashionwave Store</h2>
        <p class="detail-card-desc">This Heartopia event’s store is near the bus stop in Winter Utopia. NPC: Azure. Refresh: 2,500 🪙</p>
        <ul class="detail-store-list">
          <li><span class="detail-store-name">Snow Sedan</span><span class="detail-store-type">Vehicle</span><span class="detail-store-price">80,000 🪙</span></li>
          <li><span class="detail-store-name">Snowflake Mini Motorcycle</span><span class="detail-store-type">Vehicle</span><span class="detail-store-price">20,000 🪙</span></li>
          <li><span class="detail-store-name">Snowflake Mountain Bike</span><span class="detail-store-type">Vehicle</span><span class="detail-store-price">20,000 🪙</span></li>
          <li><span class="detail-store-name">Snowflake Watering Can</span><span class="detail-store-type">Tool</span><span class="detail-store-price">10,000 🪙</span></li>
        </ul>
      </section>

      <section class="detail-card detail-card--double">
        <h2 class="detail-card-title">Double procurement</h2>
        <p class="detail-card-desc">In this Heartopia event, each week 1–3 random items are “target items”: selling them gives double Fashion Wave Tokens. Targets differ per player — check your weekly list.</p>
      </section>

      <section class="detail-card detail-card--tips">
        <h2 class="detail-card-title">Tips</h2>
        <ul class="detail-tips">
          <li>Save tokens before spending — this Heartopia event’s store has some very expensive items.</li>
          <li>Fishing Frostspore sea creatures is one of the best ways to earn tokens in this Heartopia event.</li>
          <li>Do not buy the Snow Sculpting Bench; Azure gives one free.</li>
          <li>Daily Heartopia event challenges give 100–300 tokens each.</li>
          <li>White Radish and radish-based dishes can be sold in unlimited quantities during the Heartopia Event.</li>
        </ul>
        <p class="detail-card-more">For more guides, codes, and the map see the <a href="/">home page</a>; <a href="/codes">Gift Codes</a> and <a href="/characters">Characters</a> for NPCs.</p>
      </section>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { getLocalizedPath } = useLocalizedPath()
const eventStatus = 'ongoing'
function statusLabel(s) {
  return s === 'ongoing' ? 'Ongoing' : s === 'expired' ? 'Expired' : 'Upcoming'
}
const eventStatusLabel = computed(() => statusLabel(eventStatus))
</script>

<style scoped>
.detail {
  padding: 0 0 4rem;
}

.detail-hero {
  margin-bottom: 2.5rem;
  padding: 2rem 1.75rem;
  border-radius: 20px;
  background: linear-gradient(145deg, #eff6fb 0%, #f5f9fc 100%);
  border: 1px solid rgba(90, 160, 200, 0.15);
}
.detail-breadcrumb {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 0.9rem;
}
.detail-crumb {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.detail-crumb:hover {
  text-decoration: underline;
}
.detail-crumb-sep {
  margin: 0 0.35rem;
  opacity: 0.8;
}
.detail-crumb-current {
  color: var(--color-text-soft);
  font-weight: 500;
}
.detail-hero-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}
.detail-hero-badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(90, 160, 200, 0.2);
  color: #4a7a9a;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.detail-hero-status {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.detail-hero-status--ongoing {
  background: rgba(139, 189, 155, 0.25);
  color: var(--color-primary-dark);
}
.detail-hero-status--expired {
  background: rgba(74, 85, 104, 0.15);
  color: var(--color-text-muted);
}
.detail-hero-status--upcoming {
  background: rgba(139, 177, 232, 0.25);
  color: #5a7fd6;
}
.detail-hero-title {
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin: 0 0 0.4rem;
  color: var(--color-text);
}
.detail-hero-desc {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  margin: 0 0 1rem;
}
.detail-hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.detail-hero-chips span {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  color: var(--color-text-soft);
}

.detail-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.detail-body .detail-card--info,
.detail-body .detail-card--items {
  grid-column: span 1;
}
.detail-body .detail-card--snow,
.detail-body .detail-card--store,
.detail-body .detail-card--double,
.detail-body .detail-card--tips {
  grid-column: 1 / -1;
}
@media (max-width: 1024px) {
  .detail-body {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .detail-body .detail-card--info,
  .detail-body .detail-card--items,
  .detail-body .detail-card--snow,
  .detail-body .detail-card--store,
  .detail-body .detail-card--double,
  .detail-body .detail-card--tips {
    grid-column: 1;
  }
  .detail {
    padding-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .detail {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
    padding: var(--m-block) 0;
  }
  .detail-hero-title {
    font-size: var(--m-h1);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .detail-hero-desc {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .detail-hero-chips span {
    font-size: var(--m-p);
  }
  .detail-body {
    gap: var(--m-tight);
  }
  .detail-card {
    padding: var(--m-block);
  }
  .detail-card-title {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .detail-card-desc,
  .detail-card-note {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .detail-kv dt,
  .detail-kv dd {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .detail-two-col {
    grid-template-columns: 1fr;
    gap: var(--m-gap);
  }
  .detail-two-col h3 {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .detail-list {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .detail-card-more {
    font-size: var(--m-p);
    margin-top: var(--m-gap);
    line-height: var(--m-line);
  }
}

.detail-card {
  padding: 1.5rem 1.6rem;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid var(--color-primary);
  box-shadow: 0 2px 12px rgba(74, 85, 104, 0.04);
}
.detail-card--info,
.detail-card--items { border-left-color: #5a9bb8; }
.detail-card--snow { border-left-color: #6ba8c8; }
.detail-card--store { border-left-color: var(--color-primary); }
.detail-card--double { border-left-color: var(--color-text-muted); }
.detail-card--tips { border-left-color: var(--color-text-muted); }

.detail-card-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}
.detail-card-desc {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0 0 0.75rem;
  line-height: 1.5;
}
.detail-card-note {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 0.75rem 0 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.detail-kv {
  display: grid;
  gap: 0.5rem 1.5rem;
  margin: 0;
}
.detail-kv > div {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.5rem;
  align-items: baseline;
}
.detail-kv dt {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: 500;
  margin: 0;
}
.detail-kv dd {
  font-size: 0.9rem;
  color: var(--color-text);
  margin: 0;
}

.detail-cat-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.detail-cat-pills span {
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(90, 160, 200, 0.12);
  font-size: 0.8rem;
  color: var(--color-text);
}

.detail-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.detail-two-col h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}
.detail-sub {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}
.detail-list {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.detail-list li { margin-bottom: 0.25rem; }
@media (max-width: 520px) {
  .detail-two-col { grid-template-columns: 1fr; }
}

.detail-store-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.detail-store-list li {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(74, 85, 104, 0.06);
  font-size: 0.9rem;
}
.detail-store-list li:last-child { border-bottom: none; }
.detail-store-name { font-weight: 500; color: var(--color-text); }
.detail-store-type { font-size: 0.8rem; color: var(--color-text-muted); }
.detail-store-price { font-weight: 500; color: var(--color-primary-dark); }

.detail-tips {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}
.detail-tips li { margin-bottom: 0.4rem; }

.detail-card a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.detail-card a:hover {
  text-decoration: underline;
}
.detail-card-more {
  margin: 1rem 0 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(74, 85, 104, 0.08);
  font-size: 0.88rem;
  color: var(--color-text-soft);
  line-height: 1.5;
}
</style>
