<template>
  <article class="card-component">
    <div class="left-container">
      <img :src="getImgSrc()" :alt="cardData.imgName">
    </div>
    <div class="right-container">
      <div v-if="cardData.isBlogPost" class="card-header">
        <h3>{{ cardData.postTitle }}</h3>
        <p>{{ cardData.postDate }}</p>
      </div>
      <p class="card-extract">
        {{ cardData.extract }}
      </p>
      <div v-if="!cardData.isBlogPost" class="button-container">
        <Button :text="cardData.buttonText" :link="cardData.buttonLink" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {},
      validation: (prop) => {
        return Object.prototype.hasOwnProperty.call(prop, 'buttonLink') && Object.prototype.hasOwnProperty.call(prop, 'imgName') && Object.prototype.hasOwnProperty.call(prop, 'buttonText') && Object.prototype.hasOwnProperty.call(prop, 'extract')
      },
      required: true
    }
  },
  methods: {
    getImgSrc () {
      return require(`../assets/img/${this.cardData.imgName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    border-bottom: 0.5px solid $tertiary-color;
    width: 100%;
    .left-container {
      display: flex;
      min-width: 20%;
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
        max-width: 900px;
      }
    }
  }
</style>
