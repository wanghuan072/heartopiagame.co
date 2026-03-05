<template>
  <div class="detail detail--mlp">
    <div class="container">
      <header class="detail-hero">
      <nav class="detail-breadcrumb" aria-label="Breadcrumb">
        <a :href="getLocalizedPath('/')" class="detail-crumb">Home</a>
        <span class="detail-crumb-sep">›</span>
        <a :href="getLocalizedPath('/events')" class="detail-crumb">Events</a>
        <span class="detail-crumb-sep">›</span>
        <span class="detail-crumb-current">My Little Pony x Heartopia</span>
      </nav>
      <div class="detail-hero-badges">
        <span class="detail-hero-badge">Collaboration</span>
        <span class="detail-hero-status" :class="'detail-hero-status--' + eventStatus">
          {{ eventStatusLabel }}
        </span>
      </div>
      <h1 class="detail-hero-title">My Little Pony x Heartopia</h1>
      <p class="detail-hero-desc">This Heartopia event brings Mane Six gacha, Tree of Harmony, Spike pet costume, and limited rewards.</p>
      <div class="detail-hero-chips">
        <span>Feb 14 – Mar 15</span>
        <span>Cloud Island</span>
        <span>🌸 Love Petals</span>
      </div>
    </header>

    <div class="detail-body">
      <section class="detail-card detail-card--info">
        <h2 class="detail-card-title">Heartopia event info</h2>
        <dl class="detail-kv">
          <div><dt>Duration</dt><dd>Feb 14 – Mar 15, 2026 (30 days)</dd></div>
          <div><dt>Requirements</dt><dd>Complete tutorial</dd></div>
          <div><dt>Location</dt><dd>Cloud Island</dd></div>
          <div><dt>Currency</dt><dd>🌸 Love Petals</dd></div>
        </dl>
      </section>

      <section class="detail-card detail-card--pre">
        <h2 class="detail-card-title">Pre-event</h2>
        <p class="detail-card-lead">Before this Heartopia event, Feb 7 – Feb 14 · Daily puzzles for Exhibition Passes and Spike pet costume.</p>
        <ul class="detail-list">
          <li>One puzzle piece per day</li>
          <li>Up to 30 Time-Limited Exhibition Passes</li>
          <li>Spike Pet Costume when all puzzles are done</li>
        </ul>
      </section>

      <section class="detail-card detail-card--tree">
        <h2 class="detail-card-title">Tree of Harmony</h2>
        <p class="detail-card-desc">In this Heartopia event, water the Tree daily and resonate with others to earn Harmony Energy Gems.</p>
        <div class="detail-elements">
          <span v-for="el in elements" :key="el.name" class="detail-element" :style="{ '--el-color': el.color }">
            <i class="detail-element-dot"></i>{{ el.name }}
          </span>
        </div>
        <div class="detail-two-col">
          <div>
            <h3>Daily</h3>
            <ul class="detail-list">
              <li>Water the Tree of Harmony</li>
              <li>Mane Six quests (gardening, fishing, crafting)</li>
              <li>Resonate with others for gems</li>
              <li>Progress story chapters</li>
            </ul>
          </div>
          <div>
            <h3>Milestone rewards</h3>
            <div class="detail-tags">
              <span>Faster crop growth (server)</span>
              <span>Bonus gacha tokens (server)</span>
              <span>Cutie Mark accessories</span>
              <span>Equestrian home decor</span>
            </div>
          </div>
        </div>
      </section>

      <section class="detail-card detail-card--gacha">
        <h2 class="detail-card-title">Mane Six Gacha</h2>
        <p class="detail-card-desc">This Heartopia event uses no-duplicate pools. Pull the vehicle to get all remaining items in that pool.</p>
        <div class="detail-ponies">
          <div v-for="p in maneSix" :key="p.name" class="detail-pony">
            <span class="detail-pony-avatar">{{ p.initial }}</span>
            <div class="detail-pony-info">
              <strong>{{ p.name }}</strong>
              <span class="detail-pony-meta">{{ p.element }} · {{ p.vehicle }}</span>
              <span class="detail-pony-note">5 outfit pieces · Max 360 tickets</span>
            </div>
          </div>
        </div>
        <p class="detail-card-note">Max 360 per pool · Total 2160 · Best case ~210 tickets if vehicle pulled early · 3600 Pink Hearts per pool</p>
      </section>

      <div class="detail-highlights">
        <section class="detail-highlight">
          <h3>Harmony Car</h3>
          <p>Collect all 6 vehicles (Wings of Harmony, Rainbow Scooter, Party Balloon, Apple Cart, Jeweled Carriage, Butterfly Companion) to unlock the rainbow mount.</p>
        </section>
        <section class="detail-highlight">
          <h3>Spike Pet Costume</h3>
          <p>Complete all pre-event daily puzzles (Feb 7–14) to get the limited Spike pet costume in this Heartopia event.</p>
        </section>
      </div>

      <section class="detail-card detail-card--promo">
        <h2 class="detail-card-title">Promo code</h2>
        <div class="detail-promo-row">
          <code class="detail-promo-code">mylittlepony</code>
          <button type="button" class="detail-promo-btn" @click="copyCode('mylittlepony')">
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <p class="detail-promo-reward">Heartopia event promo: Moonlight Crystals · Redeem in Settings → Redeem Code. For more Heartopia codes see the <a href="/codes">Gift Codes</a> page.</p>
      </section>

      <section class="detail-card detail-card--tips">
        <h2 class="detail-card-title">Tips</h2>
        <ul class="detail-tips">
          <li>Save Acorn currency before the Heartopia event — collecting all ponies is costly.</li>
          <li>Don’t miss pre-event puzzle days for the Spike costume in this Heartopia event.</li>
          <li>No-duplicate gacha: every pull gets you closer; pull the vehicle early and the rest are free.</li>
          <li>Water the Tree daily and resonate for extra Heartopia event rewards.</li>
          <li>Mane Six daily quests give Friendship Tokens for the Heartopia event shop.</li>
          <li>Focus one gacha pool at a time to finish a set.</li>
          <li>Join group activities for server-wide milestone buffs during the Heartopia Event.</li>
        </ul>
        <p class="detail-card-more">For more game tips, the <a href="/">home page</a>, <a href="/wiki">Wiki</a> (e.g. <a href="/wiki/recipes">recipes</a>, <a href="/wiki/fish">fish</a>), and <a href="/characters">Characters</a> are useful.</p>
      </section>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { getLocalizedPath } = useLocalizedPath()
