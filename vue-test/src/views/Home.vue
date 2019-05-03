<template>
    <router-view class="content-container"/>
</template>


<style lang="scss">
@import '../styles/common';

.content-container {
    position: absolute;
    left: $side-bar-w;
    top: $top-bar-h;
    height: calc(100vh - #{$top-bar-h});
    width: calc(100vw - #{$side-bar-w});
    border: 1px solid red;
}
</style>
