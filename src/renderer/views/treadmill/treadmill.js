import Vue from 'vue'
import FtCard from '../../components/ft-card/ft-card.vue'
import FtFlexBox from '../../components/ft-flex-box/ft-flex-box.vue'
import FtSlider from '../../components/ft-slider/ft-slider.vue'
import FtToggleSwitch from '../../components/ft-toggle-switch/ft-toggle-switch.vue'
import FtRadioButton from '../../components/ft-radio-button/ft-radio-button.vue'
import FtButton from '../../components/ft-button/ft-button.vue'
//import {tmParameter} from '../../store/modules/utils.js'
import fs from 'fs'
import path from 'path'

import {GChart} from 'vue-google-charts/legacy'

const fileLocation = './eunwhoPE.json.bk'
const fileLocation1 = './eunwhoPE.json'

const tmParam = JSON.parse(fs.readFileSync(fileLocation1))

const testJsk = JSON.parse(fs.readFileSync(fileLocation))
console.log(testJsk)

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

function googleGrapData( params){
      
  var varPre    =[]
  var varOut    =[]
  var varReturn =[]

  varReturn.push(['Time','Speed','Incline'])
  varReturn.push(params[1])

  let i = 0
  for( const param of params ){
    i++
    if( i == 1 ) {
      varPre = param
    } else {
      varOut =[]
      varOut.push(param[0] - 0.2)
      varOut.push(varPre[1])
      varOut.push(varPre[2])
 
      varPre = param
      varReturn.push(varOut)
      varReturn.push(param)
    }
  }
  return varReturn
}

