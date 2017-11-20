FROM ubuntu:16.04
MAINTAINER ekanshsharmacse11@gmail.com
ADD ./Gemfile Gemfile
ADD ./Gemfile.lock Gemfile.lock
RUN bundle install
