import Vue from 'vue'
import FtCard from '../../components/ft-card/ft-card.vue'
import FtFlexBox from '../../components/ft-flex-box/ft-flex-box.vue'
import FtSlider from '../../components/ft-slider/ft-slider.vue'
import FtToggleSwitch from '../../components/ft-toggle-switch/ft-toggle-switch.vue'
import FtRadioButton from '../../components/ft-radio-button/ft-radio-button.vue'
import {tmParameter} from '../../store/modules/utils.js'

import {GChart} from 'vue-google-charts/legacy'

const chartData1 = [
  [ "time", "Speed","Incline"],
  [ 0.00,  4.0, 0],
  [ 2.00,  4.0, 0],
  [ 2.01, 15.0, 3],
  [ 2.50, 15.0, 3],
  [ 2.51,  4.0, 0],
  [ 4.50,  4.0, 0],
  [ 4.51, 15.0, 3],
  [ 5.00, 15.0, 3],
  [ 5.01,  4.0, 0],
  [ 7.00,  4.0, 0],
  [ 7.01, 15.0, 3],
  [ 7.50, 15.0, 3],
  [ 7.51,  4.0, 0],
  [ 9.50,  4.0, 0],
  [ 9.51, 15.0, 3],
  [10.00, 15.0, 3],
  [10.01,  4.0, 0],
  [12.00,  4.0, 0],
  [12.01, 15.0, 3],
  [12.50, 15.0, 3],
  [12.51,  4.0, 0],
  [14.50,  4.0, 0],
  [14.51, 15.0, 3],
  [15.00, 15.0, 3],
  [15.01,  4.0, 0],
  [17.00,  4.0, 0],
  [17.01, 15.0, 3],
  [17.50, 15.0, 3],
  [17.51,  4.0, 0],
  [19.50,  4.0, 0]
]

export default Vue.extend({
  name: 'treadmill',
  components: {
    'ft-card': FtCard,
    'ft-flex-box': FtFlexBox,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-slider': FtSlider,
    'ft-radio-button': FtRadioButton,
    GChart
  },
  data: function () {
    return {
//      tmParam:[],
      tmRunMode:        '',
      tmTimeSpeedMode:  '',
      tmIntervalMode:   '',
      tmProgramMode:    '',
      tmIntervalData1: chartData1,
      // programTable1:[],  
      chartOptions1: {
         title: 'Company Performance',
      },
      tmRadioValues: [
        'TimeAndSpeed',
        'IntervalNormal',
        'ProgramNormal'
      ]
    }   
  }, 
  created: function () {
   
    const tmParam = this.$store.getters.getTmParameter      
    console.log(tmParam)

    this.tmRunMode        = tmParam.tmRunMode
    this.tmTimeSpeedMode  = tmParam.tmTimeSpeedMode
    this.tmIntervalMode   = tmParam.tmIntervalMode    
    this.tmProgramMode    = tmParam.tmScheduleMode    
  },

  computed: {
    getMode_Run: function(){
      const var1 = this.$store.getter.getTmParameter
      return var1.tmRunMode
    },
    get_ProgramData0: function(){
      const var1 = this.$store.getters.getTmParameter.program[0]      
      return var1
    },
    get_ProgramData1: function(){
      const var1 = this.$store.getters.getTmParameter.program[1]      
      return var1
    },
    get_ProgramData2: function(){
      const var1 = this.$store.getters.getTmParameter.program[2]      
      return var1
    },
    get_ProgramData3: function(){
      const var1 = this.$store.getters.getTmParameter.program[3]      
      return var1
    },
    get_ProgramData4: function(){
      const var1 = this.$store.getters.getTmParameter.program[4]      
      return var1
    },

    getMode_TimeSpeed: function(){
      const var1 = this.$store.getter.getTmParameter
      return var1.tmTimeSpeedMode
    },
 
    getTime_TimeSpeed: function () {
      const mode = this.$store.getters.getTmParameter.tmTimeSpeedMode
      const var1 = this.$store.getters.getTmParameter      
      return var1.timeSpeed.tmTime[mode]
    },
    getSpeed_TimeSpeed: function () {
      const mode = this.$store.getters.getTmParameter.tmTimeSpeedMode
      const var1 = this.$store.getters.getTmParameter
      return var1.timeSpeed.tmSpeed[mode]
    },    
    getIncline_TimeSpeed: function () {
      const mode = this.$store.getters.getTmParameter.tmTimeSpeedMode
      const var1 = this.$store.getters.getTmParameter
      return var1.timeSpeed.tmIncline[mode]
    },

//--- get Interval parameter
    getMode_Interval: function () {
      return this.$store.getters.getTmParameter.tmIntervalMode
    },
    getTimeLow_Interval: function () {
      const mode = this.$store.getters.getTmParameter.tmIntervalMode
      return this.$store.getters.getTmParameter.interval.tmTimeLow[mode]
    },
    getTimeHigh_Interval: function () {
      const mode = this.$store.getters.getTmParameter.tmIntervalMode
      return this.$store.getters.getTmParameter.interval.tmTimeHigh[mode]
    },
    getSpeedHigh_Interval: function () {
      const mode = this.$store.getters.getTmParameter.tmIntervalMode
      return this.$store.getters.getTmParameter.interval.tmSpeedHigh[mode]
    },
    getIncline_Interval: function () {
      const mode = this.$store.getters.getTmParameter.tmIntervalMode
      return this.$store.getters.getTmParameter.interval.tmIncline[mode]
    },

    getMode_Program: function () {
      return this.$store.getters.getTmParameter.tmScheduleMode
    },

    tmRadioLabeles: function () {
      return[
        this.$t('Treadmill.Select Run.TimeAndSpeed'),
        this.$t('Treadmill.Select Run.IntervalNormal'),
        this.$t('Treadmill.Select Run.ProgramNormal'),
      ]
    }
  },  

  methods: {
    updateRunType: function (value) {
      this.$store.commit('set_tmRunMode', value)
      // console.log(value)
    },  

//--- Time and Speed
    updateMode_TimeAndSpeed: function (value) {
      this.$store.commit('setMode_TimeSpeed', value)
    },  
    updateTime_TimeSpeed: function (value) {
      this.$store.commit('setTime_TimeSpeed', value)
    },  
    updateSpeed_TimeSpeed: function (value) {
      this.$store.commit('setSpeed_TimeSpeed', value)
    },  
    updateIncline_TimeSpeed: function (value) {
      this.$store.commit('setIncline_TimeSpeed', value)
    },  
//--- interval
    updateTimeLow_Interval: function (value) {
      this.$store.commit('setTimeLow_Interval', value)
    },  
    updateTimeHigh_Interval: function (value) {
      this.$store.commit('setTimeHigh_Interval', value)
    },  
    updateSpeedHigh_Interval: function (value) {
      this.$store.commit('setSpeedHigh_Interval', value)
    },  
    updateIncline_Interval: function (value) {
      this.$store.commit('setIncline_Interval', value)
    },  

//--- Program    
    updateMode_Program: function (value) {
      this.$store.commit('setMode_Program', value)
    },  
    updateTable_ProgramRun: function (value) {
      this.$store.commit('setTable_Program', value)
    }  
  }
})
