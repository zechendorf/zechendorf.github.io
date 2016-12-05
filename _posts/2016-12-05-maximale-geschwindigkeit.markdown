---
layout: default
title:  "Maximale Geschwindigkeit"
date:   2016-12-05 08:00:00 +0100
categories: blog
---

# Optimieren von Webseiten auf optimale Geschwindigkeit

Spätestens seitdem Google die Auslieferungszeiten bzw. Ladegeschwindigkeiten von Webseiten als Ranking-Kriterium verwendet ist das Bewusstsein von Webseiten-Betreibern hierfür deutlich angestiegen.

## Das Ziel: 100/100 bei Google PageSpeed Insights

Seit einiger Zeit stellt Google ein Tool zum Messen der Website-Geschwindigkeit bereit. Der heilige Gral liegt hierbei in einer Bewertung von 100 Punkten. Dies ist aber ausschließlich dann zu erreichen, wenn man maximales Augenmerk auf die Performance der Seite legt und kompromisse bezüglich der Verwendung von WebFonts JavaScript- und CSS-Frameworks eingeht.

Primär kommt es darauf an, an welcher Stelle im Quellcode referenzen auf externe CSS und JavaScript-Resourcen gesetzt werden, da diese das rendern im Browser blockieren und so die Auslieferung der Seite an den Nutzer verzögern.

## Was ist zu tun?

Für diese Website habe ich vollständig darauf verzichtet im `<head>` der Seite JavaScript oder CSS-Dateien zu referenzieren. Es befindet sich nur ein inline CSS im Head, das das Basis-Layouting vornimmt. Die Webfonts sowie jQuery werden am Seitenende geladen. 

Im Template der Seite (also dem Seitenrahmen) werden keine Bilder referenziert. Alle Grafiken (wie das Logo und das GitHub-Icon) wurden inline als SVG eingebunden. Auf diese Weise muss der Browser des Nutzers beim laden einer Seite lediglich jQuery und die Webfonts laden und kann ansonsten die komplette Seite ohne weitere Anfragen darstellen.

## Ist das realistisch?

Eigentlich nicht. Zum einen ist es relativ Aufwändig so zu verfahren und zum anderen bremst einen die Anforderung externe Ressourcen zu minimieren ziemlich aus, was Animationen und Bildmaterial überhalb des Folds (also im direkt nach dem Laden sichtbaren Bereich) betrifft aus. Es muss also immer ein Kompromiss zwischen Ladezeiten und Features gewählt werden.

Für diese Seite habe ich mich für Ladezeiten entschieden - es ist ja schließlich nur ein Blog.
