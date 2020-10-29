<template>
  <article class="card-component">
    <div class="left-container">
      <img :src="getImgSrc()" :alt="imgName">
    </div>
    <div class="right-container">
      <div v-if="isBlogPost" class="card-header">
        <h3>{{ postTitle }}</h3>
        <p>{{ postDate }}</p>
      </div>
      <p class="card-extract">
        {{ extract }}
      </p>
      <div v-if="!isBlogPost" class="button-container">
        <Button :text="buttonText" :link="link" />
      </div>
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
      buttonText: 'Go to Nintendo',
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
    }
  }
</style>
