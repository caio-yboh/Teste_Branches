<template>
  <div>
    <!-- <div class="title">
      <slot name="title"></slot>
      <span>
        <slot style="#ccc" name="subtitle"></slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div> -->
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
        <div class="panel-body quote">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      quote: String
    },
    created() {
      console.log('Component Quote Created!')
    },
    destroyed() {
      console.log('Component Quote Destroyed!')
    },
    deactivated() {
      console.log('Component Quote Deactivated!');
    },
    activated() {
      console.log('Component Quote Activated!');
    }
  }
</script>

<style scoped>
  /* div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  .title {
    font-style: italic;
  }
  h2 {
    color: red;
  } */
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }
  .quote {
    cursor: pointer;
  }
  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
