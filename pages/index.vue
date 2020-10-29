<template>
  <section class="home-page-container">
    <div class="cards-container">
      <Card />
      <Card />
      <div class="blog-section">
        <p>Want to more ?</p>
        <Button link="/blog" text="Go to blogs" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .home-page-container {
    .cards-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      .separation-line {
        width: 100%;
      }
      .blog-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        background-color: black;
        color: white;
        width: 100%;
        p {
          font-size: 30px;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
