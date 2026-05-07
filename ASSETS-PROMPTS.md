# Bluhmwerk — Brief de assets

Diretrizes de marca, prompts para Google Veo (vídeo) e Nanobanana (imagem) prontos para usar e substituir os SVGs/placeholders deste repositório.

---

## 1. Sistema visual (use como contexto fixo nos prompts)

- **Paleta**
  - Navy profundo `#060B16`, `#0E1A2C`
  - Steel/azul aço `#5C7187` · `#7AA9D8` · `#A6C4DD`
  - Verde signal `#7DEBC1` (status/positivo)
  - Off-white `#F4F6FA`
  - Acentos quentes (alertas) `#FFC65A`, `#FF6B6B`
- **Tipografia**: Space Grotesk (display) · Instrument Sans (texto)
- **Tom**: industrial-tech, premium minimal, "control room" estilo EPAM/Chelsea Labs
- **Marca**: símbolo crosshair/diamante navy com alvo branco e centro steel — sempre presente, nunca distorcido
- **Linguagem cinematográfica**: planos longos, low-key lighting, parallax sutil, partículas técnicas, HUDs/overlays minimalistas

---

## 2. Vídeos — Google Veo

> Salve cada saída como `public/<nome>.mp4` para encaixar nos slots já preparados no código.

### 2.1 `public/hero.mp4` — Hero principal (loop, ~10s)

```
A cinematic aerial shot gliding slowly above a vast Brazilian logistics yard at dawn. 
Stacks of euro pallets, returnable containers and a fleet of trailers are arranged in 
perfect grid lines, each tagged with a glowing teal QR/RFID marker that pulses softly. 
A subtle holographic HUD overlay floats above the scene displaying tracking metrics, 
counters and route lines being drawn in real time. Color palette: deep navy 
#060B16 to steel blue #7AA9D8, with mint-teal #7DEBC1 highlights. 
Mood: industrial precision, controlled, premium tech. No people. No logos. 
Slow lateral parallax, depth of field, volumetric light rays. 
Loopable: ends framed identically to start. 16:9, 4K, 24fps, photorealistic.
```

Negative: text artifacts, lens flare overload, motion blur, cartoon style.

### 2.2 `public/suite-pallet.mp4` — Pallet Control showcase (~6s)

```
Macro top-down studio shot of a single dark-navy pallet centered on a polished concrete 
floor lit by cold rim lights. A holographic interface materializes above it: layers of 
data — operator name, planta de origem, planta de destino, NFe, status — flow upwards 
like a stack of glass cards in steel-blue and teal accent tones. Subtle dust particles, 
shallow depth of field, controlled exposure. Studio aesthetic, no logos, premium B2B. 
16:9, 4K, photorealistic, soft mechanical hum.
```

### 2.3 `public/suite-socorro.mp4` — Socorro 24H (Auto + Saúde) (~6s)

```
Night-time aerial of a São Paulo arterial avenue, rain-slicked asphalt reflecting 
amber streetlights. Two sets of vehicles — a tow truck and a medical response van — 
emit gentle teal pulses identifying themselves on a transparent map overlay. 
Geofences and route polylines draw themselves in mint-teal #7DEBC1 over the city, 
with subtle tag chips showing "SOCORRO AUTO 24H" and "SOCORRO SAÚDE 24H" in steel 
blue. Mood: vigilant, calm, always-on. No faces, no readable license plates. 
Anamorphic lens, cinematic, 16:9, 4K, 24fps.
```

### 2.4 `public/suite-import.mp4` — Compartilha Import (~6s)

```
Slow dolly across a futuristic customs floor: containers stamped with paper-blueprint 
labels glide on conveyor lines while translucent documentation panels (DI, DUIMP, NFe) 
phase in and out of frame. A stylized world map glows in the background with data 
flowing between BR, CN and US nodes in steel-blue arcs. Color: navy #060B16 to 
steel #7AA9D8, mint-teal accents. Premium, controlled, geopolitical-tech mood. 
No human figures, no real brand names. 16:9, 4K, photorealistic.
```

