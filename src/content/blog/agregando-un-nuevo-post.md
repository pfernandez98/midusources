---
author: Pablo Fernández
pubDatetime: 2024-01-13T16:00:00Z
title: Agregando un nuevo post al sitio
slug: agregando-un-nuevo-post
featured: true
draft: false
tags:
  - documentación
description: Reglas y recomendaciones para crear un nuevo post en el sitio.
---

Aquí se detallan las reglas y las recomendaciones para crear un nuevo post en el sitio.

## Table of contents

## Frontmatter

Frontmatter es el lugar principal para almacenar información importante acerca del post (artículo). Frontmatter se encuentra al principio del artículo y está escrito en YAML. Más información en la [documentación de Astro](https://docs.astro.build/en/guides/markdown-content/).

Acá una lista de las propiedades de Frontmatter para cada post.

| Propiedad          | Descripción                                                                                                                                                                             | Observaciones                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**        | Título del post. (h1)                                                                                                                                                                   | requerido<sup>\*</sup>                        |
| **_description_**  | Descripción del post. Se utiliza en el extracto de la publicación y en la descripción del sitio de la publicación.                                                                      | requerido<sup>\*</sup>                        |
| **_pubDatetime_**  | Fecha y hora de publicación en formato ISO 8601.                                                                                                                                        | requerido<sup>\*</sup>                        |
| **_modDatetime_**  | Fecha y hora de modificación en formato ISO 8601. (solo agrégalo si se modificó el post)                                                                                                | opcional                                      |
| **_author_**       | Autor del post.                                                                                                                                                                         | default = SITE.author                         |
| **_slug_**         | Slug para el post. Este campo es opcional, pero no puede ser un string vacío. (slug: ""❌)                                                                                              | default = nombre del archivo slugifiado (?)   |
| **_featured_**     | Si se debe mostrar o no el post en la homepage (_**esto debe usarse solo para recursos no atados a un directo especíifo (por ejemplo, el cosito de como hacer zoom con el mouse 🙂))**_ | default = false                               |
| **_draft_**        | Marcar este post como 'no publicado'.                                                                                                                                                   | default = false                               |
| **_tags_**         | Palabras claves para este post. Escrito en formato de array en YAML.                                                                                                                    | default = others                              |
| **_ogImage_**      | Imagen OG para el post. Util para compartir en redes y para el SEO                                                                                                                      | default = SITE.ogImage o imagen OG generada   |
| **_canonicalURL_** | URL canónica (absoluta), en caso de que el artículo exista en otro lugar.                                                                                                               | default = `Astro.site` + `Astro.url.pathname` |

> Tip! Puedes obtener la fecha en formato ISO 8601 ejecutando `new Date().toISOString()` en la consola. Pero asegúrate de no usar comillas.

Los únicos campos obligatorios son `title`, `description` y `pubDatetime`.

Título y descripción (extracto) son importantes para el SEO y por tanto te recomiendo que los uses.

El `slug` es el identificador único de la URL. Por tanto, `slug` debe ser diferente en cada post. Los espacios en `slug` deben ser separados con `-` o `_`,pero `-` es recomendado. El slug es generado automáticamente a partir del nombre del archivo del post. No obstante, puedes definir tu propio `slug` si así lo deseas por cada post.

Si omites `tags` en un post (en otras palabras, que no especificas ninguna etiqueta), la etiqueta por defecto `otros` será usada para el post.

### Ejemplo de Frontmatter

Acá hay un ejemplo de post

```yaml
# src/content/blog/post-de-ejemplo.md
---
title: El título del directo de Midu
author: Tu nombre
pubDatetime: 2024-01-13T16:00:00Z
slug: el-nombre-del-directo-de-midu
featured: true
draft: false
tags:
  - etiquetas
  - de
  - ejemplo
ogImage: ""
description: Esta es la descripción del post
canonicalURL: https://example.org/este-articulo-tambien-esta-aca
---
```

## Agregando la tabla de contenidos

Por defecto, un post (artículo) no incluye una tabla de contenidos (toc en inglés). Para incluir una toc, tienes que hacerlo de una forma específica.

Escribe `Table of contents` (en inglés) en formato h2 (## en markdown) en el lugar que quieras que aparezca en tu post.

Por ejemplo, si quieres colocar tu tabla de contenidos just debajo del párrafo introductorio, hazlo de la siguiente manera:

```md
---
# algo de frontmatter
---

Este sería el párrafo introductorio de tu post

## Table of contents

<!-- el resto de tu post -->
```

## Encabezados

Hay una cosa que debes tener en cuenta con respecto a los encabezados. El sitio usa el título (title en frontmatter) como el encabezado principal del post. Por tanto, el resto de encabezados del post deben usar h2 \~ h6.

Esta regla no es obligatorio, pero altamente recomendada por temas visuales, accesibilidad y de SEO.

## Almacenando imágenes para los posts

Acá hay dos métodos para almacenar y mostrar imágenes dentro de un archivo de markdown.

> Nota! Si es un requisito diseñar imágenes optimizadas en Markdown, debes [usar MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files).

### Dentro del directorio `src/assets/` (recomendado)

Puedes almacenar imágenes dentro del directorio `src/assets/`. Estas imágenes serán optimizadas automáticamente por Astro a través de [Image Service API](https://docs.astro.build/en/reference/image-service-reference/).

Puedes usar paths relativos o alias (`@assets/`) para servir estas imágenes.

Ejemplo: Imagina que quieres mostrar la imagen `example.jpg` que está ubicada en `/src/assets/images/example.jpg`.

```md
![algo](@assets/images/example.jpg)

<!-- O -->

![algo](../../assets/images/example.jpg)

<!-- Usar la etiqueta img o el componente Image no va a funcionar ❌ -->
<img src="@assets/images/example.jpg" alt="algo">
<!-- ^^ Esto está mal -->
```

> Técnicamente, puedes almacenar imágenes dentro de cualquier directorio dentro de `src`. Acá, `src/assets` es solo una recomendación.

### Dentro del directorio `public`

Puedes almacenar imágenes dentro del directorio `public`. Ten en cuentaq que las imágenes almacenadas en `public` se quedan sin modificar por parte de Astro, Por tanto no estarán optimizadas automáticamente y lo tendrás que hacer a mano.

Para estas imágenes, debes que usar un path absoluto; y se pueden mostrar usando [notación de markdown](https://www.markdownguide.org/basic-syntax/#images-1) o [la etiqueta img de HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

Ejemplo: Imagina que `example.jpg` está en `/public/assets/images/example.jpg`.

```md
![algo](/assets/images/example.jpg)

<!-- o -->

<img src="/assets/images/example.jpg" alt="algo">
```
