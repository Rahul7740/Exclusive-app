import "./Categories.css";

import CategoriesImg from "./images/CategoriesImg";

const categories = [
  { name: "Phones", icon: CategoriesImg.phone },
  { name: "Computers", icon: CategoriesImg.computer },
  { name: "SmartWatch", icon: CategoriesImg.smartWatch },
  { name: "Camera", icon: CategoriesImg.camera, selected: true },
  { name: "HeadPhones", icon: CategoriesImg.headPhone },
  { name: "Gaming", icon: CategoriesImg.gamePad },
];

function Categories() {
  return (
    <section className="all-section">
      <div className="container">
        <div className="sections-name">Categories</div>
        <div className="category-browse">
          <div className="flex-spaceBetween section-title">
            <h2>Browse By Category</h2>
            <div className="heading-arrows">
                <img src={CategoriesImg.leftArrow}/>
                <img src={CategoriesImg.rightArrow}/>
            </div>
          </div>
          <div className="categories">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-card ${
                  category.selected ? "selected" : ""
                }`}
              >
                <img src={category.icon} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;
