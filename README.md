# react-whatsapp-bubble

A lightweight, animated floating WhatsApp button for React. Drop it anywhere in your app and let users reach you in one click.

Un botón flotante de WhatsApp animado y liviano para React. Agregalo en cualquier parte de tu app y permitile a tus usuarios contactarte con un clic.

---

## English

### Installation

```bash
npm install react-whatsapp-bubble
# or
yarn add react-whatsapp-bubble
```

> **Peer dependencies:** `react >= 17` and `framer-motion >= 10` must be installed in your project.

---

### Usage

```tsx
import { WhatsAppFloat } from 'react-whatsapp-bubble';

export default function App() {
  return (
    <>
      {/* your app */}
      <WhatsAppFloat phone="59899000000" />
    </>
  );
}
```

The button renders fixed on screen — no wrapper or container needed.

---

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `phone` | `string` | — | ✅ | Phone number in international format, digits only. No `+`, no spaces. |
| `message` | `string` | `undefined` | — | Pre-filled message that opens in the WhatsApp chat. |
| `tooltip` | `string` | `"Escribinos por WhatsApp"` | — | Text shown on hover above the button. |
| `pulse` | `boolean` | `true` | — | Whether to show the pulsing ring animation. |
| `color` | `string` | `"#25D366"` | — | Button background color. Accepts any valid CSS color. The pulse ring and shadow adapt to this color automatically. |
| `position` | `"bottom-left" \| "bottom-right"` | `"bottom-left"` | — | Corner where the button is anchored. Use `"bottom-right"` if a checkout or cart button already occupies the bottom-right corner. |
| `bottom` | `number` | `24` | — | Distance from the bottom edge in pixels. |
| `side` | `number` | `24` | — | Distance from the side edge (left or right, depending on `position`) in pixels. |

---

### Examples

**Minimal**
```tsx
<WhatsAppFloat phone="59899000000" />
```

**With pre-filled message and custom tooltip**
```tsx
<WhatsAppFloat
  phone="59899000000"
  message="Hi! I'd like to know more about your product"
  tooltip="Chat with us"
/>
```

**Custom color — no pulse**
```tsx
<WhatsAppFloat
  phone="59899000000"
  color="#0070f3"
  pulse={false}
/>
```

**E-commerce: avoid overlapping the checkout button**
```tsx
// Checkout button is bottom-right → move WhatsApp to bottom-left with extra spacing
<WhatsAppFloat
  phone="59899000000"
  position="bottom-left"
  bottom={32}
  side={32}
/>
```

**Full example**
```tsx
<WhatsAppFloat
  phone="59899000000"
  message="Hi! I'd like to know more"
  tooltip="Chat with us on WhatsApp"
  pulse={true}
  color="#25D366"
  position="bottom-left"
  bottom={24}
  side={24}
/>
```

---

### Notes

- Styles are injected inline — no CSS imports, no Tailwind required.
- The pulse ring color and button shadow always match the `color` prop.
- The tooltip anchors to the same side as `position` so it never overflows the viewport.
- The button fades in with a slight delay (1.5s) to avoid competing with the initial page load.

---

## Español

### Instalación

```bash
npm install react-whatsapp-bubble
# o
yarn add react-whatsapp-bubble
```

> **Peer dependencies:** `react >= 17` y `framer-motion >= 10` deben estar instalados en tu proyecto.

---

### Uso

```tsx
import { WhatsAppFloat } from 'react-whatsapp-bubble';

export default function App() {
  return (
    <>
      {/* tu app */}
      <WhatsAppFloat phone="59899000000" />
    </>
  );
}
```

El botón se renderiza fijo en pantalla — no necesita ningún contenedor especial.

---

### Props

| Prop | Tipo | Default | Requerida | Descripción |
|------|------|---------|-----------|-------------|
| `phone` | `string` | — | ✅ | Número de teléfono en formato internacional, solo dígitos. Sin `+`, sin espacios. |
| `message` | `string` | `undefined` | — | Mensaje pre-cargado que se abre en el chat de WhatsApp. |
| `tooltip` | `string` | `"Escribinos por WhatsApp"` | — | Texto que aparece al hacer hover sobre el botón. |
| `pulse` | `boolean` | `true` | — | Si se muestra el anillo animado de pulso alrededor del botón. |
| `color` | `string` | `"#25D366"` | — | Color de fondo del botón. Acepta cualquier color CSS válido. El anillo de pulso y la sombra se adaptan automáticamente a este color. |
| `position` | `"bottom-left" \| "bottom-right"` | `"bottom-left"` | — | Esquina donde se ancla el botón. Usá `"bottom-right"` si un botón de pago ya ocupa la esquina inferior derecha. |
| `bottom` | `number` | `24` | — | Distancia desde el borde inferior en píxeles. |
| `side` | `number` | `24` | — | Distancia desde el borde lateral (izquierdo o derecho según `position`) en píxeles. |

---

### Ejemplos

**Mínimo**
```tsx
<WhatsAppFloat phone="59899000000" />
```

**Con mensaje pre-cargado y tooltip personalizado**
```tsx
<WhatsAppFloat
  phone="59899000000"
  message="Hola, me interesa saber más sobre el producto"
  tooltip="Chateá con nosotros"
/>
```

**Color personalizado — sin pulso**
```tsx
<WhatsAppFloat
  phone="59899000000"
  color="#0070f3"
  pulse={false}
/>
```

**E-commerce: evitar tapar el botón de pago**
```tsx
// El botón de pago está abajo a la derecha → mover WhatsApp abajo a la izquierda
<WhatsAppFloat
  phone="59899000000"
  position="bottom-left"
  bottom={32}
  side={32}
/>
```

**Ejemplo completo**
```tsx
<WhatsAppFloat
  phone="59899000000"
  message="Hola, me interesa saber más"
  tooltip="Chateá con nosotros por WhatsApp"
  pulse={true}
  color="#25D366"
  position="bottom-left"
  bottom={24}
  side={24}
/>
```

---

### Notas

- Los estilos se inyectan inline — no requiere importar CSS ni tener Tailwind.
- El color del anillo de pulso y la sombra del botón siempre coinciden con la prop `color`.
- El tooltip se ancla del mismo lado que `position` para que nunca se salga del viewport.
- El botón aparece con una pequeña demora (1.5s) para no competir visualmente con la carga inicial de la página.

---

## License

MIT
