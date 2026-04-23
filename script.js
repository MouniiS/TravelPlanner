// ===================== Theme Toggle =====================
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ===================== Destinations Data (50+) =====================
const destinationsData = [
  {name: "Paris, France", image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", desc:"City of Love with Eiffel Tower & amazing food."},
  {name: "Bali, Indonesia", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc:"Tropical beaches & vibrant culture."},
  {name: "New York, USA", image:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80", desc:"Broadway, skyscrapers & Central Park."},
  {name: "Tokyo, Japan", image:"https://t3.ftcdn.net/jpg/04/98/23/10/360_F_498231018_6w6Zt0h2PdU4Muy5Tvph2VeNG67yTuwl.jpg", desc:"Bustling streets, temples & skyscrapers."},
  {name: "London, UK", image:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80", desc:"Big Ben, Tower Bridge & royal history."},
  {name: "Sydney, Australia", image:"https://www.curiousgoosetravel.com/wp-content/uploads/2023/07/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg", desc:"Opera House, Harbour Bridge & beaches."},
  {name: "Rome, Italy", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1omkNzuPW2KPP7vHxkcWSuSX1eL7qc-BZw&s", desc:"Colosseum, Vatican & ancient streets."},
  {name: "Cairo, Egypt", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNuw-U1hnyMlNQIJRuHIvP3_GmFoACxxGvw&s", desc:"Pyramids of Giza, Sphinx & Egyptian culture."},
  {name: "Barcelona, Spain", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0e8VzmPGiAUQ2jyesdE26JRfXai3elTafdQ&s", desc:"Gaudí architecture, lively streets & beaches."},
  {name: "Dubai, UAE", image:"https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", desc:"Modern skyscrapers, desert adventures & luxury."},
  {name: "Rio de Janeiro, Brazil", image:"https://static.toiimg.com/thumb/msid-117746153,width-400,resizemode-4/117746153.jpg", desc:"Christ the Redeemer, Carnival & beaches."},
  {name: "Amsterdam, Netherlands", image:"https://lp-cms-production.imgix.net/2023-03/GettyImages-937057490.jpeg?sharp=10&vib=20&w=1200&w=600&h=400", desc:"Canals, museums & cycling culture."},
  {name: "Istanbul, Turkey", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xOQhAFpubscf8x7TqkiKVRNOJabFOvKV8A&s", desc:"Mosques, markets & historic streets."},
  {name: "Santorini, Greece", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vH9Czx5jSNXvdMkOcbzu6FrK6GvxqAzHJg&s", desc:"Whitewashed houses, blue domes & sunsets."},
  {name: "Bangkok, Thailand", image:"https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=800&q=80", desc:"Temples, street food & nightlife."},
  {name: "Venice, Italy", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGLuPt5uy3Y5_uTsF1odc5wkjiveqyFIGgA&s", desc:"Canals, gondolas & romantic streets."},
  {name: "Prague, Czech Republic", image:"https://blog.northernhikes.com/wp-content/uploads/2018/12/690084.jpg", desc:"Castles, bridges & historic squares."},
  {name: "Los Angeles, USA", image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", desc:"Hollywood, beaches & entertainment capital."},
  {name: "Singapore, Singapore", image:"https://static.toiimg.com/thumb/msid-107700466,width-748,height-499,resizemode=4,imgsize-119838/.jpg", desc:"Futuristic city, gardens & Marina Bay Sands."},
  {name: "Hong Kong, China", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44MjXwAx1vCDoU_wz3yZd6KKcgdwUaw2OjA&s", desc:"Skyscrapers, Victoria Harbour & nightlife."},
  {name: "Lisbon, Portugal", image:"https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80", desc:"Historic trams, colorful streets & ocean views."},
  {name: "Moscow, Russia", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVmafBinB9ZuloguVmGN98gSRANndvCQeiQ&s", desc:"Red Square, Kremlin & historic architecture."},
  {name: "Seoul, South Korea", image:"https://tz-mag-media.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/06/15110256/wp-jeju-island-attractions.jpg", desc:"Palaces, street markets & nightlife."},
  {name: "Vienna, Austria", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCkmB1Rs_3x-nkZnkYOLMfRYxtGTXSoi4Iw&s", desc:"Historic cafes, palaces & music culture."},
  {name: "Cape Town, South Africa", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc:"Table Mountain, beaches & wildlife."},
  {name: "Hanoi, Vietnam", image:"https://clubmahindra.gumlet.io/blog/media/section_images/7-dayvietn-4bef26b27a670c1.jpg?w=376&dpr=2.6", desc:"Old quarter, street food & lakes."},
  {name: "Mexico City, Mexico", image:"https://skyticket.com/guide/wp-content/uploads/2019/06/5298edde69ac67488f4aa2b156f67036.jpg", desc:"Historic centers, museums & culture."},
  {name: "Toronto, Canada", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebQY40QHc6JIDxnsmUJATymLJTPUiK-JWHQ&s", desc:"CN Tower, lakes & vibrant city life."},
  {name: "Mumbai, India", image:"https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&w=800&q=80", desc:"Gateway of India, markets & beaches."},
  {name: "Buenos Aires, Argentina", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgJyYVzgBDwQfnyiN_vyqsJhcHey7fqMhmQ&s", desc:"Tango, colorful streets & cafes."},
  {name: "Lima, Peru", image:"https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=800&q=80", desc:"Historic center, food & culture."},
  {name: "Athens, Greece", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc:"Acropolis, historic streets & Mediterranean vibes."},
  {name: "Berlin, Germany", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3CDM_hsw2w9nqG8kXUlULinmiLH64ZEyMA&s", desc:"Berlin Wall, museums & nightlife."},
  {name: "Edinburgh, Scotland", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKI7RYv1Pcb96Gm9X9CV6450kEDooRxg99w&s", desc:"Castle, historic streets & festivals."},
  {name: "Helsinki, Finland", image:"https://static.toiimg.com/thumb/98999182/Finland.jpg?width=1200&height=900", desc:"Design, saunas & coastal views."},
  {name: "Oslo, Norway", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF5CCMMGR3TJmaDG_9nrd4sGNbNq_jsgR3Q&s", desc:"Fjords, museums & scenic landscapes."},
  {name: "Stockholm, Sweden", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1i47u-MOkHVUsUaOo1cbFAeE11PJCCqg-A&s", desc:"Canals, archipelago & culture."},
  {name: "Dubai Marina, UAE", image:"https://media.cntravellerme.com/photos/6568886c4e664d4bc1517d49/16:9/w_2560%2Cc_limit/1267688711", desc:"Skyscrapers, yachts & luxury lifestyle."},
  {name: "Kuala Lumpur, Malaysia", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72aR3BO8l2zSEJLergnp48MfzPfD9wnXYIg&s", desc:"Petronas Towers, markets & culture."},
  {name: "Marrakech, Morocco", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSej0l-tT7H0NqxqjyNvLlLX2u9gWNWD89R8Q&s", desc:"Souks, palaces & desert vibes."},
  {name: "Jakarta, Indonesia", image:"https://etimg.etb2bimg.com/photo/115997634.cms", desc:"Skyscrapers, culture & vibrant streets."},
  {name: "Lyon, France", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthxHe1K6RFiO_m9uuJfIuOxA83B6qc13ORA&s", desc:"Historic streets, rivers & gastronomy."},
  {name: "Naples, Italy", image:"https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg", desc:"Pizza, coast & historic sites."},
  {name: "Osaka, Japan", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vaBCRADlEadSDL4r9Fvlltdj0tPgf1iRjA&s", desc:"Street food, temples & nightlife."},
  {name: "Quebec City, Canada", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbk988BDf3mgb8BElb-LoAsqn-DgMV1nefog&s", desc:"Historic city, rivers & castles."},
  {name: "Vancouver, Canada", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg", desc:"Mountains, oceans & city life."}
];

// ===================== Generate Cards =====================
const cardsContainer = document.querySelector(".cards");
destinationsData.forEach(dest => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-destination", dest.name.split(",")[0]);

  card.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}">
    <h3>${dest.name}</h3>
    <p>${dest.desc}</p>
    <button class="btn book-btn" data-url="booking.html?destination=${encodeURIComponent(dest.name.split(",")[0])}">Book Now</button>
  `;

  cardsContainer.appendChild(card);
});

// ===================== GSAP Animations =====================
gsap.from(".hero-content h1", { y: -50, opacity: 0, duration: 1.5, ease: "power4.out" });
gsap.from(".hero-content p", { y: 30, opacity: 0, duration: 1.5, delay: 0.5, ease: "power2.out" });
gsap.from(".hero-content .btn", { scale: 0.8, opacity: 0, duration: 1.2, delay: 1, ease: "back.out(1.7)" });
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reset" },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.05
  });
});

// ===================== Search Filter =====================
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
      const dest = card.dataset.destination.toLowerCase();
      card.style.display = dest.includes(term) ? "block" : "none";
    });
  });
}

// ===================== Book Now Handler =====================
document.addEventListener("click", function(e){
  if(e.target && e.target.classList.contains("book-btn")){
    const btn = e.target;
    const card = btn.closest(".card");
    const destination = card.querySelector("h3").innerText;
    const image = card.querySelector("img").src;
    const url = btn.dataset.url;

    const bookingTime = new Date().toLocaleString();
    let plans = JSON.parse(localStorage.getItem("myPlans")) || [];
    const newPlan = {destination, image, bookingTime};

    if(!plans.some(plan => plan.destination === destination)){
      plans.push(newPlan);
      localStorage.setItem("myPlans", JSON.stringify(plans));
      alert(destination + " added to your plans ✅");

      if(url) window.location.href = url;
    } else {
      alert(destination + " is already in your plans!");
    }
  }
});
