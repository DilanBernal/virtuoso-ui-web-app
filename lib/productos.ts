export const productos = [
  {
    id: 1,
    nombre: "Fender Stratocaster",
    categoria: "Guitarras Eléctricas",
    precio: 1299,
    imagen: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&q=80",
    descripcion:
      "La icónica Fender Stratocaster American Professional II combina tradición con innovación moderna. Cuenta con pastillas V-Mod II que ofrecen un tono clásico mejorado, perfil de mástil Deep C cómodo y trémolo de 2 puntos para una afinación estable.",
    marca: "Fender",
    modelo: "American Professional II",
    stock: 15,
    estadisticas: {
      sustain: 8,
      versatilidad: 9,
      brillo: 9,
      peso: 7,
    },
  },
  {
    id: 2,
    nombre: "Gibson Les Paul",
    categoria: "Guitarras Eléctricas",
    precio: 2499,
    imagen: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&q=80",
    descripcion:
      "La Gibson Les Paul Standard es sinónimo de rock. Con su cuerpo de caoba y tapa de arce, pastillas humbucker BurstBucker Pro y acabado nitrocelulosa, ofrece un sustain legendario y tonos cálidos y potentes.",
    marca: "Gibson",
    modelo: "Les Paul Standard",
    stock: 8,
    estadisticas: {
      sustain: 10,
      versatilidad: 7,
      brillo: 6,
      peso: 9,
    },
  },
  {
    id: 3,
    nombre: "Yamaha P-125",
    categoria: "Teclados",
    precio: 649,
    imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    descripcion:
      "Piano digital portátil con 88 teclas contrapesadas GHS que simulan la sensación de un piano acústico. Incluye sonidos de piano de cola muestreados, 24 voces y conectividad USB para grabación.",
    marca: "Yamaha",
    modelo: "P-125",
    stock: 22,
    estadisticas: {
      realismo: 8,
      portabilidad: 9,
      versatilidad: 7,
      calidad: 8,
    },
  },
  {
    id: 4,
    nombre: "Pearl Export",
    categoria: "Baterías",
    precio: 899,
    imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80",
    descripcion:
      "Set completo de batería acústica con cascos de álamo/caoba de 6 capas. Incluye bombo de 22', toms de 10' y 12', floor tom de 16', redoblante de 14' y herrajes cromados profesionales.",
    marca: "Pearl",
    modelo: "Export EXX",
    stock: 5,
    estadisticas: {
      potencia: 8,
      resonancia: 7,
      durabilidad: 9,
      versatilidad: 8,
    },
  },
  {
    id: 5,
    nombre: "Fender Jazz Bass",
    categoria: "Bajos",
    precio: 1099,
    imagen: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&q=80",
    descripcion:
      "El bajo Jazz Bass Player ofrece el tono clásico de Fender con pastillas de bobina simple que proporcionan claridad y punch. Mástil de arce en C moderno y cuerpo de aliso para comodidad y resonancia.",
    marca: "Fender",
    modelo: "Player Jazz Bass",
    stock: 12,
    estadisticas: {
      claridad: 9,
      graves: 8,
      versatilidad: 9,
      comodidad: 8,
    },
  },
  {
    id: 6,
    nombre: "Boss Katana",
    categoria: "Amplificadores",
    precio: 349,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    descripcion:
      "Amplificador de guitarra de 50W con tecnología Tube Logic de Boss. Incluye 5 tipos de amplificador, 60 efectos integrados, conectividad USB y control por app para personalización total.",
    marca: "Boss",
    modelo: "Katana-50 MkII",
    stock: 18,
    estadisticas: {
      potencia: 7,
      versatilidad: 10,
      calidad: 8,
      portabilidad: 8,
    },
  },
  {
    id: 7,
    nombre: "Shure SM58",
    categoria: "Micrófonos",
    precio: 99,
    imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    descripcion:
      "El micrófono dinámico más usado del mundo. Patrón cardioide que aísla la fuente principal, construcción robusta y respuesta de frecuencia optimizada para vocales. Incluye estuche y clip.",
    marca: "Shure",
    modelo: "SM58-LC",
    stock: 45,
    estadisticas: {
      claridad: 8,
      durabilidad: 10,
      rechazo: 9,
      versatilidad: 8,
    },
  },
  {
    id: 8,
    nombre: "D'Addario EXL110",
    categoria: "Cuerdas",
    precio: 12,
    imagen: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=80",
    descripcion:
      "Set de cuerdas para guitarra eléctrica calibre 10-46. Fabricadas con acero niquelado de alta calidad para tono brillante y larga duración. El set más popular para rock y blues.",
    marca: "D'Addario",
    modelo: "EXL110",
    stock: 120,
    estadisticas: {
      durabilidad: 8,
      brillo: 9,
      tension: 7,
      calidez: 6,
    },
  },
  {
    id: 9,
    nombre: "Taylor 214ce",
    categoria: "Guitarras Acústicas",
    precio: 999,
    imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    descripcion:
      "Guitarra electroacústica con tapa de pícea sólida y cuerpo de koa laminado. Sistema de amplificación ES2 integrado, cutaway veneciano para acceso a trastes altos y acabado satinado.",
    marca: "Taylor",
    modelo: "214ce-K DLX",
    stock: 10,
    estadisticas: {
      resonancia: 9,
      claridad: 9,
      proyeccion: 8,
      comodidad: 8,
    },
  },
]

export function getProductoById(id: number) {
  return productos.find((p) => p.id === id)
}
