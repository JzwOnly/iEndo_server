echo "��װ��Ŀ���й���(pm2)"
call npm install -g pm2
echo "��װpm2Ϊwindows-service"
call npm i -g pm2-windows-service
echo "����windows-service"
call pm2-service-install
echo "����PM2��������PM2_HOME"
wmic ENVIRONMENT create name="PM2_HOME",username="<system>",VariableValue="C:\Users\%username%\.pm2"
echo %PM2_HOME%
echo "��װ��־�ָ�, ����50���Զ�ɾ��"
call pm2 install pm2-logrotate
call pm2 set pm2-logrotate:retain 50

cd /d %~dp0
call chooseDeviceType.bat
echo "������Ŀ"
call pm2 start process.json
call pm2 save
pause
