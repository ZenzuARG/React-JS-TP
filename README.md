# NavegaLasRutas-Zuliani

Este proyecto corresponde a la **Entrega 2 del curso de React JS**, cuyo objetivo es implementar el sistema de navegación de una tienda ficticia llamada **PixelGear**, utilizando React Router, separación de componentes, promesas simuladas e integración de carrito.

---

## 🎯 Objetivos de la entrega

- Implementar React Router para navegar entre:
  - Catálogo general (`/productos`)
  - Catálogo filtrado (`/category/:categoryId`)
  - Detalle de producto (`/item/:id`)
  - Secciones adicionales: Inicio, Sobre Nosotros, Contacto
- Separar componentes contenedores (`ItemListContainer`, `ItemDetailContainer`) de componentes de presentación (`ItemCard`, `ItemDetail`)
- Simular llamadas asincrónicas mediante **promesas + setTimeout**
- Utilizar `useParams()` para leer parámetros de ruta
- Usar `Array.map()` y `key` para renderizado de listas
- Añadir página 404 con redirección
- Implementar *CartContext* para manejar estado global del carrito y mostrar contador dinámico en el ícono

---

## 🛠️ Tecnologías aplicadas

- React JS (Vite)
- React Router DOM v6
- Bootstrap (modo dark personalizado)
- JavaScript ES6
- Context API + Hooks (`useState`, `useEffect`, `useContext`, `useParams`)
- Promises simuladas con `setTimeout()`

---

## 📁 Estructura relevante

```
src/
├─ assets/                   → Imágenes de productos
├─ components/
│  ├─ NavBar.jsx
│  ├─ ItemCard.jsx
│  ├─ ItemDetail.jsx
│  ├─ ItemCount.jsx
│  ├─ CartWidget.jsx
│  └─ CartOffcanvas.jsx
├─ containers/
│  ├─ ItemListContainer.jsx
│  └─ ItemDetailContainer.jsx
├─ pages/
│  ├─ SobreNosotros.jsx
│  └─ Contacto.jsx
├─ context/
│  └─ CartContext.jsx
├─ data/
│  └─ products.js             → Promesa simulada con 15 productos
├─ App.jsx
└─ main.jsx
```

---

## 🚀 Instalación y ejecución

```bash
git clone https://github.com/ZenzuARG/NavegaLasRutas-Zuliani.git
cd NavegaLasRutas-Zuliani
npm install
npm run dev
```

---

## 🧭 Navegabilidad

| Ruta                     | Descripción                               |
|--------------------------|-------------------------------------------|
| `/`                      | Inicio                                    |
| `/productos`             | Catálogo general de productos             |
| `/category/:categoryId`  | Filtrado dinámico por categoría           |
| `/item/:id`              | Vista detalle del producto                |
| `/sobre-nosotros`        | Página institucional                      |
| `/contacto`              | Datos de contacto                         |
| `*`                      | Redirige a Inicio (404 friendly)          |

---

## 🛒 Carrito

Se implementó el contexto `CartContext` para controlar el estado del carrito globalmente:

- `<CartWidget />` muestra la cantidad total de unidades
- `<CartOffcanvas />` permite ver, eliminar o vaciar el carrito desde cualquier página
- `<ItemCount />` agrega cantidades configurables desde la vista de detalle

---

## 🎮 Temática & Estética

PixelGear recrea una **tienda gamer** con estética *dark mode* y acentos violetas neón.  
Se utilizan productos ficticios, imágenes locales y categorías tales como:

- periféricos
- audio
- iluminación
- mobiliario

---

## ✉️ Autor

**Zenón Zuliani**  
Curso React JS – Entrega 2  
2025
