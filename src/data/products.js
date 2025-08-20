// src/data/products.js

// ---> Importamos las imágenes reales desde assets:
import keyboardImg from "../assets/keyboard.jpg";
import mouseImg from "../assets/mouse.jpg";
import earphonesImg from "../assets/earphones.jpg";
import gamingchairImg from "../assets/gamingchair.jpg";
import mousepadImg from "../assets/mousepad.jpg";
import ledlightImg from "../assets/ledlight.jpg";
import microphoneImg from "../assets/microphone.jpg";
import monitorarmImg from "../assets/monitorarm.jpg";
import soundbarImg from "../assets/soundbar.jpg";
import webcamImg from "../assets/webcam.jpg";
import usbhubImg from "../assets/usbhub.jpg";
import rgblightImg from "../assets/rgblight.jpg";
import keyboard60Img from "../assets/keyboard60.jpg";
import gu10lightImg from "../assets/gu10light.jpg";
import earphonestandImg from "../assets/earphonestand.jpg";

const products = [
  { id: "1",  name: "Teclado Mecánico RGB", price: 65,  category: "perifericos", img: keyboardImg,     desc: "Switches táctiles, keycaps PBT, iluminación per-key." },
  { id: "2",  name: "Mouse Gamer 16K DPI",  price: 49,  category: "perifericos", img: mouseImg,        desc: "Sensor óptico preciso, 6 botones programables." },
  { id: "3",  name: "Auriculares 7.1",      price: 89,  category: "audio",       img: earphonesImg,    desc: "Sonido envolvente, micrófono con cancelación." },
  { id: "4",  name: "Silla Gamer Pro",      price: 299, category: "mobiliario",  img: gamingchairImg,  desc: "Ergonómica, reclinable 180°, apoyabrazos 4D." },
  { id: "5",  name: "Mousepad XXL",         price: 19,  category: "perifericos", img: mousepadImg,     desc: "Superficie microtexturizada, base antideslizante." },
  { id: "6",  name: "Lámpara RGB",          price: 35,  category: "iluminacion", img: ledlightImg,     desc: "16M colores, control por app." },
  { id: "7",  name: "Micrófono USB",        price: 79,  category: "audio",       img: microphoneImg,   desc: "Cardioide, filtro anti-pop incluido." },
  { id: "8",  name: "Soporte Monitor",      price: 45,  category: "mobiliario",  img: monitorarmImg,   desc: "Brazo articulado VESA, hasta 27”." },
  { id: "9",  name: "Barra de Sonido",      price: 120, category: "audio",       img: soundbarImg,     desc: "Subwoofer inalámbrico, modos gaming." },
  { id: "10", name: "Cámara 1080p",         price: 55,  category: "perifericos", img: webcamImg,       desc: "Full HD, autoexposición, clip ajustable." },
  { id: "11", name: "Hub USB-C",            price: 29,  category: "perifericos", img: usbhubImg,       desc: "7 puertos, aluminio, PD pass-through." },
  { id: "12", name: "Luz Ambiental LED",    price: 25,  category: "iluminacion", img: rgblightImg,     desc: "Tiras LED con adhesivo 3M, 5m." },
  { id: "13", name: "Soporte Auriculares",  price: 22,  category: "mobiliario",  img: earphonestandImg,desc: "Base estable, acabado soft-touch." },
  { id: "14", name: "Teclado 60%",          price: 79,  category: "perifericos", img: keyboard60Img,   desc: "Formato compacto, cable desmontable." },
  { id: "15", name: "Foco Smart GU10",      price: 18,  category: "iluminacion", img: gu10lightImg,    desc: "Compatible con asistentes de voz." }
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 500));

export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500)
  );
