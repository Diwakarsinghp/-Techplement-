
async function init() {
  let couresData = await fetchCoures();
  let testmonialData = await fetchTestMonials();

  couresData.forEach((data) => {
    addCouresDataToDom(
      data.picture,
      data.title,
      data.description,
      data.instructor,
      data.duration,
      data.level,
      data.price,
      data.id
    );
  });

  testmonialData.forEach((data) => {
    addTestmonialToDom(
      data.city,
      data.img,
      data.name,
      data.transformation,
      data.id
    );
  });
}

init();

// >>>>>>>>>>>>>>>>>> fetch courres data Start <<<<<<<<<<<<<<<<<<<<

const couresContainer = document.getElementById("container");
async function fetchCoures() {
  try {
    let res = await fetch("data.json");
    let data = await res.json();
    console.log("fetctfunction", data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

let couresCard = "";
function addCouresDataToDom(
  picture,
  title,
  description,
  instructor,
  duration,
  level,
  price,
  id
) {
  couresCard += ` 
  <div id="card">
   <img  src=${picture} alt="${id}"/>
   <h4> ${title}</h4>
   <p> ${description}</p>
   <p> Instructor : ${instructor}</p>
   <p> Duration : ${duration}</p>
   <p> Level :${level}</p>
   <p> Price :${price} $</p>
    <div>
    <button class="coures-btn"> Add to Cart </button>
    </div>
  </div>
`;
  couresContainer.innerHTML = couresCard;
}

// >>>>>>>>>>>>>>>>>> fetch courres data End <<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>> fetch testmonial data Start <<<<<<<<<<<<<<<
let testMonialsContainer = document.getElementById("card-container");
let testmonialsCard = "";

async function fetchTestMonials() {
  try {
    let res = await fetch("testmonials.json");
    let data = await res.json();
    console.log("test", data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function addTestmonialToDom(city, img, name, transformation, id) {
  testmonialsCard += `
      <div class="testcard">
      <img src=${img} class="test-card-img" alt= ${name} />
      <h4> Name : ${name} </h4> 
      <p> Transformation : ${transformation} <p> 
      <p> City : ${city} <p> 
      </div>
  `;
  testMonialsContainer.innerHTML = testmonialsCard;
}

export { init };



// >>>>>>>>>>>>>>>>>> fetch testmonial data end <<<<<<<<<<<<<<<<
