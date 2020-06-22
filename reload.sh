#!/bin/bash

./slave_build.sh
docker stop talaikis
docker rm talaikis
./slave_start.sh
