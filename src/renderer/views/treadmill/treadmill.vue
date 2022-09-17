<template>
  <div>
  <div class="treadmillInner">
    <h1>{{ $t("Treadmill.Settings") }}</h1>
    <h2> {{ $t('Treadmill.Select Run.TimeAndSpeed')}} </h2>
    <input type="radio" name="treadmillRadio" value="TimeAndSpeed')">
          {{ $t('Treadmill.Select Run.radioTimeSpeed')}}
          <p></p>
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Time')"
        :default-value="getTime_TimeAndSpeedRun"
        :min-value="10"
        :max-value="60"
        :step="5"
        value-extension="min"
        @change="updateTime_TimeAndSpeedRun"
    />
    <ft-slider
        :label="$t('Treadmill.TimeSpeed.Set Speed')"
        :default-value="getSpeed_TimeAndSpeedRun"
        :min-value="1"
        :max-value="20"
        :step="1"
        value-extension="km/hour"
        @change="updateSpeed_TimeAndSpeedRun"
    />
    <h2> {{ $t('Treadmill.Select Run.Interval')}} </h2>
    <input type="radio" name="treadmillRadio" value="IntervalBeginner')">
          {{ $t('Treadmill.Select Run.IntervalBeginner')}}
    <input type="radio" name="treadmillRadio" value="IntervalNormal">
          {{ $t('Treadmill.Select Run.IntervalNormal')}}
    <input type="radio" name="treadmillRadio" value="IntervalPro">
          {{ $t('Treadmill.Select Run.IntervalPro')}}
    <p></p>
    <ft-slider
        :label="$t('Treadmill.Interval.Interval Time')"
        :default-value="getTime_IntervalRun"
        :min-value="10"
        :max-value="60"
        :step="5"
        value-extension="(min)"
        @change="updateTime_IntervalRun"
    />
    <ft-slider
        :label="$t('Treadmill.Interval.Interval Speed')"
        :default-value="getSpeed_IntervalRun"
        :min-value="10"
        :max-value="60"
        :step="5"
        value-extension="(min)"
        @change="updateSpeed_IntervalRun"
    />
    <h2> {{ $t('Treadmill.Select Run.ProgramRun')}} </h2>
    <input type="radio" name="treadmillRadio" value="ProgramBeginner')">
          {{ $t('Treadmill.Select Run.ProgramBeginner')}}
    <input type="radio" name="treadmillRadio" value="ProgramNormal">
          {{ $t('Treadmill.Select Run.ProgramNormal')}}
    <input type="radio" name="treadmillRadio" value="ProgramPro">
          {{ $t('Treadmill.Select Run.ProgramPro')}}
    <p></p>
    <ft-slider
        :label="$t('Treadmill.Program.Time')"
        :default-value="getTime_ProgramRun"
        :min-value="10"
        :max-value="60"
        :step="5"
        value-extension="(min)"
        @change="updateTime_ProgramRun"
    />
    <ft-slider
        :label="$t('Treadmill.Program.Speed')"
        :default-value="getSpeed_ProgramRun"
        :min-value="1"
        :max-value="20"
        :step="1"
        value-extension="(km/hour)"
        @change="updateSpeed_ProgramRun"
    />
  </div>
  </div>
</template>

<script src="./treadmill.js" />
<style scoped src="./treadmill.css" />
