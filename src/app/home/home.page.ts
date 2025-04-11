import { Component, ElementRef, ViewChild } from '@angular/core';
import { GestionApiService } from '../services/gestion-api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  datosTablaTab1 = [
    { nombre: '1Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '2María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '3María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '4María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '5María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '6María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '7María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '8María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '9María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '10María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '11María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '12María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '13Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '14María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '15María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '16María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '17María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '18María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '19María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '20María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '21María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '22María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '23María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '24Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '25María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '26María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '27María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '28María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '29María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '30María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '31María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '32María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '33María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '34María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '35Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '36María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '37María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '38María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '39María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '40María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '41María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '42María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '43María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '44María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '45María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '46Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '47María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '48María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '49María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '50María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '51María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '52María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '53María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '54María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '55María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '56María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '57Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: '58María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '59María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '60María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '61María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '62María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '63María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '64María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '65María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '66María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '67María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: '68Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: '69Pedro', apellido: 'ruiz', pais: "españa", edad: 40 }
  ];

  datosLista1 = [
    "Esta será la línea 1 de la lista, vamos a poner un texto muy largo para ver qué es lo que hace en estos casos y como podemos corregirlo",
    "Esta será la línea 2 de la lista, será más corta que la anterior, pero entrará bastante justo en el ancho A4.",
    "Esta será la línea 3 de la lista, este entra bien",
    "Esta será la línea 4 de la lista, este entra bien",
    "Esta será la línea 5 de la lista, este entra bien",
    "Esta será la línea 6 de la lista, este entra bien",
    "Esta será la línea 7 de la lista, este entra bien",
    "Esta será la línea 8 de la lista, este entra bien",
    "Esta será la línea 9 de la lista, este entra bien",
    "Esta será la línea 10 de la lista, este entra bien",
    "Esta será la línea 11 de la lista, este entra bien",
    "Esta será la línea 12 de la lista, este entra bien",
    "Esta será la línea 13 de la lista, este entra bien",
    "Esta será la línea 14 de la lista, este entra bien",
    "Esta será la línea 15 de la lista, este entra bien",
    "Esta será la línea 16 de la lista, este entra bien",
    "Esta será la línea 17 de la lista, este entra bien",
    "Esta será la línea 18 de la lista, este entra bien",
    "Esta será la línea 19 de la lista, este entra bien",
    "Esta será la línea 20 de la lista, este entra bien",
    "Esta será la línea 21 de la lista, este entra bien",

  ]

  /* En el html, añadimos el atributo #container al div padre (será una id única), para luego poder gestionar todo lo que hay dentro de este div.
   * @ViewChield('container'), busca el atributo #container
   * Añadimos !, para decirle que el valor no será ni null ni undefined. En caso contrarío tendríamos que comprobar que if(this.container) antes de 
   * realizar this.container.nativeElement.
   */
  @ViewChild('container') container!: ElementRef;

  // Array donde añadimos las categorías que queremos analizar
  categorias: string[] = [
    "business",
    "entertainment",
    "general",
    "technology",
    "health",
    "science",
    "sports"
  ];

  //El color que tendrá cada columna de la gráfica bar-chart
  backgroundColorCat: string[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ];

  //El color del borde que tendrá cada columna de la gráfica bar-chart
  borderColorCat: string[] =[
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ];

  //Inicializamos la variable con el valor del primer elemento del ion-segment, en este caso bar-chart
  tipoDeChartSeleccionado: string = "bar-chart";

  //Hacemos uso de GestionApiService
  constructor(public gestionServiceApi: GestionApiService) {}

  //Cuando desde home.page.html llama a este componente, después de crear las variables y ejecutar el constructor, será el primer método en ejecutar.
  //Mediante un bucle, llamaremos al método cargarCategoria del servicio GestionApiService, para que realice tantas peticiones API como caegorías tenemos.
  ngOnInit(){
    this.categorias.forEach(categoria => {
      this.gestionServiceApi.cargarCategoria(categoria);
    });
  }

  generarPDF() {
    //Ancho en px de A4
    const anchoMax = 794 //794px; //210mm
    //Alto en px de A4
    const altoMax = 1123;//1123px; //297mm
    //Ancho en px de A3
    //const anchoMax = 1587; //420mm
    //Alto en px de A3
    //const altoMax = 1123; //297mm
    const doc = new jsPDF({
      orientation: 'portrait', //Orientación normal
      unit: 'px', //En este caso como unidades utilizamos px, pero podríamos poner cm,mm,em,pt,...
      //mm -> [210, 297] para A4
      format: [anchoMax,altoMax]
    });
    
    /* querySelectorAll: Cogemos todos los selectores que tengan class="seccion" y creamos un NodeListOf de HTMLElement.
     * NodeListOf, es un array que contendrá nodos de DOM, en este caso, es un array de HTMLElement.
     */
    const sections = this.container.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
    // El total de secciones que tenemos en nuestro html
    const totalSections = sections.length;
    console.log("Secciones totales: " + totalSections);
    //Gestionará la sección que estamos analizando
    let currentSectionIndex = 0;
    //Controlará que se hayan creado todas las imagenes antes de crear el PDF. En caso contrario imprimiría un pdf por cada sección.
    let contSections = 0;
    //Definimos de que height queremos que empiece a dibujar nuestro PDF.
    let headerHeight = 55; //Altura del padding que le hemos dado al header
    let footerHeight = 10; //Altura del padding que le hemos dado al footer
    let currentPageHeight = headerHeight+footerHeight;


    while (currentSectionIndex < totalSections) {
      const section = sections[currentSectionIndex];

      html2canvas(section).then(canvas => {
        const imageData = canvas.toDataURL('image/jpg');

        const width = doc.internal.pageSize.getWidth();
        /*Se calcula el height dependiendo del width del canvas y su relación con el width. 
         *Esto se hace para que la imagen mantenga dimensiones proporcionales según el width de la página.
         */
        console.log("tamaño canvas: alto " + canvas.height + " ancho " + canvas.width);

        const height = canvas.height * (width / canvas.width);
        if (currentPageHeight + height >= doc.internal.pageSize.getHeight()) {

          doc.addPage();
          currentPageHeight = headerHeight+footerHeight;
        }
        doc.addImage(imageData, 'JPG', 0, currentPageHeight - footerHeight, width, height);
        currentPageHeight += height;
        contSections++;
        if (contSections === totalSections) {
          //Al final asignamos el header y footer a todas las páginas
          this.addPageConfig(doc);
          doc.save('dashboard.pdf');
        }
      });
      //Sumamos 1, para que el bucle realice todas las peticiones, una por cada sección
      currentSectionIndex++;
    }
  }

  addPageConfig(doc:jsPDF) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la página
      doc.setPage(i);
      this.encabezadoPagina(doc);
      this.piePagina(doc, i);
    }
  }
  piePagina(doc:jsPDF, i: any) {
      // Añadimos la paginación
      doc.setFillColor("#CDCDCD");
      doc.rect(10,doc.internal.pageSize.height - 20, doc.internal.pageSize.width-20, 10, "F");
      doc.text("Página "+i+" de " + doc.getNumberOfPages(), (doc.internal.pageSize.width/2)-30, doc.internal.pageSize.height - 10, {baseline:'bottom'});
  }
  encabezadoPagina(doc:jsPDF){
      //Añadimos el rectangulo
      doc.setFillColor("#CDCDCD");
      doc.rect(10,5,doc.internal.pageSize.width-20, 45, "F");
      // Añadimos el logotipo, sus valores y posición
      const imagen = "/assets/icon/icono.png";
      const imgWidth = 60; // Ancho de la imagen
      const imgHeight = 45; // Alto de la imagen
      const imgX = (doc.internal.pageSize.width /2) - 30; // Posición X de la imagen
      const imgY = 5; // Posición Y de la imagen
      doc.addImage(imagen, "JPG", imgX, imgY, imgWidth, imgHeight);
      // Le asignamos un tamaño a las letras
      doc.setFontSize(12);
      doc.setTextColor("#093700");
      doc.line(0, 55, doc.internal.pageSize.width, 55);
      // Añadimos información de la empresa
      const nombreEmpresa = "Diseño Ecológico";
      const telefono = "Teléfono: 123-456-789";
      const direccion = "Dirección: Calle Principal, 123";
      const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;
      doc.text(texto, doc.internal.pageSize.width - 750, 15, {baseline:'top'});
  }
}
