import pystray
from PIL import Image
from pystray import MenuItem
import tkinter.messagebox as msg
import tkinter as tk
import webbrowser
import serial
import serial.tools.list_ports
import time
from threading import Thread
from threading import Event
import random
import traceback
import os

com_port = "COM3"
app = "http://localhost:52122/"
monitorstring = '<a title="Gay♂宇豪" target="_blank">顾宇豪</a>'

def quit():
    event.set()
    icon.stop()

def show_not_available():
    tk.Tk().withdraw()
    msg.showerror("Function Not Available", "This function is set to be unavailable. Maybe it is still under developing.")

def show_info():
    tk.Tk().withdraw()
    msg.showinfo("About", "耀界™自习课智慧面板 Preview 本地客户端\n版本 0.3.1.53\n\nPowered By the DJSC Team.\n大伟帝国版权所有 侵权必究")

def launch_UI():
    webbrowser.open(app, new = 0, autoraise = True)

def on_clicked(icon, item):
    launch_UI()

def homework_edit():
    os.system("notepad.exe .\\homework.html")

def monitor(event):
    tmp = -65536
    snd = -65536
    plist = list(serial.tools.list_ports.comports())
    if (len(plist) <= 0):
        f = open("appdata.dat", "w", encoding = "UTF-8")
        f.write("HLP Data File, 0, 0, 0, 0, 0, 0, " + monitorstring + ", --, --, " + com_port + ", N/A")
        f.close()
        tk.Tk().withdraw()
        msg.showerror("Sensor Device Not Found", "Cannot find any COM ports on this system. Make sure the device is working correctly and the driver is correctly configured, and then retry.")
    else:
        plist_0 = list(plist[0])
        serialName = plist_0[0]
        # serialFd = serial.Serial(serialName, 9600, timeout = 60)
        # print("check which port was really used >", serialFd.name)
        try:
            serial_port = serial.Serial (
                port = com_port,
                timeout = 0.2
            )
            # serial_port = open("test.socket", 'wb+')
        except Exception as err:
            tk.Tk().withdraw()
            msg.showerror("Error", err)
            exit()
        time.sleep(1)
        while True:
            if (event.is_set() == True):
                f = open("appdata.dat", "w", encoding = "UTF-8")
                f.write("HLP Data File Closed, 0, 0, 0, 0, 0, 0, Unknown, 0, 0, " + com_port + ", N/A")
                f.close()
                break
            try:
                serial_port.write(b"1;")
                result = serial_port.read_until(b';')
                serial_port.write(b"0;")
                tmp = int(float(result.decode("ASCII").split(',', 1)[0]))
                snd = int(float(result.decode("ASCII").split(',', 1)[1].split(';')[0]))
                print(tmp, snd)
            except Exception as err:
                traceback.print_exc()
            if tmp == -65536:
                display_tmp = "--"
            else:
                display_tmp = str(tmp)
            if snd == -65536:
                display_snd = "--"
            else:
                display_snd = str(snd)
            f = open("appdata.dat", "w", encoding = "UTF-8")
            f.write("HLP Data File, 2024, 4, 6, 11, 45, 14, " + monitorstring + ", " + display_tmp + ", " + display_snd + ", " + com_port + ", N/A")
            f.close()
            time.sleep(1)

event = Event()
t_sensor = Thread(target = monitor, args=(event, ))
t_sensor.start()

menu = (MenuItem('打开应用(&O)',lambda: launch_UI()), MenuItem('编辑作业(&E)',lambda: homework_edit()), MenuItem('设置(&S)', lambda: show_not_available()), MenuItem('关于(&A)', lambda: show_info()), MenuItem('退出(&X)', lambda: quit()))
image = Image.open("assets/icon/favicon.ico")
icon = pystray.Icon("耀界™自习课智慧面板后台服务程序", image, "耀界™自习课智慧面板后台服务程序", menu)
icon.run()
# icon.notify("我是消息类容", "消息标题")
