<template>
  <header class="header-component">
    <div class="left-container">
      <div class="website-logo">
        <img src="~/assets/img/logo.png">
      </div>
    </div>
    <div class="right-container">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/antagonists/nintendo">
              Nintendo
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/antagonists/xbox">
              Xbox
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">
              Blog
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

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
      min-width: 650px;
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
