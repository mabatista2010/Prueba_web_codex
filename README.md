# Sportiva — Tienda deportiva demo

Landing page y tienda de ejemplo construidas con **Next.js App Router**, **TypeScript** y **Tailwind CSS**. Lista para desplegar en Vercel sin configuración adicional.

## ✅ Requisitos
- Node.js 18 o superior
- npm

## 🚀 Instalación y ejecución
```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver la app.

## 🧱 Build de producción
```bash
npm run build
npm start
```

## 📂 Estructura del proyecto
```
app/
  layout.tsx
  page.tsx
  shop/page.tsx
  shop/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  api/contact/route.ts
  not-found.tsx
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  FeatureGrid.tsx
  Testimonials.tsx
  ProductCard.tsx
  CTASection.tsx
  Newsletter.tsx
  SectionTitle.tsx
  Badge.tsx
  Button.tsx
  Input.tsx
  Textarea.tsx
  Toast.tsx
  CartContext.tsx
data/
  products.ts
  testimonials.ts
public/
  images/
```

## ☁️ Deploy en Vercel
1. Sube este repositorio a GitHub.
2. Entra a [Vercel](https://vercel.com) y crea un nuevo proyecto.
3. Importa el repo y mantén la configuración por defecto.
4. Haz clic en **Deploy**.

Vercel detectará Next.js automáticamente y hará el build sin pasos extra.
