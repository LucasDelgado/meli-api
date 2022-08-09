# Desafío MELI

Soy Lucas Delgado y este es mi desafío de **MELI**.

De acuerdo a los requerimientos, he decidido que este era el mejor camino.

## En el Frontend:

Una aplicación creada con Create-react-app con Typescript.

-   La app tiene declaradas las entidades core de la app. Gracias a la infra que nos da TS.

-   Tenemos varios test unitarios.

-   la arquitectura del proyecto está toda organizada de manera **modular**, esto puede variar dependiendo de las costumbres del equipo. Me pareció, que en este caso, la mejor manera para distribuir los archivos.
-   En los estilos utilizamos modules de **SASS**. Con nomenclatura en **BEM**. Paleta de colores directamente en el **:root**. Sume algunas clases helpers, que siguen un poco la lógica de **tailwind** en donde los estilos son aplicados en función de **utilidad**.
-   Creamos un **contexto global** (tipo redux) con las apis que ya nos provee React nativamente. Con **useContext** y **useReducer**. La aplicación del mismo es para resolver algo simple como el loading pero se hizo con el fin de sumar valor al challenge.
-   Utilizamos un api de servicios sin ninguna solución externa, todo desarrollado con **JS VANILLA**. Aunque también, en el Backend, utilice AXIOS. Para tener diversificados los llamados con diferentes soluciones.
-   Se trató de respetar los principios **SOLID** en el desarrollo. Y todo a modo escalable.
-   Se podría crear adapters, como los hicimos en el Back. Pero me pareció que no era necesario ya que, en este caso, nosotros somos responsables del middleware. Entonces delegamos esa responsabilidad en el backend.
-   Se pudo haber creado archivos .env pero para evitar tantas configuraciones para hacerlo funcionar si se descargan el proyecto, trate de evitarlo.

Algunos puntos a tener en cuenta.

-   Uno de los requerimientos a tener en cuenta era el **SEO**. Se aplicó head custom con **Helmet, HTML5 semántico** para también sumar valor a la usabilidad. Y uno de los puntos fuertes en cuestión del SEO orgánico es el SSR (server side render).
    Al ser una app SPA, renderiza todo del lado del cliente el cual puede afectar el SEO. Google nos dice que esto no suele ser así ya que sus robots indexan contenido creado por JS, pero otros buscadores pueden tener problemas.
    Entonces realizar un SSR manualmente lleva un tiempo considerable para desarrollarlo en un challenge. Hay una solución rápida. Y es utilizar **NEXT.JS** (lo amo) Que nos provee herramientas geniales para solucionar este problema y muchos otros.
    Si bien encajaba perfectamente con todos los requerimientos, me pareció mucho más desafiante tratar de NO utilizar nada de esos frameworks, que nos soluciona temas como el RUTEO y muchas más, ya que el objetivo del proyecto es demostrar los skills.

## En el Backend:

En el back de la misma forma que en front utilizamos Typescript, junto a express.

-   También organizamos el proyecto de **forma modular**, respetando las bases de MVC.

-   Aplicamos a los servicios el patrón (antipatrón :P ) **Singleton** para ahorrar memoria en el caso de instanciarlo en otro lugar.

-   Creamos algunos **middlewares** como el de **errores** para tenerlo un poco separado de la lógica y poder manipularlos de un modo más simple, con función para logeos en servicios externos.

-   Utilice **AXIOS** para los fetchs.

-   **Mapeamos los datos**, para prevenir errores o cambios en la fuente de información. En este caso se resuelve mucho más fácil cambiar o agregar o quitar alguna propiedad.

-   Aplicamos en uno de los llamados **promise all**. Esto tiene sus ventajas y otras no tantas. Lo agregue como un modo de hacer algo diferente a lo que se venía haciendo.

Bueno creo que esos son los puntos claves, si no me estoy olvidando de nada.

### Para correr los proyectos.

## Frontend:

```bash
npm install
```

```bash
npm start
```

Para correr los test

```bash
npm run test
```

## Backend:

```bash
npm install
```

```bash
npm run build
```

```bash
npm run dev
```

(Si es la 1ra vez que se corre el proyecto, a veces no reconoce la carpeta que arma el build, hay que cerrar la consola, o el Visual Code y luego correr el npm run dev)

## Deploys

### la app Frontend esta deployada en Vercel:

[https://meli-front-two.vercel.app/](https://meli-front-two.vercel.app/)

### la app Back esta deployada en Heroku:

[https://meli-api-lucas.herokuapp.com/](https://meli-api-lucas.herokuapp.com/)

## los proyectos en github son:

### Frontend:

[https://github.com/LucasDelgado/meli-front](https://github.com/LucasDelgado/meli-front)

[https://github1s.com/LucasDelgado/meli-front](https://github1s.com/LucasDelgado/meli-front)

(para verlo como el Visual Code sin descargarlo)

### Backend:

[https://github.com/LucasDelgado/meli-api](https://github.com/LucasDelgado/meli-api)

[https://github1s.com/LucasDelgado/meli-api](https://github1s.com/LucasDelgado/meli-api)

(para verlo como el Visual Code sin descargarlo)
