###WindmarHome - Marvel Universe App

#####Nota importante:
Esta aplicación fue desarrollada utilizando datos propios en la base de datos (`marvel_db`) porque la API oficial de Marvel requiere acceso mediante un developer key que no estaba disponible para esta prueba. Por eso, todos los personajes y sus detalles se cargan directamente desde PostgreSQL.

Una aplicación Full Stack que permite explorar héroes de Marvel mediante un slider dinámico con autoplay. Construida con un enfoque en diseño moderno, rendimiento y buenas prácticas en React y Node.js.

# Tecnologías Utilizadas

| Frontend         | Backend | Base de Datos |
| :--------------- | :------ | :------------ |
| React            | Node.js | PostgreSQL    |
| Tailwind CSS     | Express | PG Pool       |
| React Router DOM | Dotenv  | SQL           |

## Configuración de la Base de Datos (PostgreSQL)

### 1. Crear la base de datos

```sql
CREATE DATABASE marvel_db;
```

### 2. Estructura de la tabla `characters`

```sql
CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  img TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Carga de datos iniciales

```sql
INSERT INTO characters (name, description, img) VALUES
('Capitan America', 'Fuerte y heroico', 'https://www.artmajeur.com/medias/standard/p/i/pixinxt/artwork/17597971_sandra-sr-97813-create-a-visually-stunning-marvel-style-scene-p-443280fd-56c3-475e-92a0-afd73d705748.jpg'),
('Thor', 'Electrico y poderoso', 'https://i.pinimg.com/736x/f3/9f/f1/f39ff19d5ad19ee017a4b2469726f516.jpg'),
('Hulk', 'Fuerte y gigante', 'https://i.pinimg.com/originals/bd/cc/1c/bdcc1c51828b8f9d9c12212b98257d56.jpg'),
('Iron Man', 'Inteligente y agil', 'https://wallpapers.com/images/hd/avenger-endgame-iron-man-superhero-0vyi0g87ptir0lqz.jpg'),
('Hawkeye', 'Fuerte y heroico', 'https://i.ebayimg.com/images/g/6wcAAOSwqu9VIYKn/s-l400.jpg'),
('Ant-Man', 'Pequeño y poderoso', 'https://mrwallpaper.com/images/hd/ant-man-with-pym-family-x2a77vqlaxe141g0.jpg'),
('Falcon', 'Fuerte y Agil', 'https://i.pinimg.com/736x/de/30/7d/de307d4ac3205da31303d58bb38a67f8.jpg'),
('Spider-Man', 'Inteligente y agil', 'https://i.pinimg.com/originals/66/57/1e/66571e105e3945a8b5c8584e26788aa9.jpg'),
('Black Panther', 'Fuerte y heroico', 'https://i.imgur.com/gYQYhd8.jpg'),
('Mr Fantastic', 'Elastico y poderoso', 'https://static.wikia.nocookie.net/marveldatabase/images/b/b5/Fantastic_Four_Vol_6_24_Mister_Fantastic_Timeless_Variant.jpg'),
('Wolverine', 'Fuerte y gigante', 'https://www.saturdayeveningpost.com/wp-content/uploads/satevepost/shutterstock_406971838.jpg'),
('Dare Devil', 'Inteligente y agil', 'https://i.etsystatic.com/18227704/r/il/b78919/3802168955/il_fullxfull.3802168955_4cjs.jpg');

```

---

## Instalación Paso a Paso

### 1. Clonar el repositorio

```bash
git clone https://github.com/ThomasCastro2005/pruebaTecnicaWH.git
cd WindmarHome
```

### 2. Configurar el Servidor (Backend)

```bash
cd backendWH
npm install
```

Crea un archivo `.env` con los siguientes datos:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=marvel_db
DB_PASSWORD=Tu_Password
DB_PORT=5433
```

Inicia el servidor:

```bash
node index.js
```

### 3. Configurar la Interfaz (Frontend)

```bash
cd ../frontWH
npm install
npm run dev
```

Dependencias importantes incluidas en `package.json`:

- **Tailwind CSS:** Para estilos modernos y responsive.
- **React Router DOM:** Para la navegación entre páginas.

---

## Características Principales

- **Slider Custom:** Implementado con `useState` y `useEffect` sin librerías externas.
- **Autoplay:** Los personajes se desplazan automáticamente cada 3-4 segundos.
- **Grid Responsive:** Mantiene un diseño limpio y adaptativo en diferentes tamaños de pantalla.
- **Navegación SPA:** Las rutas permiten una experiencia de aplicación de una sola página.
- **Detalle de Personaje:** Al hacer click en un héroe, se accede a su información completa.
- **Backend con Node y PostgreSQL:** Gestión de personajes y sus datos directamente desde la base de datos.

---

**Desarrollado por Thomas Castro**
