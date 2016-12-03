---
layout: post
title:  "Kostenloses Website Hosting"
date:   2016-12-03 12:43:00 +0100
categories: blog
---

# Kostenloses Website Hosting mit HTTPS Verschlüsselung

Technisch versierte Nutzer können bei github.com vollständig kostenlos eine Webseite aufsetzen und hosten. Für den Preis einer Domain (die es zum Beispiel bei Namecheap ab 0,88 USD pro Jahr gibt) geht das auch mit einer eigenen Domain und mit minimalem Mehraufwand (aber weiterhin kostenlos) kann man die Seiten verschlüsselt mit SSL Zertifikat über https ausliefern.

## 0. Aber warum?

Abgesehen davon, das Hosting Geld kostet, müssen Hostingpakete und die darauf laufende Software betreut werden. Je nach Hoster und eingesetzter Software kann dies durchaus zeitintensiv sein. Zum Beispiel gibt es für verbreitete CMS (Content Management Systeme) wie TYPO3 oder Wordpress regelmäßig zum Teil sicherheitskritische Updates. Wer die nicht installiert, riskiert dass die eigene Seite gehackt wird. Hosted man über GitHub, braucht man sich um diese Themen keinerlei Gedanken zu machen da das Hosting und die darauf laufende Software ausschließlich durch GitHub betreut wird.

## 1. Kostenlos bei GitHub hosten

Jeder Nutzer kann bei GitHub kostenlos seine eigene statische Webseite hosten. Alles was man hierzu benötigt ist ein GitHub Account und ein paar technische Kentnisse.

### 1.1 GitHub Account anlegen

Auf https://github.com/ kann man sich kostenlos einen Account zulegen.

### 1.2 GitHub Webseite erstellen

Durch das Erstellen eines Repositories mit dem Namen [username].github.io erhält man automatisch eine Webseite die unter [username].github.io erreichbar ist. GitHub liefert nur statische Seiten aus, man müsste also die Webseite komplett statisch anlegen.

Allerdings unterstützt GitHub die Software Jekyll, die es ermöglicht aus Textdateien automatisiert statische Webseiten zu rendern. Wer also nicht alle Seiten händisch in HTML und CSS anlegen möchte kann einfach ein Jekyll-System verwenden. 

### 1.3 Für Fortgeschrittene: Jekyll

Grundsätzlich reicht es aus, wenn die Dateien im Repository [in der von Jekyll vorgeschriebenen Art und Weise][jekyll-filestructure] angelegt werden.

Alternativ bietet es sich allerdings an, Jekyll lokal auf dem eigenen Rechner zu installieren, um eine Vorschau der Webseite testen zu können, bevor man die Seite ins Internet stellt. Was hierfür zu tun ist, ist auf der [Quickstart-Seite][jekyll-quickstart] von Jekyll dokumentiert.


## 2. Eigene Domain verwenden

Auch die Verwendung eigener Domains wird von GitHub unterstützt. Hierzu muss lediglich eine Datei `CNAME` im Basisverzeichnis des Repositories [username].github.io angelegt werden, in der der Domain-Name steht. Für diese Webseite sieht die Datei wie folgt aus: [CNAME][cname-github].

Domains ohne Webspace sind erstaunlich günstig. So kann man zum Beispiel bei [Namecheap][namecheap] Domains ab 88 US cent im Jahr beziehen.

Einziger Wehrmutstropfen: GitHub unterstutzt aus der Box nur das http-Protokoll - also unverschlüsselte Webseiten. Die Webseite ist dann als "nur" unter http://[domain] zu erreichen.

## 3. HTTPS für Custom GitHub Domain einrichten

Wenn die Seiten mit der eigenen Domain verschlüsselt über https ausgeliefert werden sollen wird zusätzlich noch ein kostenloser Account bei [Cloudflare][cloudflare] benötigt. Dort kann man die bei Namecheap bezogene Domain einrichten. Anschließend werden die Seiten über das CDN (Content Distribution Network) von Cloudflare über https ausgeliefert.

Diese Webseite wird auf genau diese Art und Weise zur Verfügung gestellt.

[cname-github]: https://github.com/zechendorf/zechendorf.github.io/blob/master/CNAME
[jekyll-filestructure]: https://jekyllrb.com/docs/structure/
[jekyll-quickstart]: https://jekyllrb.com/docs/quickstart/
[namecheap]: https://www.namecheap.com
[cloudflare]: https://www.cloudflare.com
