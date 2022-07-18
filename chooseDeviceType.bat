cd /d %~dp0
cd iendo
@echo off
set f=deviceConfig.ini
echo 1.智能一体机
echo 2.耳鼻喉治疗台
echo 3.妇科治疗台
echo 4.泌尿治疗台
set /p t=请选择设备类型:
set type=Aio
if %t% == 2 (
	set "type=ENT"
) else if %t% == 3 (
	set "type=GDT"
) else if %t% == 4 (
	set "type=SUS"
)
set imagesPath=D:/%type%/ImageData/Images/
set videosPath=D:/%type%/ImageData/Videos/
set logoPath=D:/%type%/ImageData/Logo/
echo [root]>%f%
echo imagesPath=%imagesPath%>>%f%
echo videosPath=%videosPath%>>%f%
echo logoPath=%logoPath%>>%f%
echo httpPort=7001>>%f%