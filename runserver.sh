#!/bin/bash
coffee -bc server.coffee
coffee -bc routes/
node server.js
