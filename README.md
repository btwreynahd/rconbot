# 🛰️ rconbot – Dein FiveM RCON-Bot

Ein vielseitiger, modularer RCON‑Bot für deinen FiveM‑Server. Ideal für Chatkommandos, Admin‑Tools, Discord‑Integration und vieles mehr.

[![Node.js](https://img.shields.io/badge/Node.js-Required-green?style=flat-square)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/github/license/btwreynahd/rconbot)](LICENSE)

---

## 🚀 Features

- Verbindung zum FiveM‑Server via RCON (`say`, `kick`, `ban`, `status` u.v.m.)  
- Chat‑Kommando‑Handler (`!help`, `!kick [ID] [Grund]`, `!status`, `!say [...]`)  
- Spieler‑Logging und Adminaktionen  
- 🔗 Discord Webhook‑Integration (optional)  
- Leicht erweiterbar dank modularer Structure (`commands/`)  
- Sicheres Passwortmanagement über `.env`

---

## ⚙️ Voraussetzungen

- FiveM‑Server mit aktivierter RCON‑Schnittstelle:
  ```cfg
  rcon_password DEIN_PASSWORT
