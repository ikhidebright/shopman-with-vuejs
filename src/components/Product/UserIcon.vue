<template>
  <a
    href="https://www.jumia.com.ng/cart/"
    class="osh-btn -plain -cart -jewel"
    data-js-event="non"
    data-js-element="#cart"
  >
    <i class="fas fa-user" style="font-size: 25px"></i>
  </a>
</template>


<script>
export default {
  name: "Header",
  props: ["cartcount"],
};
</script>

<style>
.osh-btn {
  text-transform: uppercase;
  background: #f68b1e;
  border: 1px solid #f68b1e;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 12px;
  font-style: normal;
  line-height: 1.42857;
  padding: 5px;
  position: relative;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
}
a.osh-btn {
  color: #fff;
}
.osh-btn.-plain {
  padding-left: 0;
  padding-right: 0;
  background-color: transparent;
  color: #6e6e6e;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  text-transform: capitalize;
  text-align: left;
}
.osh-btn.-plain.-cart .osh-font-cart {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 30px;
  color: #1b1919;
  vertical-align: bottom;
}
.osh-btn > .additional-content,
.osh-btn > .label,
.osh-btn > .sub-label,
.osh-btn > i {
  display: inline-block;
  vertical-align: middle;
  line-height: 1.42857;
}
[class*=" osh-font-"],
[class^="osh-font-"] {
  font-family: oshfont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  text-transform: none;
  display: inline-block;
  visibility: hidden;
}
.osh-btn.-plain.-cart > .label {
  line-height: 1.2em;
}
.osh-btn.-plain.-cart > .label {
  font-size: 12px;
  line-height: 1.1em;
  background: #f99047;
  padding: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: -1px;
  left: 13px;
  color: #fff;
  min-width: 22px;
  min-height: 22px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1px;
  text-indent: -1px;
}
.header-main > .actions > .osh-dropdown .label {
  display: block;
}
</style>