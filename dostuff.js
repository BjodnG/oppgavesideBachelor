
  const content = [
    {
      overskrift: 'Prosjektskisse',
      pdf: './documents/Bachelor-Prosjektskisse.pdf.'
    },
    {
      overskrift: 'Forprosjekt',
      pdf: './documents/Forprosjekt.pdf.'
    }
  ];

  produserPdfContainers(content);



  //Metoder:

  function produserPdfContainers(contentlist){

    const mainElement = document.getElementsByTagName("main")[0];

    contentlist.forEach((content)=>{

      const pdfContainer = document.createElement("div");
      pdfContainer.className = 'pdfContainer';

      const pdfContainerOverskrift = document.createElement("div");
      pdfContainerOverskrift.className += 'pdfContainerOverskrift';
      const overskrift = document.createElement('h1');
      const overskrifttekst = document.createTextNode(content.overskrift);
      overskrift.appendChild(overskrifttekst);
      pdfContainerOverskrift.appendChild(overskrift);
      pdfContainerOverskrift.addEventListener('click', ()=>{utvidDiv(pdfContainer);});

      const pdfContainerInnhold = document.createElement("div");
      pdfContainerInnhold.className += 'pdfContainerInnhold';
      PDFObject.embed(content.pdf, pdfContainerInnhold);

      pdfContainer.appendChild(pdfContainerOverskrift);
      pdfContainer.appendChild(pdfContainerInnhold);

      mainElement.appendChild(pdfContainer);

    });
  }

  function utvidDiv(parent){
    console.log(123);
    //console.log(element);
    const element = parent.getElementsByClassName('pdfContainerInnhold')[0];

    if (element.style.height != '750px')
      element.style.height = '750px';
    else
      element.style.height = '0px';

  }
