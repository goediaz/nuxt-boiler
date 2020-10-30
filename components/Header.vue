<template>
  <header class="header-component">
    <div class="left-container">
      <div class="website-logo">
        <img src="~/assets/img/logo.png" alt="logo">
      </div>
    </div>
    <div class="right-container">
      <nav>
        <ul>
          <li v-for="item in headerData" :key="item.name">
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      headerData: this.formatHeaderData()
    }
  },
  methods: {
    formatHeaderData () {
      return [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Nintendo',
          link: '/antagonists/nintendo'
        },
        {
          name: 'Xbox',
          link: '/antagonists/xbox'
        },
        {
          name: 'Blog',
          link: '/blog'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    background-color: $primary-color;
    min-height: 60px;
    max-height: 60px;
    display: flex;
    flex-direction: row;
    width: 100%;
    .left-container {
        display: flex;
        width: 30%;
        align-content: center;
        min-width: 70px;
      .website-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 5px;
        img {
          height: 50px;
        }
      }
    }
    .right-container {
      width: 70%;
      nav {
        height: 100%;
        ul {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          list-style-type: none;
          height: 100%;
          li {
            flex: 1;
            text-align: center;
            a {
              font-size: 20px;
              text-align: center;
              cursor: pointer;
              text-decoration: none;
              color: $font-color;
              &:hover {
              color: grey;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
