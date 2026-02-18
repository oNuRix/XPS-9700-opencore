# Dell XPS 9700 

<img width="591" height="652" alt="XpsBook" src="https://github.com/user-attachments/assets/78abc7c7-3f54-4cbc-804d-c2e72202b6e5" />
<img width="734" height="336" alt="Capture d’écran 2026-02-18 à 13 03 38" src="https://github.com/user-attachments/assets/ac455208-57f6-4a10-bf8d-de4715cd4b10" />


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

## BIOS
| Menu | Setting | State |
| ---- | ------- | ----- |
| Boot Configuration | Enable Secure Boot | Off |
| Pre-boot Behavior | Fastboot | Thorough |
| Integrated Devices | Thunderbolt Security Level | No Security |
| Storage | Sata Operation | AHCI |
| Power | Enable Lid Switch | On |
| FingerPrinf | ON | For Windows |
| Security | Intel Software Guard Extensions | OFF |
| TPM | OFF |

## Wifi
- Work Thanks! [laobamac](https://github.com/laobamac/OCLP-Mod)
  
## Misc before install:
- Don't forget too change SMBIOS!
- [Gensmbios](https://github.com/corpnewt/GenSMBIOS) (better if you know MAC address for rom section in OC)
- [Unlock CFG ](https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock.html#turning-off-cfg-lock-manually)
- You can set setup_var with modGRUBShell
## I used: 
- setup_var PchSetup 0x5 0x00 # Disable RTC Memory Lock
- setup_var CpuSetup 0x3E 0x00 # Disable CFG Lock
- setup_var CpuSetup 0xDA 0x00 # Disable Overclocking Lock
- setup_var SaSetup  0xF5 0x02 # DVMT Pre-allocated = 64MB
- setup_var SaSetup  0xF6 0x03 # Total DVMT = MAX
- setup_var CpuSetup 0x1B7  0x01 # Enable OverClocking Feature for voltageshift
- Thanks [jkbuha](https://github.com/jkbuha)
## VoltageShift configuration
- Thanks [sicreative](https://github.com/sicreative/VoltageShift)
- With VoltageShift, temperatures stay under control and the fans run more smoothly.
I personally use:
- sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 25 45 -1
- This profile keeps the system cooler while maintaining good performance and stable fan behavior.
- XPS_Monitor1.jsx for use übersicht widgets. Thanks [felixhageloh](https://tracesof.net/uebersicht/)
## For more performance You can use the following settings:
- Sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 45 90 -1
- For a balanced profile:
- Sudo ./voltageshift buildlaunchd -130 -75 -90 0 0 0 1 45 65 -1
- It is recommended to install SleepWatcher to restart VoltageShift after wake.
This is necessary because Dell resets the EC (Embedded Controller) when the device goes to sleep and wakes up.

## Not Wworking
- Brightness control keys: Use Fn + S / Fn + B instead, or change the shortcut in Keyboard Settings (instead of F6 / F7)
- USB-C HDMI cold plug issue: Not working when connected before boot (hot plug works fine).
- Audio not working alc711 not supported!


