cd /d %~dp0
cd iendo
@echo off
set f=deviceConfig.ini
echo 1.����һ���
echo 2.���Ǻ�����̨
echo 3.��������̨
echo 4.��������̨
set /p t=��ѡ���豸����:
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