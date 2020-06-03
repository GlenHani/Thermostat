class Thermostat{


    constructor() {
        this.LOW_USAGE = 18;
        this.DEFAULT_TEMP = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
        this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
        this.temperature = this.DEFAULT_TEMP;
        this.powerSavingMode = true;
      }

    GetCurrentTemp(){
        return this.temperature
    }

    UpTemp(){
      if (this.isMaxTemperature()) {
          return;
        }
        this.temperature += 1
    }

    DownTemp(){

        if (this.isMinimumTemperature()) {
            return;
          }

        this.temperature -= 1
    }

    turnPSMOff(){
      this.powerSavingMode = false;
    }
    
    turnPSMOn(){
      this.powerSavingMode = true;
    }

    reset() {
        this.temperature = this.DEFAULT_TEMP
    }

    Usage(){

        if(this.temperature < this.LOW_USAGE){
            return 'Low - Usage';
        }
        if(this.temperature >= this.LOW_USAGE && this.temperature <= this.MAXIMUM_TEMPERATURE_PSM_ON)      {
            return 'Medium - Usage';
        }
        return 'High - Usage';

    }

     


    private;



    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    isMaxTemperature() {
      if (this.isPowerSavingModeOn() === false){
        return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF
      }
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON
    }

    isPowerSavingModeOn() {
      return this.powerSavingMode === true;
    }


}



