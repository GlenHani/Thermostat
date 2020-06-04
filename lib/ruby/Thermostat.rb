class Thermostat
  attr_reader :temp

  def initialize
    @temp = 20 
  end

  def self.instance
    @thermostat ||= self.new
  end 

  def update(temp)
    @temp = temp
  end
end