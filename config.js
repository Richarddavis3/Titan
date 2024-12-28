//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2348109243618";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RaK3g0Wm5SSGdsZTdmcnZlWmg3dGg4TE43WVZtRjBiMUJtNHBSRjlIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1dwQTZZSTVGZ0gwSGZKRkNTakQ5Vm5xOFhlVUNZRVVIMnh4ZHp3SUduUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTHJUMGxXdW51Q05sQTMvTm9XcW14dGRVTk14OXlEbzJLaTZhKzRrZm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpV283a0xaSzV4UFhvUnZpS2hZWUlFc3p1YStSb25lY3JKbk1aZTRaZ0ZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEYUwzWUZDOXdxdHpHdHRENEVQMldBaktrNGU2VEdIZWJ3b1VURjNCbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVKeis3Z0xOdXFqckx6U0w0cFpRa243RHlSbkdrZm85YVNNZnRQSmZvV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlVL0pPZm9yMTNSNDluS2Z6b0l1YVRxeDdZd2ZtNUZiYmlvYjFzdjRtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGpzYVZPaGlZTmpDbzFlWHo1bmU5STg5SEpOS0xSNGR3RkVzekVIVUlWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMc08zblR5ZGZyUEMwL01QcjVqdnprYWVxOVBwY0haWmJ5VTdURUJBRS9IN3FPUTNiaGVYVVJHQnVQZ1krNUxmRGtVUHBDM09nU1ROemltSXpKYUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJGUUpDY2ZVRUVNclRORlM3RDFlRzZKbk9wZzNQNmYrTk9zTDZlZG16WFR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkYjF2Wk5DX1RQT2Izb2NTeDhDcDN3IiwicGhvbmVJZCI6IjliZTgxNjBhLTkwOTEtNGFmYS05MWZhLTg0MjcyNTIzZGYxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvOVZHcmlxVFd3b2t0Y3lRbGxJY3FtNEg5L0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VtV1JYcWt3WlRRUW1xVUQ1TWR0UEtTZEVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE1V1hDNzVaIiwibWUiOnsiaWQiOiIyMzQ5MTM1NzA5NzQyOjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGOoiDJqiDhtJsg4bSAIMm05LqXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN0lsbjBRcW9hL3V3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6SFN2ZVRqU3lDbVpNSkZUV1FUSHFiK0VJSVl1amFISXVpalVtNmVIZDNvPSIsImFjY291bnRTaWduYXR1cmUiOiJJYndCTVN2K2EwRWZ2YXhmdlg1TDJyNU5rZEZBeURHRXZ2bE9mdzJrOVpFQ3l3aWZVNnBFQ2Q3QUdIQkdCZGd2VXU1SjZROFQ5UDNaaU0ya2YwaldBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1pFczhpc1BWYk1mVzZHOEpva3g3UGVhT0tvcXgrWmIxS2VxSkxwQ3FBZmd1aVZhYU45VzlnS2lhOUlJMlVqVW9McGVPSkhDdWtQdUgyQjBjT1RyQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM1NzA5NzQyOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN4MHIzazQwc2dwbVRDUlUxa0V4Nm0vaENDR0xvMmh5TG9vMUp1bmgzZDYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzNzc3MjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFhOIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "TITAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
