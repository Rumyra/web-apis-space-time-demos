# for legacy should do this - good practise, not necessarily needed
require 'rubygems'
# use bundler - will use gemfile to get versions
require 'bundler/setup'

# still need to do this
require 'sinatra'

get '/' do
	erb :index
end

get '/animation' do
	erb :southamerica
end

get '/anim' do
  erb :italy
end

get '/audio' do
	erb :moon
end

get '/all' do
  erb :all
end
