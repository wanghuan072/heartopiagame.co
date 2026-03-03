<script setup>
import { useLocalizedPath } from '@/composables/useLocalizedPath'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
const { getLocalizedPath } = useLocalizedPath()
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <nav v-if="breadcrumbs.length" class="page-breadcrumb" aria-label="Breadcrumb">
        <span v-for="(c, idx) in breadcrumbs" :key="idx" class="page-breadcrumb-item">
          <a v-if="c.to" :href="getLocalizedPath(c.to)" class="page-crumb">{{ c.label }}</a>
          <span v-else class="page-crumb-current">{{ c.label }}</span>
          <span v-if="idx !== breadcrumbs.length - 1" class="page-crumb-sep">›</span>
        </span>
      </nav>

      <p v-if="eyebrow" class="page-eyebrow">{{ eyebrow }}</p>
      <h1 class="page-title">{{ title }}</h1>
      <p v-if="description" class="page-desc">{{ description }}</p>

      <div v-if="$slots.meta" class="page-meta">
        <slot name="meta" />
      </div>

      <div v-if="$slots.default" class="page-extra">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 3.25rem 0 2.25rem;
  background: linear-gradient(180deg, #f2fbff 0%, #fff9f6 100%);
  border-bottom: 1px solid rgba(74, 85, 104, 0.08);
}

.page-breadcrumb {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 0.9rem;
}

.page-crumb {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.page-crumb:hover {
  text-decoration: underline;
}

.page-crumb-sep {
  margin: 0 0.35rem;
  opacity: 0.8;
}

.page-crumb-current {
  color: var(--color-text-soft);
  font-weight: 500;
}

.page-eyebrow {
  display: inline-block;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(139, 189, 155, 0.14);
  color: var(--color-primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
}

.page-title {
  margin: 0 0 0.6rem;
  font-size: clamp(1.65rem, 3.8vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.page-desc {
  max-width: 680px;
  color: var(--color-text-soft);
  margin: 0;
  line-height: 1.55;
}

.page-meta {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

.page-meta :deep(span)::before {
  content: '•';
  margin-right: 0.35rem;
  color: var(--color-primary);
}

.page-meta :deep(span:first-child)::before {
  content: '';
  margin-right: 0;
}

.page-extra {
  margin-top: 1rem;
}
</style>

