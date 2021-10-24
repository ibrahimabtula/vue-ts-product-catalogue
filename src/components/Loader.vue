<template>
  <div class="custom-loader">
    <span />
  </div>
</template>

<style lang="scss" scoped>
@mixin is-absolute() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom-loader {
  font-size: 3rem;
  &.is-centered {
    text-align: center;
    margin: auto;
  }

  @include is-absolute();

  & > span {
    display: inline-block;
    width: 1em;
    height: 1em;

    &:after {
      content: "";
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: 0.12em solid rgba(0, 0, 0, 0.15);
      border-top-color: #1c2835;
      border-top-color: #1c2835;
      animation: loading 0.666s linear infinite;
      box-sizing: border-box;
    }
  }

  & span {
    margin: 1.5rem;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>