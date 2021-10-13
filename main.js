var names=[
  "1. my father (Rai Khatao)",
  "2. My mother (Poonam C. Khatao)",
  "3. My brother (Krish khatao)",
  "4. Me (Bobby Khatao)",
  ];
var images=[
  "dad.jpg",
  "mom.jpg",
  "brother.png.png",
  "me.jpg",
];
var i=0;
function family(){
  document.getElementById("one").innerHTML=names[i];
  document.getElementById("family_img").src=images[i];
  i++;
  if(i==4){
    i=0;
  }}
