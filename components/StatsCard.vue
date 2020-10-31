<template>
  <section class="stats-card-main-container">
    <h3>Top 5 company achievements</h3>
    <div class="stats-card-component-container">
      <div class="stats-card-list-component">
        <ul>
          <li v-for="stat in stats" :key="stat">
            {{ stat }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .stats-card-main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    h3 {
      margin-bottom: 5px;
    }
    .stats-card-component-container {
      width: 350px;
      .stats-card-list-component {
      width: 100%;
      background-color: $primary-color;
      border: 1px solid $tertiary-color;
      border-spacing: 3px;
      padding: 0.2em;
      line-height: 1.5em;
      ul {
        list-style-type: decimal;
        li {
          margin-bottom: 5px;
        }
      }
    }
  }
}

</style>
