---
layout: default
title:  "Maximale Geschwindigkeit"
excerpt: "So werden Webseiten auf maximale Performance auf allen Endgeräten optimiert"
date:   2016-12-05 08:00:00 +0100
categories: blog
---

# Optimieren von Webseiten auf maximale Geschwindigkeit

Spätestens seit dem Google die Auslieferungszeiten bzw. Ladegeschwindigkeiten von Webseiten als Ranking-Kriterium verwendet ist das Bewusstsein von Webseiten-Betreibern hierfür deutlich angestiegen.

## Das Ziel: 100/100 bei Google PageSpeed Insights

Seit einiger Zeit stellt Google mit [PageSpeed Insights][pagespeed-insights] ein Tool zum Messen der Website-Geschwindigkeit bereit. Der heilige Gral liegt hierbei in einer Bewertung von 100 Punkten. Dies ist aber ausschließlich dann zu erreichen, wenn maximales Augenmerk auf die Performance der Seite gelegt wird und Kompromisse bezüglich der Verwendung von Webfonts JavaScript- und CSS-Frameworks eingeht.

Primär kommt es darauf an, an welcher Stelle im Quellcode Referenzen auf externe CSS und JavaScript-Resourcen gesetzt werden, da diese das Rendern im Browser blockieren und so die Auslieferung der Seite an den Nutzer verzögern.

## Was ist zu tun?

Für diese Website habe ich vollständig darauf verzichtet im `<head>` der Seite JavaScript oder CSS-Dateien zu referenzieren. Es befindet sich nur ein inline CSS im Head, welches das Basis-Layouting vornimmt. Die Webfonts sowie jQuery werden am Seitenende geladen. 

Im Template der Seite (also dem Seitenrahmen) werden keine Bilder referenziert. Alle Grafiken (wie das Logo und das GitHub-Icon) wurden inline als SVG eingebunden. Auf diese Weise muss der Browser des Nutzers beim Laden einer Seite lediglich jQuery und die Webfonts laden und kann ansonsten die komplette Seite ohne weitere Anfragen darstellen.

Darüber hinaus wird diese Seite vom CDN (Content Distribution Network) [Cloudflare][cloudflare] ausgeliefert, so dass Anfragen von Nutzern gar nicht vom Server selbst, sondern vom CDN beantwortet werden, dass alle Seiten und Ressourcen gecacht vorhält.

## Ist das realistisch?

Eigentlich nicht. Zum Einen ist es relativ aufwändig so zu verfahren und zum Anderen bremst einen die Anforderung, externe Ressourcen zu minimieren, ziemlich aus, was Animationen und Bildmaterial oberhalb des Folds (also im direkt nach dem Laden sichtbaren Bereich) betrifft aus. Es muss also immer ein Kompromiss zwischen Ladezeiten und Features gewählt werden.

Für diese Seite habe ich mich für Ladezeiten entschieden - es ist ja schließlich nur ein Blog.

[pagespeed-insights]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.zechendorf.ch%2Fblog%2F2016%2F12%2F05%2Fmaximale-geschwindigkeit.html
[cloudflare]: https://www.cloudflare.com
