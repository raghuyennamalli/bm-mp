function buttonClicked() {
	
  var button1 = document.getElementById("image-button");
  
  var newItem = document.createElement("div");
  newItem.className = "onclick";
  
  var newImage = document.createElement("img");
  newImage.src = 'uploads/Prof B. Jayaram.png';
  newImage.style.float = 'center';
  newItem.appendChild(newImage);
  
  var newText = document.createElement("p");
  var newText1 = document.createElement("p");
  newText.textContent = "Prof. B. Jayaram,Emeritus Professor, Indian Institute of Technology(IIT) Delhi";
  newText1.textContent = "Title: Genome to drug in silico: a country   path today; a highway tomorrow";
  newItem.appendChild(newText);
  newText1.style.fontWeight = "bold";
  newText.appendChild(newText1);
  
  var itemsContainer = document.getElementById("text");
  itemsContainer.appendChild(newItem);
  
   button1.addEventListener("click", function() {
    // Toggle the visibility of the image and text
  if (newItem.style.display === "none") {
      newImage.style.display = "block";
      newText.style.display = "block";
  } else {
      newImage.style.display = "none";
      newText.style.display = "none";
    }
  });
}

function buttonClicked1() {
	
  var button1 = document.getElementById("image-button1");

  var newItem = document.createElement("div");
  newItem.className = "onclick1";

  var newImage = document.createElement("img");
  newImage.src = 'uploads/K GANAPATHY AYAPPA.jpg';
  newItem.appendChild(newImage);
  
  var newText = document.createElement("p");
  var newText1 = document.createElement("p");
  newText.textContent = "Prof. K. Ganapathy Ayappa, Professor of Chemical Engineering, Indian Institute of Science (IISc) Bangalore";
  newText1.textContent = "Title: breaching the bacterial cell surface";
  newItem.appendChild(newText);
  newText1.style.fontWeight = "bold";
  newText.appendChild(newText1);
	
  var itemsContainer = document.getElementById("text1");
  itemsContainer.appendChild(newItem);
  
   button1.addEventListener("click", function() {
    // Toggle the visibility of the image and text
  if (newItem.style.display === "none") {
      newImage.style.display = "block";
      newText.style.display = "block";
  } else {
      newImage.style.display = "none";
      newText.style.display = "none";
    }
  });
}
	