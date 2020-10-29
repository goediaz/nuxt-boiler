<template>
  <article class="card-component">
    <div class="left-container">
      <img :src="getImgSrc()">
    </div>
    <div class="right-container">
      <div v-if="isBlogPost" class="card-header">
        <h3>{{ postTitle }}</h3>
        <p>{{ postDate }}</p>
      </div>
      <p class="card-extract">
        {{ extract }}
      </p>
      <nuxt-link v-if="!isBlogPost" :to="link">
        Go to Nintendo
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      link: '/antagonists/nintendo',
      isBlogPost: false,
      imgName: 'nintendo_logo',
      postTitle: 'Title',
      postDate: '20/12/2020',
      extract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  methods: {
    getImgSrc () {
      return require(`../assets/img/${this.imgName}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    display: flex;
    flex-direction: row;
    // margin: 0px 10px 0px 10px;
    text-align: center;
    flex: 1;
    border-bottom: 0.5px solid $tertiary-color;
    .left-container {
      display: flex;
      width: 30%;
      justify-content: center;
      align-items: center;
      img {
      height: 150px;
      }
    }
    .right-container {
      display: flex;
      flex-direction: column;
      text-align: initial;
      justify-content: center;
      margin-right: 5px;
      .card-header {
        display: flex;
        margin-bottom: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .card-extract {
        margin-bottom: 20px;
      }
      a {
        font-size: 18px;
        padding: 0.3em 1.2em;
        margin: 0 0.3em 0.3em 0;
        border-radius: 2em;
        text-decoration :none;
        font-weight: 300;
        background-color: $secondary-color;
        text-align: center;
        max-width: 165px;
        color: $button-font-color;
      }
    }
  }
</style>