const eventStatus = 'ongoing'
function statusLabel(s) {
  return s === 'ongoing' ? 'Ongoing' : s === 'expired' ? 'Expired' : 'Upcoming'
}
const eventStatusLabel = computed(() => statusLabel(eventStatus))

const copied = ref(false)
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

const elements = [
  { name: 'Honesty', color: '#e8a84a' },
  { name: 'Generosity', color: '#9b6b9b' },
  { name: 'Loyalty', color: '#5a7fd6' },
  { name: 'Kindness', color: '#e8c84a' },
  { name: 'Laughter', color: '#e88ab0' },
  { name: 'Magic', color: '#c0a030' },
]

const maneSix = [
  { name: 'Twilight Sparkle', initial: 'T', element: 'Magic', vehicle: 'Wings of Harmony' },
  { name: 'Rainbow Dash', initial: 'R', element: 'Loyalty', vehicle: 'Rainbow Scooter' },
  { name: 'Pinkie Pie', initial: 'P', element: 'Laughter', vehicle: 'Party Balloon' },
  { name: 'Applejack', initial: 'A', element: 'Honesty', vehicle: 'Apple Cart' },
  { name: 'Rarity', initial: 'R', element: 'Generosity', vehicle: 'Jeweled Carriage' },
  { name: 'Fluttershy', initial: 'F', element: 'Kindness', vehicle: 'Butterfly Companion' },
]
</script>

<style scoped>
.detail {
  padding: 0 0 4rem;
}

.detail-hero {
  margin-bottom: 2.5rem;
  padding: 2rem 1.75rem;
  border-radius: 20px;
  background: linear-gradient(145deg, #f5f0fa 0%, #faf5fc 100%);
  border: 1px solid rgba(155, 107, 155, 0.12);
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
  background: rgba(155, 107, 155, 0.2);
  color: #6b4f7b;
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
.detail-body .detail-card--pre {
  grid-column: span 1;
}
.detail-body .detail-card--tree,
.detail-body .detail-card--gacha,
.detail-body .detail-card--promo,
.detail-body .detail-card--tips {
  grid-column: 1 / -1;
}
.detail-body .detail-highlights {
  grid-column: 1 / -1;
}
@media (max-width: 1024px) {
  .detail-body {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .detail-body .detail-card--info,
  .detail-body .detail-card--pre,
  .detail-body .detail-card--tree,
  .detail-body .detail-card--gacha,
  .detail-body .detail-card--promo,
  .detail-body .detail-card--tips,
  .detail-body .detail-highlights {
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
  .detail-card-lead,
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
  .detail-list,
  .detail-tips {
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
.detail-card--pre { border-left-color: #9b6b9b; }
.detail-card--tree { border-left-color: #7a9b6b; }
.detail-card--gacha { border-left-color: #b87a9b; }
.detail-card--promo { border-left-color: var(--color-primary); }
.detail-card--tips { border-left-color: var(--color-text-muted); }

.detail-card-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}
.detail-card-lead,
.detail-card-desc {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0 0 0.75rem;
  line-height: 1.5;
}
.detail-card-note {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 1rem 0 0;
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

.detail-list {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.detail-list li { margin-bottom: 0.25rem; }

.detail-elements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}
.detail-element {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-text);
  font-weight: 500;
}
.detail-element-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--el-color);
  flex-shrink: 0;
}

.detail-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.detail-two-col h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}
.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.detail-tags span {
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  background: rgba(139, 189, 155, 0.12);
  font-size: 0.8rem;
  color: var(--color-text-soft);
}
@media (max-width: 520px) {
  .detail-two-col { grid-template-columns: 1fr; }
}

.detail-ponies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 720px) {
  .detail-ponies { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .detail-ponies { grid-template-columns: 1fr; }
}
.detail-pony {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  background: rgba(74, 85, 104, 0.04);
}
.detail-pony-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9b6b9b, #7a5a8a);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.detail-pony-info {
  min-width: 0;
}
.detail-pony-info strong {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}
.detail-pony-meta {
  font-size: 0.78rem;
  color: var(--color-primary-dark);
}
.detail-pony-note {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  display: block;
  margin-top: 0.2rem;
}

.detail-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 520px) {
  .detail-highlights { grid-template-columns: 1fr; }
}
.detail-highlight {
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(248, 251, 250, 0.9), rgba(252, 248, 252, 0.9));
  border: 1px solid rgba(139, 189, 155, 0.15);
}
.detail-highlight h3 {
  font-size: 0.95rem;
  margin: 0 0 0.4rem;
}
.detail-highlight p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-soft);
  line-height: 1.5;
}

.detail-promo-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.detail-promo-code {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(74, 85, 104, 0.08);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.detail-promo-btn {
  padding: 0.45rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary-dark);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
}
.detail-promo-btn:hover {
  background: rgba(139, 189, 155, 0.12);
}
.detail-promo-reward {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}

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
