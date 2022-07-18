echo "安装项目运行管理(pm2)"
call npm install -g pm2
echo "安装pm2为windows-service"
call npm i -g pm2-windows-service
echo "配置windows-service"
call pm2-service-install