export default Vue.extend({
  name: 'treadmill',
  components: {
    'ft-card': FtCard,
    'ft-flex-box': FtFlexBox,
    'ft-button': FtButton,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-slider': FtSlider,
    'ft-radio-button': FtRadioButton,
    GChart
  },
  data: function () {
    return {

      tmRunMode:        tmParam.tmRunMode,
      tmTimeSpeedMode:  tmParam.tmTimeSpeedMode,
      tmIntervalMode:   tmParam.tmIntervalMode,
      tmProgramMode:    tmParam.tmScheduleMode,
      tmIntervalData1:  chartData1,
      chartOptions1: {
         title: 'Eunwho Power TMI Course',
         curveType:'function'
      }
    }   
  }, 
  computed: {
    getMode_Run: function(){
      return tmParam.tmRunMode
    },

    get_ProgramData0: function(){
      const arg1 = tmParam.program.program0      
      return googleGrapData(arg1)
    },
    get_ProgramData1: function(){
      const arg1 = tmParam.program.program1      
      return googleGrapData(arg1)
    },
    get_ProgramData2: function(){
      const arg1 = tmParam.program.program2      
      return googleGrapData(arg1)
    },
    get_ProgramData3: function(){
      const arg1 = tmParam.program.program3      
      return googleGrapData(arg1)
    },
    get_ProgramData4: function(){
      const arg1 = tmParam.program.program4      
      return googleGrapData(arg1)
    },

    getMode_TimeSpeed: function(){
      return tmParam.tmTimeSpeedMode
    },
//--- Time Speed Beginner 
    getTime_TimeSpeed_Beginner: function () {
      return tmParam.timeSpeed.tmTime[0]
    },
    getSpeed_TimeSpeed_Beginner: function () {
      return tmParam.timeSpeed.tmSpeed[0]
    },    
    getIncline_TimeSpeed_Beginner: function () {
      return tmParam.timeSpeed.tmIncline[0]
    },
//--- timespeed Normal
    getTime_TimeSpeed_Normal: function () {
      return tmParam.timeSpeed.tmTime[1]
    },
    getSpeed_TimeSpeed_Normal: function () {
      return tmParam.timeSpeed.tmSpeed[1]
    },    
    getIncline_TimeSpeed_Normal: function () {
      return tmParam.timeSpeed.tmIncline[1]
    },
//--- time Speed Pro
    getTime_TimeSpeed_Pro: function () {
      return tmParam.timeSpeed.tmTime[2]
    },
    getSpeed_TimeSpeed_Pro: function () {
      return tmParam.timeSpeed.tmSpeed[2]
    },    
    getIncline_TimeSpeed_Pro: function () {
      return tmParam.timeSpeed.tmIncline[2]
    },

//--- get Interval parameter

    getMode_Interval: function () {
      return tmParam.tmIntervalMode
    },
    getTimeLow_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmTimeLow[mode]
    },
    getTimeHigh_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmTimeHigh[mode]
    },
    getSpeedLow_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmSpeedLow[mode]
    },
    getSpeedHigh_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmSpeedHigh[mode]
    },
    getInclineHigh_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmInclineHigh[mode]
    },
    getInclineLow_Interval: function () {
      const mode = tmParam.tmIntervalMode
      return tmParam.interval.tmInclineLow[mode]
    }
  },  
  methods: {
    saveDataSettings: function(){
      const tmParamSave = JSON.stringify(tmParam)
      fs.writeFileSync(fileLocation1, tmParamSave)
//      fs.readFileSync(fileLocation)
//      const testJsk = JSON.parse(fs.readFileSync(fileLocation))
//      console.log(testJsk)       
    },
    updateRunType: function (arg1) {
      tmParam.tmRunMode = arg1.target.value * 1.0
    },  
//--- Time and Speed
    updateMode_TimeSpeed: function (arg1) {
      tmParam.tmTimeSpeedMode = arg1.target.value * 1.0
    },  
    updateTime_TimeSpeed_Beginner: function (arg1) {
      tmParam.timeSpeed.tmTime[0] = arg1
    },  
    updateSpeed_TimeSpeed_Beginner: function (arg1) {
      tmParam.timeSpeed.tmSpeed[0] = arg1
    },  
    updateIncline_TimeSpeed_Beginner: function (arg1) {
      tmParam.timeSpeed.tmIncline[0] = arg1
    },  
//--- TimeSpeed Normal
    updateTime_TimeSpeed_Normal: function (arg1) {
      tmParam.timeSpeed.tmTime[1] = arg1
    },  
    updateSpeed_TimeSpeed_Normal: function (arg1) {
      tmParam.timeSpeed.tmSpeed[1] = arg1
    },  
    updateIncline_TimeSpeed_Normal: function (arg1) {
      tmParam.timeSpeed.tmIncline[1] = arg1
    },  
//---
    updateTime_TimeSpeed_Pro: function (arg1) {
      tmParam.timeSpeed.tmTime[2] = arg1
    },  
    updateSpeed_TimeSpeed_Pro: function (arg1) {
      tmParam.timeSpeed.tmSpeed[2] = arg1
    },  
    updateIncline_TimeSpeed_Pro: function (arg1) {
      tmParam.timeSpeed.tmIncline[mode] = arg1
    },  
//--- interval
    updateMode_Interval: function (arg1) {
      tmParam.tmIntervalMode = arg1.target.value * 1.0
    },  
    updateTimeLow_Interval: function (arg1) {
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmTimeLow[mode] = arg1
    },  
    updateTimeHigh_Interval: function (arg1) {
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmTimeHigh[mode] = arg1
    },  
    updateSpeedLow_Interval: function (arg1){
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmSpeedLow[mode] = arg1
    },  
    updateSpeedHigh_Interval: function (arg1){
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmSpeedHigh[mode] = arg1
    },  
    updateInclineHigh_Interval: function (arg1) {
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmInclineHigh[mode] = arg1
    },  
    updateInclineLow_Interval: function (arg1) {
      const mode = tmParam.tmIntervalMode
      tmParam.interval.tmInclineLow[mode] = arg1
    },  

//--- Program    
    updateMode_Program: function (arg1) {
      tmParam.tmScheduleMode = arg1.target.value * 1.0
    },  
    updateTable_ProgramRun: function (arg1) {
      const mode = tmParam.tmScheduleMode
      switch(mode){
        case 0: 
          tmParam.program.program0 = arg1
          break
        case 1: 
          tmParam.program.program1 = arg1
          break
        case 2: 
          tmParam.program.program2 = arg1
          break
        case 3: 
          tmParam.program.program3 = arg1
          break
        case 4: 
          tmParam.program.program4 = arg1
          break
      }
    }  
  }
})
