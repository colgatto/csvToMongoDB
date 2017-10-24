#!/bin/sh
mkdir -p /data/db
mongod --storageEngine=mmapv1 --dbpath /data/db