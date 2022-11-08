<template>
  <div>
    <div class="relative">
      <video
        :id="id"
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
   <div class="tmJskDashBoard tmJskButton">
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskStart')"
        @click="tmJskStart"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskStop')"
        @click="tmJskStop"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskPause')"
        @click="tmJskPause"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskSpeedUp')"
        @click="tmJskSpeedUp"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskSpeedDown')"
        @click="tmJskSpeedDown"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskInclineUp')"
        @click="tmJskInclineUp"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskInclineDown')"
        @click="tmJskInclineDown"
      />
      <ft-button
        :label="$t('Treadmill.tmButton.tmJskInclineStop')"
        @click="tmJskInclineStop"
      />
   </div>
   <div>
      <div class="tmJskDashBoard tmJskSpeedGauge">
          <vue-svg-gauge
          :start-angle="-110"
          :end-angle="110"
          :value="speedGaugeValue"
          :separator-step="0"
          :min="0"
          :max="20"
          gauge-color="darkgreen"
          :scale-interval="2.0"
          />

        </div>     
        <div class="tmJskDashBoard tmJskInclineGauge">
          <vue-svg-gauge
          :start-angle="-110"
          :end-angle="110"
          :value="inclineGaugeValue"
          :separator-step="0"
          :min="0"
          :max="10"
          gauge-color="gold"
          :scale-interval="1"
          />
      </div>
      <div class="tmJskDashBoard tmJskSetSpeed">{{txtTmSetSpeed}}</div>
      <div class="tmJskDashBoard tmJskOutSpeed">{{txtTmOutSpeed}}</div>
      <div class="tmJskDashBoard tmJskSetTime">{{txtTmSetTime}}</div>
      <div class="tmJskDashBoard tmStopWatch">
      <div class="svgSpeedValueText">{{speedGaugeValueText}}</div>
      <div class="svgSpeedValueText svgSpeedKPH">[km/hour]</div>
      <div class="svgInclineValueText">{{inclineGaugeValueText}}</div>
      <stopwatch
        ref="stopWatch"
        class="digits"
        hours="false"
        minutes
        @tmStart="setStartTime"
        @tmStop="setStopTime"
        @tmLap="setLapTime"
      />
    </div>
  </div>
</div>
</template>

import FtAutoGrid from '../ft-auto-grid/ft-auto-grid.vue';
<script src="./ft-video-player.js" />
<style scoped src="./ft-video-player.css" />
