const CanvasLib = {
  createEmptyCanvas: () => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i].push("#FFFFFF"); //white color
    }
    return a;
  },

  copyCanvas: (source) => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i] = source[i];
    }
    return a;
  },

  createRandomCanvas: () => {
    const colors = [
      "#000000",
      "#804000",
      "#FE0000",
      "#FE6A00",
      "#FFD800",
      "#00FF01",
      "#FFFFFF",
      "#01FFFF",
      "#0094FE",
      "#0026FF",
      "#B100FE",
      "#FF006E",
    ];

    const b = [];
    for (let i = 0; i < 16; i++) {
      b.push([]);
      for (let j = 0; j < 16; j++)
        b[i].push(colors[Math.floor(Math.random() * 12)]); //white color
    }
    return b;
  },
};

export default CanvasLib;
