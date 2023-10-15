class Cliente {
    constructor(nombre, pais, imagen, cargo, empresa, testimonio) {
      this.nombre = nombre;
      this.pais = pais;
      this.imagen = imagen;
      this.cargo = cargo;
      this.empresa = empresa;
      this.testimonio = testimonio;
    }
  }
  
  // Crear objetos utilizando la clase
  const cliente1 = new Cliente('Orga Cruise', 'Londres', 2, 'Ingeniera de Software', 'Spotify', '¡Estos auriculares son increíbles! La calidad del sonido es impresionante, y se conectan fácilmente a mi dispositivo. La duración de la batería es mucho mejor de lo que esperaba. ¡Definitivamente los recomendaría!');

  const cliente2 = new Cliente('Megan Fox', 'Brasil', 4, 'Ingeniera de Software', 'Amazon', '¡Como amante de la tecnología, estos auriculares me impresionaron. La calidad de audio es excelente, y la aplicación complementaria ofrece muchas opciones de personalización. ¡Una compra sólida!');

  const cliente3 = new Cliente('Zoe Griffin', 'Chicago', 5, 'Diseñadora Web', 'Google', '¡Uso estos auriculares para correr, y se mantienen en su lugar de manera segura. La calidad del sonido es buena, y el control táctil es conveniente. ¡Un buen compañero de entrenamiento!');

  const cliente4 = new Cliente('Jessy Tomson', 'Texas', 6, 'Proyect Manageer', 'Oracle', '¡Como amante de la tecnología, estos auriculares me impresionaron. La calidad de audio es excelente, y la aplicación complementaria ofrece muchas opciones de personalización. ¡Una compra sólida!');



  export { Cliente, cliente1, cliente2, cliente3, cliente4 };
