import Vue from 'vue'
import FtCard from '../../components/ft-card/ft-card.vue'
import FtFlexBox from '../../components/ft-flex-box/ft-flex-box.vue'
import FtSlider from '../../components/ft-slider/ft-slider.vue'
import FtToggleSwitch from '../../components/ft-toggle-switch/ft-toggle-switch.vue'
import FtRadioButton from '../../components/ft-radio-button/ft-radio-button.vue'

export default Vue.extend({
  name: 'treadmill',
  components: {
    'ft-card': FtCard,
    'ft-flex-box': FtFlexBox,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-slider': FtSlider,
    'ft-radio-button': FtRadioButton
  },
  data: function () {
    return {
      tmRadioValues: [
        'TimeAndSpeed',
        'IntervalNormal',
        'ProgramNormal'
      ]
    }   
  }, 
  computed: {
    getTime_TimeAndSpeedRun: function () {
      return this.$store.getters.getRunType.timeAndSpeed.time
    },
    getSpeed_TimeAndSpeedRun: function () {
      return this.$store.getters.getRunType.timeAndSpeed.speed
    },
    getTime_IntervalRun: function () {
      return this.$store.getters.getRunType.interval.time
    },
    getSpeed_IntervalRun: function () {
      return this.$store.getters.getRunType.interval.speed
    },
    getTime_ProgramRun: function () {
      return this.$store.getters.getRunType.program.time
    },
    getSpeed_ProgramRun: function () {
      return this.$store.getters.getRunType.program.speed
    },

    tmRadioLabeles: function () {
      return[
        this.$t('Treadmill.Select Run.TimeAndSpeed'),
        this.$t('Treadmill.Select Run.IntervalNormal'),
        this.$t('Treadmill.Select Run.ProgramNormal')
      ]
    }
  },  
  methods: {
    updateRunType: function (value) {
      // this.$store.commit('setRunType', value)
      console.log(value)
    },  
    updateTime_TimeAndSpeedRun: function (value) {
      this.$store.commit('setTime_TimeAndSpeedRun', value)
    },  
    updateSpeed_TimeAndSpeedRun: function (value) {
      this.$store.commit('setSpeed_TimeAndSpeedRun', value)
    },  
    updateTime_IntervalRun: function (value) {
      this.$store.commit('setTime_IntervalRun', value)
    },  
    updateSpeed_IntervalRun: function (value) {
      this.$store.commit('setSpeed_IntervalRun', value)
    },  
    updateTime_ProgramRun: function (value) {
      this.$store.commit('setTime_ProgramRun', value)
    },  
    updateSpeed_ProgramRun: function (value) {
      this.$store.commit('setSpeed_ProgramRun', value)
    }  
  }
})
