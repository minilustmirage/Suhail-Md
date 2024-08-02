const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "243898906725";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_44_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUW1BbEgwbmNLYUFKMDY3WlZnMDQ1aUVYSmNucGFBN3lLcU5qTlBBYmNuQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM4OTg5MDY3MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJFNkYwMjRFMUYzMzMzRUMzQjI2RTNERjRBMDkwMDdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMDY2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0Mzg5ODkwNjcyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0YyQTE2NUQxNzA1N0UyQjVBRUI2RkFCQzhFNEFCRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjIwNjYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQzODk4OTA2NzI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQTM1MDg1MzNEMDREODU0Qjg1MzIyRkJFREQyQzEyMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MjA2NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM4OTg5MDY3MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJCM0VCQTMxMzM2ODU0MjE0NEE2NjZGMThGRTQ5QUQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMDY2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDM2xhUUd4MVFYT0FJbXRqNThhemZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRiMzdjMWFhLWY0ODItNDRhZC1iNTEyLWI4NDZjZDBkYjA1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMjYsXG4gICAgICAxMjAsXG4gICAgICAxODMsXG4gICAgICAyMzMsXG4gICAgICAxNDYsXG4gICAgICA2MyxcbiAgICAgIDIwMixcbiAgICAgIDI1LFxuICAgICAgMjQ3LFxuICAgICAgOTUsXG4gICAgICAxMjksXG4gICAgICAxNDMsXG4gICAgICAxNjIsXG4gICAgICA0NyxcbiAgICAgIDE1OCxcbiAgICAgIDI1MixcbiAgICAgIDU1LFxuICAgICAgNjcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE1MSxcbiAgICAgIDMyLFxuICAgICAgMjM3LFxuICAgICAgMjI2LFxuICAgICAgMjM2LFxuICAgICAgOTYsXG4gICAgICA3MSxcbiAgICAgIDIxMSxcbiAgICAgIDI0NSxcbiAgICAgIDk4LFxuICAgICAgMzMsXG4gICAgICA1NyxcbiAgICAgIDEwNCxcbiAgICAgIDE0NSxcbiAgICAgIDE3OSxcbiAgICAgIDQyLFxuICAgICAgNDYsXG4gICAgICAyMDMsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtb3o0QUVFTysxdExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSFI1WHBaL3lEbEtheXJLcFNRS05Fc05yTzRMbjBrNVEzVThCb25tUU9RVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpNTVaMVN6QlhwMDVxL1RGRk9GbG90dkZaSjdQT0lrc242Y045b0gxbWFJdmlxeEh1QzJZNGE5N1N2TExYcUtkTEZLWFE2YkZBVjAyMG5xRjN6ODZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxU0FPYmJRQStXZ1BKRkpMQ3J5aGpSVkFGdDVWT1Z4YU1vQWcrTVkyUWx3S3FScTJTeVg1YmI0bm9ZM0hTQXlSbU42MkI3VWJ6TU5PRThqUnVTYi9pUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0Mzg5ODkwNjcyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5ODExNDc2OTgzMDAwNzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuC8uuGDpuC8kvCdlbvDqPCdlpfwnZaKIPCdlpXwnZaa8J2WiPCdlojwnZaO4LyS4YOm4Ly7XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDM4OTg5MDY3MjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYyMDY1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdROVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1E5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYTh2dlZuc0dsNXh6MVYxSHZaLzkwWGJmLy9ha1lSN2c1K0VMRFFTTFh1Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1MDQxMzM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MjA2NjA2NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "↦",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "~༺ღ༒𝕻è𝖗𝖊 𝖕𝖚𝖈𝖈𝖎༒ღ༻",
  packname: process.env.PACK_NAME || "~༺ღ༒𝕻è𝖗𝖊 𝖕𝖚𝖈𝖈𝖎༒ღ༻",
  botname : process.env.BOT_NAME  || "𝐖𝐡𝐢𝐭𝐞 𝐬𝐧𝐚𝐤𝐞",
  ownername:process.env.OWNER_NAME|| "~༺ღ༒𝕻è𝖗𝖊 𝖕𝖚𝖈𝖈𝖎༒ღ༻",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
