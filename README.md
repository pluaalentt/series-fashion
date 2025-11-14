# Series Fashion 👗

Una aplicación web moderna construida con React y TypeScript que permite explorar la moda icónica de personajes de series televisivas populares.

## 🚀 Características

- **Interfaz Moderna**: Diseño gradiente atractivo con animaciones suaves
- **Exploración Intuitiva**: Selecciona una serie y personaje para ver sus outfits
- **Galería Visual**: Visualiza los looks más memorables con descripciones detalladas
- **Responsive**: Diseñada para verse perfecta en cualquier dispositivo
- **TypeScript**: Código robusto y con tipos seguros

## 📦 Series Incluidas

- **Suits**: Harvey Specter, Mike Ross
- **Friends**: Rachel Green, Monica Geller
- **Stranger Things**: Eleven, Steve Harrington
- **Breaking Bad**: Walter White, Jesse Pinkman

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- CSS3 con animaciones modernas

## 📥 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Despliegue en Azure

Esta aplicación está optimizada para desplegarse en **Azure Static Web Apps**.

### Requisitos previos

1. Una cuenta de Azure
2. Azure CLI instalado
3. Git instalado

### Pasos para desplegar

#### Opción 1: Despliegue manual con Azure CLI

```bash
# Login en Azure
az login --tenant 07d22c4d-06ed-475c-b794-00b3a086e048

# Construir la aplicación
npm run build

# Instalar Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Desplegar (primero necesitas crear el recurso en Azure Portal)
swa deploy
```

#### Opción 2: Despliegue automático con GitHub Actions (Recomendado)

1. **Crear el repositorio en GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repositorio>
   git push -u origin main
   ```

2. **Crear Static Web App en Azure Portal**:
   - Ve a Azure Portal (https://portal.azure.com)
   - Busca "Static Web Apps" y crea uno nuevo
   - Selecciona tu tenant: `07d22c4d-06ed-475c-b794-00b3a086e048`
   - Conecta con tu repositorio de GitHub
   - Configuración de build:
     - **Build Preset**: React
     - **App location**: `/`
     - **Api location**: (dejar vacío)
     - **Output location**: `dist`

3. **Azure creará automáticamente el workflow de GitHub Actions** y desplegará tu aplicación

### Configuración de Build

La aplicación usa Vite, así que la configuración de build en Azure debe ser:

```yaml
app_location: "/"
api_location: ""
output_location: "dist"
app_build_command: "npm run build"
```

### Variables de entorno (si necesitas)

En Azure Portal, ve a tu Static Web App → Configuration → Application settings para agregar variables de entorno.

## 🎨 Personalización

Para agregar más series y personajes, edita el archivo `src/data/seriesData.ts`:

```typescript
export const seriesData: Series[] = [
  {
    id: 'tu-serie',
    name: 'Tu Serie',
    characters: [
      {
        id: 'personaje-id',
        name: 'Nombre del Personaje',
        outfits: [
          {
            id: '1',
            title: 'Título del Outfit',
            description: 'Descripción detallada',
            image: 'URL de la imagen',
            season: '1',
            episode: '1'
          }
        ]
      }
    ]
  }
];
```

## 📝 Estructura del Proyecto

```
series-fashion/
├── public/
├── src/
│   ├── data/
│   │   └── seriesData.ts    # Base de datos de series y personajes
│   ├── App.css              # Estilos de la aplicación
│   ├── App.tsx              # Componente principal
│   ├── index.css            # Estilos globales
│   ├── main.tsx             # Punto de entrada
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de:

- Agregar más series y personajes
- Mejorar el diseño
- Agregar nuevas funcionalidades
- Reportar bugs

## 📄 Licencia

MIT

---

Desarrollado con ❤️ para los amantes de la moda en las series
