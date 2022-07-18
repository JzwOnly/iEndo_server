echo "设置PM2环境变量PM2_HOME"
wmic ENVIRONMENT create name="PM2_HOME",username="<system>",VariableValue="C:\Users\%username%\.pm2"
echo %PM2_HOME%
echo "安装日志分割, 超过50个自动删除"
call pm2 install pm2-logrotate
call pm2 set pm2-logrotate:retain 50

cd /d %~dp0
call chooseDeviceType.bat
echo "启动项目"
call pm2 start process.json
call pm2 save
pause
