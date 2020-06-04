require 'sinatra'
require 'json'
require_relative 'lib/ruby/Thermostat'


class ThermostatApp < Sinatra::Base
  get '/' do
    File.read('index.html')
  end 

  get "/temperature" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temp }.to_json
  end

  post "/temperature" do
    thermostat = Thermostat.instance
    thermostat.update(params[:temperature])
    { status: 200 }.to_json
  end

  run! if app_file == $0
end