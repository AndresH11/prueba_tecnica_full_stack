# Prueba técnica
Para ambos proyectos (Frontend y backend) se utilizó la arquitectura limpia (clean architecture)
.En el servidor las carpetas están divididas por servicios
.En el cliente las carpetas están divididas por features

## 🚨 🚨 🚨 🚨 🚨IMPORTANTE 🚨 🚨 🚨 🚨 🚨
En el frontend hay algunos botones e inputs que solo son esteticos, no tiene funcionalidad, si precionas un boton y no pasa nada es porque no tiene funcionalidad, solo está con fines esteticos. Gracias

## 📂 Esctrutura de la carpeta frontend
```tree
├── public
├── src
    ├── components
    ├── configs
    ├── constants
    ├── hooks
    ├── layout
    ├── store                                           
    ├── features                                      
    |   └── auth                                   
    |       ├── grapqhl
    |       ├── hooks
    |       ├── layout
    |       ├── models
    |       ├── pages
    |       ├── redux
    |       └── routes.ts                           
    ├── app.tsx
    ├── app.css        
    ├── index.tsx
    ├── index.css                                        
    └── router.tsx                                       
```

## 📂 Esctrutura de la carpeta backend
```tree
├── src
    ├── configs                                          
    ├── event                                   
    |     ├── constants
    |     ├── entities
    |     └── resolvers                          
    ├── app.ts                                              
    └── index.ts                                     
```

## 🛫 Getting Started

```sh
# Clonar el proyecto
git clone https://github.com/AndresH11/prueba_tecnica_full_stack.git

# Entrar a la carpeta prinpal
cd prueba_tecnica_full_stack
```
Una vez hecho los pasos anteriores abra su editor de código, encontraras dos carpetas llamadas backend y frontend, ambos proyectos funcionan por separados, lo que quiere decir que debes ejecutarlos en terminales diferentes

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/f9b07ee7-e06d-4bd8-99c8-1db59267412a" width="800px" />

Como podrá observar tengo dos terminales abiertas una apuntando a la carpeta frontend y otra apuntando a la carpeta backend

## Configurar el backend

Debes ir al archivo llamado typeorm.ts, en la imagen muestro donde queda, luego de estar dentro del archivo debes configurarlo, en la imagen se explica como.

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/0ba3cb8a-8018-4895-9639-ebbd1b5a0032" width="800px" />

Una vez hayas configurado el archivo ejecuta los siguientes comando en la terminal:
```sh
# Instalar las dependencia
npm i

# Levantar el proyecto
npm run dev
```
Si configuraste bien el archivo typeorm.ts debera de salir el siguiente mensaje

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/ddecbafc-4384-459c-8480-3d2567f214d9" width="800px" />

Una vez se haya levantado el servidor, entre a su navegador y navegue a la siguiente ruta

```sh
# Ruta
http://localhost:3000/graphql
```

Cuando esté en la ruta ejecute la función que se muestra en la siguiente imagen, una vez ejecutada debe salir un mensaje de que todo salio bien, esa función es para crear eventos, internamente el servidor tiene un mock de datos para crear los eventos y así haya datos para mostrar en el frontend

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/59b65946-bcad-4b6b-aaa4-04295ae1b6fa" width="800px" />

Una vez le haya salido el mensaje vaya a su base de datos y verifique que si creo los datos como se muestra en la siguiente imagen

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/71fc3005-dd5a-4add-a48c-4a6d360c3276" width="800px" />

## Esquema sql de la base de datos

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/3db184ad-39d1-4345-ba9b-833468b962e3" width="800px" />

Listo, ya podemos avanzar para el frontend

## Levantar el proyecto frontend
```sh
# En la terminal que está apuntando al frontend debes ejecutar los siguientes siguiente comando

# Instalar las dependencia
npm i

# Levantar el proyecto
npm run dev
```

Deberá salirte el siguiente mensaje

<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/a47a1d77-6865-4361-bb30-d39b3a4131f1" width="800px" />

## Demostración de la pagina
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/537023b2-3e63-4b43-83df-1112c0cecccd" width="800px" />
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/3c781017-26a3-41b4-b8b3-ff0d551c7e43" width="800px" />
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/1fb008f3-e703-42a1-80f6-a3160f72b4ae" width="800px" />
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/6dcc1dad-a30c-4639-a20d-243d637dc979" width="800px" />
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/9650460d-0ab7-4bf8-9765-1aaccca79f96" width="800px" />
<img src="https://github.com/AndresH11/prueba_tecnica_full_stack/assets/92903830/2d1bdac3-2111-4bcd-a1d3-577e1ee40aaf" width="800px" />
