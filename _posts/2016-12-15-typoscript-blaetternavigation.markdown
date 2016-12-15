---
layout: default
title:  "Blätternavigation in TypoScript"
excerpt: "Mit dem hier angehängten TypoScript Code kann eine einfache Blätternavigation umgesetzt werden"
date:   2016-12-15 18:41:00 +0100
categories: blog
---

# Blätternavigation in TypoScript

Auf der Webseite meines Partners und Kunden [Klötzner Company][kloetzner-company] habe ich eine Blätterfunktion durch das Portfolio in TypoScript umgesetzt.

Am Ende jeder Seite wird eine Navigation mit Pfeil nach links und rechts gerendert. Durch Klick auf die Pfeile navigiert man entweder zur vorherigen oder zur nächsten Seite auf der selben Ebene im Seitenbaum.

Von der ersten Seite aus gelangt man durch klick auf den Pfeil nach links zur letzten Seite und von der letzten Seite durch Klick auf den Pfeil nach rechts wieder zurück zur ersten Seite. Der Nutzer kann also "unendlich" lange durch klicken auf die Pfeile durch das Portfolio surfen.

Mit dem unten stehenden TypoScript Code kann diese Blätternavigation umgesetzt werden. Im Beispiel steigt die Blätternavigation auf Ebene 3 ein -- dies kann nach Bedarf umkonfiguriert werden.

Vielleicht hilft das hier Bereit gestellte TypoScript ja dem Einen oder Anderen ein Projekt schneller abzuschließen -- mich würde es freuen:

<script src="https://gist.github.com/zechendorf/fcd0094efd3282fae1871a08a0e9b866.js"></script>

[kloetzner-company]: https://kloetzner.company
