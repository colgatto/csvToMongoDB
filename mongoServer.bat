@echo off
if not exist "C:\data\db" mkdir C:\data\db
mongod --storageEngine=mmapv1 --dbpath C:\data\db