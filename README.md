# commits
Ejemplos de uso de las directrices para commits en Git de AngularJS

## Directrices para commits en Git 

Estas reglas fueron adoptadas de: [Convenciones de commit en AngularJS](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

### Formato de un mensaje de commit

Cada mensaje de commit comienza con el **tipo**, seguido de un **ambito**, luego un **asunto**.

Y finalmente, el mensaje de commit tiene un **cuerpo**.

- **tipo**: Que tipo de cambio contiene este commit.
- **ambito**: Que ítem del código está cambiando con este commit.
- **asunto**: Una descripción corta de los cambios realizados en este commit.
- **cuerpo** (opcional): Una descripción más detallada de los cambios.

```
<tipo>(<ambito>): <asunto>
<Línea en blanco>
<cuerpo>
```

Ejemplos:
```
feat(regla): use graphite instead of lead
```
```
fix(protractor): fix 90 degrees counting as 91 degrees
```
```
refactor(pencil): use graphite instead of lead

Closes #640.

Graphite is a much more available resource than lead, so we use it to lower the price.
```
```
fix(pen): use blue ink instead of red ink

BREAKING CHANGE: Pen now uses blue ink instead of red.

To migrate, change your code from the following:

`pen.draw('blue')`

To:

`pen.draw('red')`
```

Cualquier línea del mensaje de commit no debe tener más de 100 caracteres. Esto permite que el mensaje de commit sea más fácil
de leer en github, así como en diferentes herramientas de Git.

### Tipo
Se recomienda usar uno de los siguientes ítems. Solo los de tipo **feat** y **fix** aparecerán en la lista de cambios(changelog), in addition to breaking changes (see breaking changes section at bottom).

* **feat**: Una nueva característica.
* **fix**: Una corrección de error.
* **docs**: Cambios en la documentación o en los comentarios(notar que el tipo es en plural 'docs').
* **style**: Cambios que no afectan el significado del código (espacios en blanco, formateo, faltó un punto y coma, etc).
* **refactor**: Un cambio en el código que no corrige un error, ni agrega una característica.
* **test**: Agregando pruebas que falten(porque agregar nuevos test son considerados feat).
* **chore**: Cambios en el proceso de construcción(compilación) o herramientas auxiliares y/o bibliotecas como generadores de documentación.
* **wip**: (Work in Progress). Este tipo de commit se usará cuando necesitemos commitear el trabajo que hayamos avanzado y por algun motivo nos encontremos en la necesidad de subirlo.

### Ambito
Se refiere al ámbito dentro de la aplicación. Exactamente donde se realiza el cambio.
Por ejemplo `suscriptor`,
`registro`, `login`, etc...

### Asunto
El asunto contiene la descripción corta del cambio:

* Se recomienda usar palabras en tiempo presente: "cambio" no "cambiado" 
* No Capitalizar la primera letra, usar solo minúsculas
* No usar punto(.) al final


### Breaking Changes
Put any breaking changes with migration instructions in the commit body.

If there is a breaking change, put **BREAKING CHANGE:** in your commit body, and it will show up in the changelog.


### Original Source

* https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md
