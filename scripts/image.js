document.addEventListener('DOMContentLoaded', function () {
    const imgElement = document.getElementById('img-camp');
  
    // URL da imagem original e da imagem para hover
    const originalImageURL = 'https://img.freepik.com/vetores-gratis/macaco-bonito-com-taco-de-beisebol-com-jaqueta-e-banana-cartoon-icone-ilustracao-vetorial-natureza-animal_138676-5315.jpg';
    const hoverImageURL = 'https://img.freepik.com/vetores-gratis/macaco-legal-dabbing-ilustracao-do-icone-do-vetor-dos-desenhos-animados-conceito-de-icone-de-natureza-animal-isolado-vetor-premium-estilo-flat-cartoon_138676-3373.jpg';
  
    imgElement.addEventListener('mouseover', function () {
      // Altera a imagem para a versão "hover" quando o mouse passa sobre ela
      imgElement.src = hoverImageURL;
    });
  
    imgElement.addEventListener('mouseout', function () {
      // Restaura a imagem original quando o mouse é retirado
      imgElement.src = originalImageURL;
    });
  });