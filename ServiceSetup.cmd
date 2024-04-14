:: HonorVision(TM) Learning-time Smart Panel Preview (Web)
:: Powered By the DJSC Team.
@echo off & cd /d "%~dp0\..\bin\" & cls
title (Admin Access Required) HonorVision(TM) Local Service Setup preview_0.3.0.51
echo=HonorVision(TM) Local Service Setup & echo=Version preview_0.3.0.51 & echo=
echo=======Installing Service======
httpd.exe -k install -n HonorVisionLocalService
echo=
echo=======Starting Service======
httpd.exe -k start -n HonorVisionLocalService
echo=Finished with code %errorlevel% & pause