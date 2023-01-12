// Each Number is Associated with some unique Words which will mapped later in the function
const phonemeDetails = [
  [11, "कण्ठ्य"],
  [12, "दन्तमुलीय"],
  [13, "दन्त्य"],
  [14, "आोष्ठ्य"],
  [15, "तालव्य"],
  [16, "अतिकण्ठ्य"],
  [21, "स्पर्शी"],
  [22, "स्पर्श सङघर्षी"],
  [23, "सङघर"],
  [24, "नासिक्य"],
  [25, "अर्धस्वर"],
  [26, "कम्पित"],
  [27, "पाशि्र्वक"],
  [31, "अघोस"],
  [32, "घोस/सघोस"],
  [41, "अल्पपा्र्ण"],
  [42, "माहापराण"],
];

const phonemeArr = [
  {
    letter: "क",
    id: 1, // Nothing but to know the letter
    place: 11, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "ख",
    id: 2, // Nothing but to know the letter
    place: 11, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
  {
    letter: "ग",
    id: 3, // Nothing but to know the letter
    place: 11, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "घ",
    id: 4, // Nothing but to know the letter
    place: 11, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
  {
    letter: "ङ",
    id: 5, // Nothing but to know the letter
    place: 11, // isthan ko aadharma
    try: 24, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "च",
    id: 6, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 22, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "छ",
    id: 7, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 22, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
  {
    letter: "ज",
    id: 8, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 22, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "झ",
    id: 9, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 22, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
  {
    letter: "ट",
    id: 10, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "ठ",
    id: 11, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
  {
    letter: "ड",
    id: 12, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "ढ",
    id: 13, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },

  {
    letter: "त",
    id: 14, // Nothing but to know the letter
    place: 13, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "थ",
    id: 15, // Nothing but to know the letter
    place: 13, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },

  {
    letter: "द",
    id: 16, // Nothing but to know the letter
    place: 13, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "ध",
    id: 17, // Nothing but to know the letter
    place: 13, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },

  {
    letter: "न",
    id: 18, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 24, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "प",
    id: 19, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "फ",
    id: 20, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 31, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },

  {
    letter: "ब",
    id: 21, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "भ",
    id: 22, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 21, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },

  {
    letter: "म",
    id: 23, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 24, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "य",
    id: 24, // Nothing but to know the letter
    place: 15, // isthan ko aadharma
    try: 25, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "र",
    id: 25, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 26, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "ल",
    id: 26, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 27, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },

  {
    letter: "व",
    id: 27, // Nothing but to know the letter
    place: 14, // isthan ko aadharma
    try: 25, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "स",
    id: 28, // Nothing but to know the letter
    place: 12, // isthan ko aadharma
    try: 23, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 41, // partawko aadharma
  },
  {
    letter: "ह",
    id: 29, // Nothing but to know the letter
    place: 16, // isthan ko aadharma
    try: 23, // paryatna ko aadharma
    vibration: 32, // ghostatwa ko aadharma
    power: 42, // partawko aadharma
  },
];
