# Dell XPS 9700 

<img width="591" height="652" alt="XpsBook" src="https://github.com/user-attachments/assets/78abc7c7-3f54-4cbc-804d-c2e72202b6e5" />

## Specs

| Specifications | Detail                                                  |
| ------------------- | ------------------------------------------- |
| Computer model      | Dell XPS 9700     |
| Processor           | Intel Core i7-10875H   |
| Memory              | 64GB (2X32) 3200 DDR4 |
| SSD                 | Samsung 990 PRO 2Tb 500GB for MacOS| 
| Integrated Graphics | Intel UHD Graphics 630 |
| Display             | 17" 4k  |
| Wireless Card       | Intel killer 1650s|

## Before starting: It is your own responsibility to use modgrubshell and VoltageShift. I am not responsible for any issues or damage that may occur.

## Wifi
- Work Thanks! [laobamac](https://github.com/laobamac/OCLP-Mod)
  
## Misc before install:
- Don't forget too change SMBIOS!
- [Gensmbios](https://github.com/corpnewt/GenSMBIOS) (better if you know MAC address for rom section in OC)
- [Unlock CFG ](https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock.html#turning-off-cfg-lock-manually)
- You can with modGRUBShell
## I used: 
- setup_var PchSetup 0x5 0x00 # Disable RTC Memory Lock
- setup_var CpuSetup 0x3E 0x00 # Disable CFG Lock
- setup_var CpuSetup 0xDA 0x00 # Disable Overclocking Lock
- setup_var SaSetup  0xF5 0x02 # DVMT Pre-allocated = 64MB
- setup_var SaSetup  0xF6 0x03 # Total DVMT = MAX
- setup_var CpuSetup 0x1B7  0x01 # Enable OverClocking Feature for voltageshift
- Thanks [jkbuha](https://github.com/jkbuha)
## VoltageShift
- Thanks [sicreative](https://github.com/sicreative/VoltageShift)
- With voltageShift thermal not get too hot and fans runs smoothly
- i use sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 25 45 -1
## Can use: For more performance
- Sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 45 90 -1
- or
- Sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 45 65 -1
- I added 


## Not Wworking
- Brightness control keys (use Fn+S/Fn+B instead) or you can change in keyboard setting too F6+F7
- over typ c HDMI coldplug (hotplug is OK)
- Audio 


