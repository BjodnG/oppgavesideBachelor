
  const content = [
    {
      overskrift: 'Prosjektskisse',
      pdf: './documents/Bachelor-Prosjektskisse.pdf'
    },
    {
      overskrift: 'Forprosjekt',
      pdf: './documents/Forprosjekt.pdf'
    },
    {
      overskrift: 'Prosjektoppgave',
      pdf: './documents/Prosjektoppgave.pdf'
    }
  ];
  const profiler = [
    {
      name: 'Bjørn Golberg',
      profilbilde: './documents/BjornG.jpg'
    },
    {
      name: 'Thomas Guest',
      profilbilde: './documents/ThomasG.jpg'
    },
    {
      name: 'Thomas Langseth',
      profilbilde: './documents/ThomasL.jpg'
    },
    {
      name: 'Kim Knudsen',
      profilbilde: './documents/KimFK.jpg'
    },
    {
      name: 'Lars Magnus Henriksen',
      profilbilde: './documents/LarsMH.jpg'
    }
  ]
  produserPdfContainers(content);
  produserProfilbilder(profiler);


  //Metoder:

  function produserPdfContainers(contentlist){

    const mainElement = document.getElementsByTagName("main")[0];

    contentlist.forEach( (content) => {

      const pdfContainer = document.createElement("div");
      pdfContainer.className = 'pdfContainer';
      /*
      const pointerContainer = document.createElement('div')
      const pointer = document.createElement('i')
      pointer.className = 'right';
      pointerContainer.appendChild(pointer)
      pointerContainer.className = "pointerContainer"
      */
      const pdfContainerOverskrift = document.createElement("div");
      pdfContainerOverskrift.className += 'pdfContainerOverskrift';
      const overskrift = document.createElement('h1');
      const overskrifttekst = document.createTextNode(content.overskrift);
      overskrift.appendChild(overskrifttekst);
      pdfContainerOverskrift.appendChild(overskrift);
      pdfContainerOverskrift.addEventListener('click', () => { utvidDiv(pdfContainer); });

      const pdfContainerInnhold = document.createElement("div");
      pdfContainerInnhold.className += 'pdfContainerInnhold';
      PDFObject.embed(content.pdf, pdfContainerInnhold);

      //pdfContainerOverskrift.appendChild(pointerContainer)
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

  function produserProfilbilder(profiler) {
    const footerElement = document.getElementsByTagName("footer")[0]
    const profilerContainer = document.createElement('div')
    profilerContainer.id = 'profilerContainer'

    profiler.forEach( (profil) => {
      const profilContainer = document.createElement('div')
      profilContainer.className = 'profilContainer'

      const image = document.createElement("img")
      image.src = profil.profilbilde
      image.className = 'profileBilde'

      const label = document.createElement('div')
      const labelText = document.createTextNode(profil.name)
      label.appendChild(labelText)

      profilContainer.appendChild(image)
      profilContainer.appendChild(label)
      profilerContainer.appendChild(profilContainer)

    })
    footerElement.appendChild(profilerContainer)
  }
