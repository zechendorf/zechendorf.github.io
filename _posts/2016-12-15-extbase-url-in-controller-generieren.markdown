---
layout: default
title:  "Extbase: URL in Controller generieren"
date:   2016-12-15 11:00:00 +0100
categories: blog
---

# Extbase: URL in Controller generieren

In der Regel müssen URLs erst im Template über einen Fluid ViewHelper generiert werden, in manchen Fällen (zum Beispiel wenn man bereits im Controller einen Canonical Tag ausgeben will), ist es allerdings notwendig die URL bereits im Controller zu generieren.

Hierfür stellt der AbstractController in TYPO3 die Klasse [UriBuilder][UriBuilder-Class-Reference] in der Variable `uriBuilder` bereit.

```
$uri = uriBuilder->reset()
  ->setTargetPageUid($pageUid)
  ->setCreateAbsoluteUri(true)
  ->build()
```

Soll die URL auf Action/Controller verlinken, so kann dies wie folgt realisiert werden:

```
$uri = uriBuilder->reset()
  ->setTargetPageUid($pageUid)
  ->uriFor(
    $actionName=null, 
    $controllerArguments=array(), 
    $controllerName=null, 
    $extensionName=null, 
    $pluginName=null)
  ->setCreateAbsoluteUri(true)
  ->build()
```


[UriBuilder-Class-Reference]:  https://typo3.org/api/typo3cms/class_t_y_p_o3_1_1_c_m_s_1_1_extbase_1_1_mvc_1_1_web_1_1_routing_1_1_uri_builder.html