### 2.5 `public/about-loop.mp4` — Backstage opcional (~8s, loop)

```
Quiet over-the-shoulder shot of a developer's hands on a dark mechanical keyboard, 
multiple monitors blurred in the background showing schematic dashboards in steel-blue 
and teal. The screens pulse with subtle telemetry. A crosshair logo motif is faintly 
embossed on the desk edge. Cinematic low light, navy ambient, premium quiet focus. 
No identifiable faces or brands, 16:9, 4K, 24fps, loopable.
```

---

## 3. Imagens — Nanobanana

> Substitua os SVGs em `/public/products/` ou `/public/decorative/` pelas saídas (PNG/WebP). Mantenha a aspect ratio indicada.

### 3.1 Capa abstrata para o Manifesto (`/public/decorative/manifesto-bg.webp`)

```
Editorial dark abstract composition: deep navy background #060B16 with intersecting 
ultra-thin steel-blue light beams forming an isometric grid that fades to nothing. 
Floating glass plates suggest data layers. Mint-teal #7DEBC1 accent on a single point 
of intersection. Premium B2B technology aesthetic. 16:9, soft grain, no text.
```

### 3.2 Cards de produto (substituir SVGs em `/public/products/`)

Use o mesmo tronco visual; troque o assunto central:

- `compartilha-pallet.webp` (4:3): "studio macro of a deep-navy euro pallet with holographic blueprint of stacking topology floating above, steel-blue and teal accents"
- `compartilha-log.webp` (4:3): "matte black logistics truck silhouette on a dark grid floor, geofence rings expanding in teal, premium dark"
- `compartilha-socorro-auto.webp` (4:3): "tow truck silhouette under cinematic blue rim light, red-cross hologram subtle on the door, no logos"
- `compartilha-socorro-saude.webp` (4:3): "abstract heartbeat waveform crossing a dark navy field, soft red-cross icon, clinical-grade premium tech"
- `compartilha-import.webp` (4:3): "stack of shipping containers on dark dock at dusk, holographic DI/DUIMP document layers floating, teal accent lines"

Sempre adicionar: `no readable text, no logos, navy + steel + mint-teal palette, premium editorial lighting, no people`.

### 3.3 OG / Social (`/public/og-image.webp`, 1200×630)

```
Hero composition: crosshair-and-diamond Bluhmwerk symbol floating over a dark navy 
landscape of stacked logistics assets, steel-blue light beams converging on the mark. 
Bottom area reserved for headline overlay (will be added in code). Premium, B2B, 
controlled. No text rendered in image.
```

### 3.4 Avatares de produto (alt: 64×64 para cards densos)

```
Minimal flat-2.5D icon, navy background #0E1A2C, single steel-blue + mint-teal subject, 
soft inner glow. Matches a product family system. No text.
```

---

## 4. Como integrar no site

| Slot                                | Arquivo esperado                              | Onde está referenciado          |
| ----------------------------------- | --------------------------------------------- | ------------------------------- |
| Hero — vídeo principal              | `/public/hero.mp4` (+ `hero.webm` opcional)   | `components/Hero.tsx`           |
| Hero — poster (fallback)            | `/public/decorative/dashboard-mock.svg`       | `components/Hero.tsx`           |
| Cards Suite Compartilha             | `/public/products/compartilha-*.svg/.webp`    | `components/SuiteCompartilha.tsx` |
| OG/Social                           | `/public/og-image.webp`                       | adicionar em `app/layout.tsx` (`openGraph.images`) |
| Decoração de seção                  | `/public/decorative/*.svg/.webp`              | livre                           |

> Os SVGs já entregues funcionam como fallback estático. Quando os MP4/WebP
> estiverem prontos, basta soltar o arquivo na pasta correta — o código já
> aponta para o nome certo.
