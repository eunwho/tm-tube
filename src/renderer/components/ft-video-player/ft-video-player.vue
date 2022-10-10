<template>
  <div>
  <div class="relative">
    <video
      ref="video"
      class="ftVideoPlayer video-js vjs-default-skin dark"
      :poster="thumbnail"
      controls
      preload="auto"
      :data-setup="JSON.stringify(dataSetup)"
      crossorigin="anonymous"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <source
        v-for="(source, index) in activeSourceList"
        :key="index + '_source'"
        :src="source.url"
        :type="source.type || source.mimeType"
        :label="source.qualityLabel"
        :selected="source.qualityLabel === selectedDefaultQuality"
      >
    </video>
  </div>
      <div class="jsk-video-wrap" id="jsk-video-wrap">
        <a href="#" @click="jskVideoFunc1(1)"><div></div></a>
        <a href="#" @click="jskVideoFunc1(2)"><div></div></a>
        <a href="#" @click="jskVideoFunc1(3)"><div></div></a>
        <a href="#" @click="jskVideoFunc1(4)"><div></div></a>
        <a href="#" @click="jskVideoFunc1(5)"><div></div></a>
    </div>
    <div id='jsk-video-msg'>{{jsk_msg}}</div>
  </div>
</template>

<script src="./ft-video-player.js" />
<style scoped src="./ft-video-player.css" />
