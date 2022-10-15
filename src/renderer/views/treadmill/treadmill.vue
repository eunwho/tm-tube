<template>
  <div>
  <div class="treadmillInner">
    
    <h1>{{ $t("Treadmill.Settings") }}</h1>
    <h2> {{ $t('Treadmill.Select Run.TimeAndSpeed')}} </h2>

    <input id ="tmTimeSpeed" type="radio" name="tmRadioRunMode" value=0  v-model = "tmRunMode" >   
          {{ $t('Treadmill.Select Run.radioTimeSpeed')}}
    <div>
        <input type="radio" name="tmRadioTimeSpeed" value = 0 v-model = "tmTimeSpeedMode" >
            {{ $t('Treadmill.TimeSpeed.TimeSpeedBeginner')}}
        <input type="radio" name="tmRadioTimeSpeed" value = 1 v-model = "tmTimeSpeedMode">
            {{ $t('Treadmill.TimeSpeed.TimeSpeedNormal')}}
        <input type="radio" name="tmRadioTimeSpeed" value = 2 v-model = "tmTimeSpeedMode">
            {{ $t('Treadmill.TimeSpeed.TimeSpeedPro')}}
    </div>    
          <p></p>
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Time')"
        :default-value="getTime_TimeSpeed"
        :min-value="5"
        :max-value="90"
        :step="5"
        value-extension="min"
        @change="updateTime_TimeSpeed"
    />
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Speed')"
        :default-value="getSpeed_TimeSpeed"
        :min-value="1"
        :max-value="20"
        :step="1"
        value-extension="km/hour"
        @change="updateSpeed_TimeSpeed"
    />
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Incline')"
        :default-value="getIncline_TimeSpeed"
        :min-value="0"
        :max-value="5"
        :step="1"
        value-extension='°'
        @change="updateIncline_TimeSpeed"
    />

    <h2> {{ $t('Treadmill.Select Run.Interval')}} </h2>
    <input type="radio" name="tmRadioRunMode" value=1 v-model= "tmRunMode">   
          {{ $t('Treadmill.Select Run.Interval')}}

          <p></p>
    <input type="radio" name="tmRadioInterval" value=0 v-model ="tmIntervalMode">
          {{ $t('Treadmill.Interval.IntervalBeginner')}}
    <input type="radio" name="tmRadioInterval" value=1 v-model ="tmIntervalMode">
          {{ $t('Treadmill.Interval.IntervalNormal')}}
    <input type="radio" name="tmRadioInterval" value=2 v-model ="tmIntervalMode">
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
        :label="$t('Treadmill.Interval.Interval HighSpeed')"
        :default-value="getSpeedHigh_Interval"
        :min-value="10"
        :max-value="20"
        :step="1"
        value-extension="(km/hour)"
        @change="updateSpeedHigh_Interval"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval Incline')"
        :default-value="getIncline_Interval"
        :min-value="10"
        :max-value="20"
        :step="1"
        value-extension='°'
        @change="updateIncline_Interval"
    />

    <h2> {{ $t('Treadmill.Program.ProgramRun')}} </h2>
    <input type="radio" name="tmRadioRunMode" value=2 v-model="tmRunMode">   
        {{ $t('Treadmill.Program.ProgramRun')}}
    <p></p>

    <input type="radio" name="tmRadioProgram" value=0 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 0')}}

    <GChart
      type="LineChart"
      :data="get_ProgramData0" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" value=1 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 1')}}
        <GChart
      type="LineChart"
      :data="get_ProgramData1" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" value=2 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 2')}}
        <GChart
      type="LineChart"
      :data="get_ProgramData2" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" value=3 v-model="tmProgramMode">
        {{ $t('Treadmill.Program.Program 3')}}
      <GChart
      type="LineChart"
      :data="get_ProgramData3" 
      :options="chartOptions1"
    />  
    <input type="radio" name="tmRadioProgram" value=4 v-model="tmProgramMode">
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
