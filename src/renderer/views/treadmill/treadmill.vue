<template>
  <div>
  <div class="treadmillInner">
    
    <h1>{{ $t("Treadmill.Settings") }}</h1>
    <ft-button
        :label="$t('Treadmill.Save.Data Settings')"
        @click="saveDataSettings"
    />
    <h2> {{ $t('Treadmill.Select Run.TimeAndSpeed')}} </h2>
    <input type="radio" name="tmRadioRunMode" @click="updateRunType" value=0 v-model = "tmRunMode" >   
          {{ $t('Treadmill.Select Run.radioTimeSpeed')}}
    <div>
        <input type="radio" name="tmRadioTimeSpeed" @click="updateMode_TimeSpeed" value = 0 v-model = "tmTimeSpeedMode" >
            {{ $t('Treadmill.TimeSpeed.TimeSpeedBeginner')}}
          <p></p>
          <ft-slider
              :label="$t('Treadmill.TimeSpeed.Set Time Beginner')"
              :default-value="getTime_TimeSpeed_Beginner"
              :min-value="5"
              :max-value="90"
              :step="5"
              value-extension="min"
              @change="updateTime_TimeSpeed_Beginner"
          />
          <ft-slider
              :label="$t('Treadmill.TimeSpeed.Set Speed Beginner')"
              :default-value="getSpeed_TimeSpeed_Beginner"
              :min-value="1"
              :max-value="20"
              :step="1"
              value-extension="km/hour"
              @change="updateSpeed_TimeSpeed_Beginner"
          />
          <ft-slider
              :label="$t('Treadmill.TimeSpeed.Set Incline Beginner')"
              :default-value="getIncline_TimeSpeed_Beginner"
              :min-value="0"
              :max-value="5"
              :step="1"
              value-extension='°'
              @change="updateIncline_TimeSpeed_Beginner"
          />
    </div>    
    <div>
    <input type="radio" name="tmRadioTimeSpeed" @click="updateMode_TimeSpeed" value = 1 v-model = "tmTimeSpeedMode">
            {{ $t('Treadmill.TimeSpeed.TimeSpeedNormal')}}
    <p></p>
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Time Normal')"
        :default-value="getTime_TimeSpeed_Normal"
        :min-value="5"
        :max-value="90"
        :step="5"
        value-extension="min"
        @change="updateTime_TimeSpeed_Normal"
    />
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Speed Normal')"
        :default-value="getSpeed_TimeSpeed_Normal"
        :min-value="1"
        :max-value="20"
        :step="1"
        value-extension="km/hour"
        @change="updateSpeed_TimeSpeed_Normal"
    />
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Incline Normal')"
        :default-value="getIncline_TimeSpeed_Normal"
        :min-value="0"
        :max-value="5"
        :step="1"
        value-extension='°'
        @change="updateIncline_TimeSpeed_Normal"
    />
    </div>
    <div>
        <input type="radio" name="tmRadioTimeSpeed" @click="updateMode_TimeSpeed" value = 2 v-model = "tmTimeSpeedMode">
            {{ $t('Treadmill.TimeSpeed.TimeSpeedPro')}}
          <p></p>
        <ft-slider
            :label="$t('Treadmill.TimeSpeed.Set Time Pro')"
            :default-value="getTime_TimeSpeed_Pro"
            :min-value="5"
            :max-value="90"
            :step="5"
            value-extension="min"
            @change="updateTime_TimeSpeed_Pro"
        />
        <ft-slider
            :label="$t('Treadmill.TimeSpeed.Set Speed Pro')"
            :default-value="getSpeed_TimeSpeed_Pro"
            :min-value="1"
            :max-value="20"
            :step="1"
            value-extension="km/hour"
            @change="updateSpeed_TimeSpeed_Pro"
        />
        <ft-slider
            :label="$t('Treadmill.TimeSpeed.Set Incline Pro')"
            :default-value="getIncline_TimeSpeed_Pro"
            :min-value="0"
            :max-value="5"
            :step="1"
            value-extension='°'
            @change="updateIncline_TimeSpeed_Pro"
        />
    </div>
    <h2> {{ $t('Treadmill.Select Run.Interval')}} </h2>
    <input type="radio" name="tmRadioRunMode" @click="updateRunType" value=1 v-model= "tmRunMode">   
          {{ $t('Treadmill.Select Run.Interval')}}

          <p></p>
    <input type="radio" name="tmRadioInterval" @click="updateMode_Interval" value=0 v-model ="tmIntervalMode">
          {{ $t('Treadmill.Interval.IntervalBeginner')}}
    <input type="radio" name="tmRadioInterval" @click="updateMode_Interval" value=1 v-model ="tmIntervalMode">
          {{ $t('Treadmill.Interval.IntervalNormal')}}
    <input type="radio" name="tmRadioInterval" @click="updateMode_Interval" value=2 v-model ="tmIntervalMode">
          {{ $t('Treadmill.Interval.IntervalPro')}}
    <GChart
        type="LineChart"
        :data="tmIntervalData1"
        :options="chartOptions1"
    />  
    <ft-slider
        :label="$t('Treadmill.Interval.Interval LowTime')"
        :default-value="getTimeLow_Interval"
        :min-value="60"
        :max-value="120"
        :step="1"
        value-extension="(sec)"
        @change="updateTimeLow_Interval"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval HighTime')"
        :default-value="getTimeHigh_Interval"
        :min-value="30"
        :max-value="60"
        :step="1"
        value-extension="(sec)"
        @change="updateTimeHigh_Interval"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval LowSpeed')"
        :default-value="getSpeedLow_Interval"
        :min-value="4"
        :max-value="15"
        :step="1"
        value-extension="(km/hour)"
        @change="updateSpeedLow_Interval"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval HighSpeed')"
        :default-value="getSpeedHigh_Interval"
        :min-value="10"
        :max-value="20"
        :step="1"
        value-extension="(km/hour)"
        @change="updateSpeedHigh_Interval"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval LowIncline')"
        :default-value="getInclineLow_Interval"
        :min-value="10"
        :max-value="20"
        :step="1"
        value-extension='°'
        @change="updateInclineLow_Interval"
    />

    <ft-slider
        :label="$t('Treadmill.Interval.Interval HighIncline')"
        :default-value="getInclineHigh_Interval"
        :min-value="10"
        :max-value="20"
        :step="1"
        value-extension='°'
        @change="updateInclineHigh_Interval"
    />


    <h2> {{ $t('Treadmill.Program.ProgramRun')}} </h2>
    <input type="radio" name="tmRadioRunMode" @click="updateRunType" value=2 v-model="tmRunMode">   
        {{ $t('Treadmill.Program.ProgramRun')}}
    <p></p>

    <input type="radio" name="tmRadioProgram" @click="updateMode_Program" value=0 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 0')}}

    <GChart
      type="LineChart"
      :data="get_ProgramData0" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" @click="updateMode_Program" value=1 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 1')}}
        <GChart
      type="LineChart"
      :data="get_ProgramData1" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" @click="updateMode_Program" value=2 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 2')}}
        <GChart
      type="LineChart"
      :data="get_ProgramData2" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" @click="updateMode_Program" value=3 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 3')}}
      <GChart
      type="LineChart"
      :data="get_ProgramData3" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" @click="updateMode_Program" value=4 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 4')}}
        <GChart
      type="LineChart"
      :data="get_ProgramData4" 
      :options="chartOptions1"
    />  
    <p></p>

</div>
  </div>
</template>

<script src="./treadmill.js" />
<style scoped src="./treadmill.css" />
