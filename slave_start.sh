#!/bin/bash

APP=talaikis
PORT=3007

docker run -it -p "$PORT:3000" --restart always --name "$APP" -d "$APP"
