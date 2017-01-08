# Wes Bos - Mastering Markdown

## Paragraph and text decoration

### Paragraph

Pour marquer un saut de ligne il faut laisser une ligne vide entre les 2 paragraphes. On ne peut pas faire un simple retour à la ligne sous Markdown sauf en utilisant la balise `<br>`

### Headings

* `#` H1
* `##` H2  
* ...
* `######`H6

### Text decoration

* **gras** :`**gras**` ou `__gras__` 
* *italique* : `*italique*` ou `_italique_`
* ~~barré~~ : `~~barré~~`

## Links

* <www.google.fr> : `<www.google.fr>`
* [Google](http://www.google.fr) : `[Google](http://www.google.fr)`
* [Google](http://www.google.fr "moteur de recherche") :`[Google](http://www.google.fr "moteur de recherche")`
* On peut aussi créer une référence : `[Google][moteur]  ... puis en bas de page... [moteur]: http://www.google.fr`


## Images

![]() : <br>
![Mon Image](http://imgur.com/gallery/LL0t8 "happy student") : `![Mon Image](http://imgur.com/gallery/LL0t8 "happy student")`

![][] : <br>
![Mon Image][teacher]
[teacher]: http://imgur.com/gallery/LL0t8

On peut alors utiliser la syntaxe Link avec la syntaxe Image

[![MonImage](http://imgur.com/gallery/LL0t8)](http://imgur.com/gallery/LL0t8)

on peut aussi utiliser les syntaxes HTML et CSS

## Lists

Unordered list : on peut utiliser indifférement * , - , +

Ordered list starts with 1. 
conseil : pas la peine de faire une vraie numerotation incrementale ... ainsi si on a besoin d'ajouter une entree au milieu pas besoin de tout renumeroter
```
1. oeuf
1. beurre
1. pain
```

1. oeuf
1. beurre
1. pain


Nested lists : Pour faire des liste indentées, il suffit de faire une tabulation ou des espaces <br>

1. maison
    - salon
    - sdb
1. beurre
1. pain


## Line breaks

on peut utiliser simplement la balise html `<br>`

## Horizontal rules

au moins 3 - ou 3 = <br>
> ---
> ===
attention a bien ajouter une ligne vide afin que ce ne soit pas interprété en H1

## Block quotes

Débutez les lignes avec `>`

>Ceci est une quote
>-merci

Pour séparer 2 bloc de quotes avec un espace il faut sauter 2 lignes
>bloc1


>bloc2

## Code Syntax highlighting

Pour ajouter un bloc de code on utilise ``` par défaut mais on peut aussi spécifier le language ```js <br>
inline syntax highlighting  ` `un bout de code` ` <br>

```js
var x = 5;
var http =require ('http')
var httpserv = http()
function (res,req)
```



Une syntaxe bien utile ` '''diff ` afin de surligner les lignes supprimées ou ajoutées  <br>
ensuite, si on commence la ligne avec un + , elle sera surlignée en vert (ou - pour du rouge)
```diff
-ligne supprimée
+ligne ajoutee
```

## Tables

on sépare les colonnes avec des | <br>
on sépare les lignes avec --- <br>

Attention sous Github le centrage n'est pas reconnu, donc ne pas utiliser la technique des `:` en début ou fin des lignes pointillées` :

>Nom|Prenom|Age|
>------|---|---|
>Doe|John|36|

Nom|Prenom|Age|
------|---|---|
|Doe|John|36|

## Checkbox

- [ ] Checkbox vide : `- [ ]`
- [x] Checkbox checked : `- [x]` 
