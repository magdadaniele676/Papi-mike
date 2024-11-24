const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_22_39_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSTZ1TG5VVS9PbThQK0FONG5UNlA4NjMvR280djhxS2FMRWVsekRZcmdRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODI5NDc5NzQ5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNCQjZGOUY4RkVCRjQ2NzkyQTRDNTM2Q0RGNDdBQzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDg3OTYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgyOTQ3OTc0OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDMUY0REVBNkM0QjUxNUMwN0QxOTM0MjhDRkNDMTM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQ4Nzk2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJbWtYb1Y3eFEyUzhHUjhaQnozQ1hnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlYjFhYjZiLTY2OGUtNDQyOS05NmY5LTEwYzJjY2IzZTBkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDcsXG4gICAgICA4MSxcbiAgICAgIDI0NixcbiAgICAgIDIzLFxuICAgICAgNzYsXG4gICAgICAyMTgsXG4gICAgICAxMyxcbiAgICAgIDE5MyxcbiAgICAgIDE0MixcbiAgICAgIDYwLFxuICAgICAgMTM4LFxuICAgICAgMjEsXG4gICAgICAyMDIsXG4gICAgICAxNjYsXG4gICAgICAxNzcsXG4gICAgICAyMTUsXG4gICAgICA3NCxcbiAgICAgIDIzNixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA1OSxcbiAgICAgIDIxNSxcbiAgICAgIDI2LFxuICAgICAgNixcbiAgICAgIDIzOSxcbiAgICAgIDEzMCxcbiAgICAgIDE2MCxcbiAgICAgIDczLFxuICAgICAgMTk5LFxuICAgICAgOTcsXG4gICAgICAxMTQsXG4gICAgICA1NyxcbiAgICAgIDEzNixcbiAgICAgIDMyLFxuICAgICAgMTM1LFxuICAgICAgNjIsXG4gICAgICAxNDEsXG4gICAgICA4OSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ0ZaTEpQN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTgyOTQ3OTc0OTg6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MzUwODU1ODYzNTIzMzozMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwk4O1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJicDZVREVKRFdqcm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVTQ1cWl5TlQ4UDV0bTY3STFvVENhVGdGZkVLc3lDVFhUc3kxVWFwQ2pBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZNY1cycytkOEFURSs3M0pnOFg0bFhHSVk4MmZrM2gwQkV0SWdaWDE2bm5NSHU1UzlwejNtb1crdU56VHJrRGlYN292QVYyZVEzMmNTMUh5cUF3TUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhBdE5qLzhHeU1NekxzQ0JyeWtYZ0M3SUNDTThqQnZUcHFvTFZ6R3NuY1g0S3lLTFQrSUdIMzJJSGFTemtLdDdRdVNqOXBpTXVzVEp0cXZJblhSS2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4Mjk0Nzk3NDk4OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDg3OTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDZSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFINlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnYkM1c0NJSUk0ZzRDTDhxYjh3MkpNcWlyN1FJM2VxdXdaNG4rbk9VSUVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4MzU1MTYyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNDg3OTU3MjkxXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
