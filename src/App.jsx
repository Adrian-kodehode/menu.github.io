import "./App.css";
import Menu from "./Menu.jsx";

function App() {
  const meny = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      price: "159 kr",
      ingredients: "Spaghetti, kjøttsaus, parmesan",
      category: "Hovedrett",
      image:
        "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/m54yfcc8pq399znzcxvg/spaghetti-bolognese-med-oksekraft-og-soltorket-tomat",
    },
    {
      id: 2,
      name: "Kremet Kyllingsuppe",
      price: "129 kr",
      ingredients: "Kylling, fløte, gulrøtter, selleri",
      category: "Forrett",
      image:
        "https://cdn-yams.godt.no/api/v1/godt-recipe/images/kremet-kyllingsuppe---smakfull-suppe-med-pasta?rule=w4000_auto",
    },
    {
      id: 3,
      name: "Margarita Pizza",
      price: "169 kr",
      ingredients: "Tomatsaus, mozzarella, basilikum",
      category: "Hovedrett",
      image:
        "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/mnnrfrpmfqbjtnxdycf2/klassisk-pizza-margherita",
    },
    {
      id: 4,
      name: "Sushi Mix",
      price: "229 kr",
      ingredients: "Laks, tunfisk, reker, ris",
      category: "Hovedrett",
      image:
        "https://www.uramaki.co.uk/cdn/shop/products/MixedA4_2000x.jpg?v=1635872932",
    },
    {
      id: 5,
      name: "Cæsarsalat",
      price: "139 kr",
      ingredients: "Romanosalat, kylling, parmesan, dressing",
      category: "Forrett",
      image:
        "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/cny4xyr7yulkdlq3o31l/klassisk-caesarsalat-med-kylling-og-bacon",
    },
    {
      id: 6,
      name: "Brownie med Is",
      price: "89 kr",
      ingredients: "Brownie, vaniljeis, sjokoladesaus",
      category: "Dessert",
      image: "https://mills.no/content/uploads/2016/10/Klassiske-brownies.jpg",
    },
    {
      id: 7,
      name: "Taco Tallerken",
      price: "199 kr",
      ingredients: "Kjøttdeig, mais, ost, guacamole",
      category: "Hovedrett",
      image:
        "https://www.getserveware.com/wp-content/uploads/2022/09/tacos-hand-painted-look-melamine-platter.jpg",
    },
    {
      id: 8,
      name: "Pannekaker med Syltetøy",
      price: "99 kr",
      ingredients: "Pannekaker, jordbærsyltetøy, sukker",
      category: "Dessert",
      image:
        "https://cdn.sanity.io/images/me2oluor/production/33805868a62dd6f8ae67c8ad96b3895bc1eaa432-3734x2489.jpg?rect=165,436,3073,1934&w=3840&q=75&fit=clip&auto=format",
    },
    {
      id: 9,
      name: "Reker med Sitron",
      price: "149 kr",
      ingredients: "Reker, sitron, dill, brød",
      category: "Forrett",
      image:
        "https://mills.no/content/uploads/2016/07/RekesmC3B8rdbrC3B8d_1920-1024x650.jpg",
    },
    {
      id: 10,
      name: "Entrecôte med Grønnsaker",
      price: "289 kr",
      ingredients: "Entrecôte, asparges, poteter, peppersaus",
      category: "Hovedrett",
      image:
        "https://images.squarespace-cdn.com/content/v1/60256df699d50c293f26529a/1615854117761-P959NMUZFP3O1LQSV2ND/dsc_0887-001.jpg",
    },
  ];

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;
