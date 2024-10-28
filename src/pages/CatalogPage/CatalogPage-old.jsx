// import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

import { Button } from "@/components"
import sprite from "@/assets/icons/sprite.svg";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [searchParams] = useSearchParams();

  // // location
  // const location = searchParams.get("location");
  
  // // equipment
  // const hasAc = searchParams.has("ac");
  // const hasAutoTransmission = searchParams.has("automatic");
  // const hasKitchen = searchParams.has("kitchen");
  // const hasTv = searchParams.has("tv");
  // const hasBathroom = searchParams.has("bathroom");
  
  // // vehicle type
  // const vehicleType = searchParams.get("type");
  
  // Query example:
  // ?location=Kyiv,%20Ukraine&ac&automatic&kitchen&tv&bathroom&type=van
  return (
    <section className={clsx(css["catalog-section"], "container")}>
      <search className={css["search-filter"]}>
        <form className={css["filter-form"]}>
          <label className="location">Location
            <input type="text" name="location" />
          </label>
          <div className={css["filters-wrapper"]}>
          <p>Filters</p>
          <fieldset className={css["filter"]}>
            <legend>Vehicle equipment</legend>
            <label>
              AC
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Automatic
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Kitchen
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              TV
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Bathroom
              <input type="checkbox" name="" id="" />
            </label>
          </fieldset>
          <fieldset className={css["filter"]}>
            <legend>Vehicle type</legend>
            <label>
              Van
            <input type="radio" name="vehicle-type" id="" />
            </label>
            <label>
              Fully Integrated
            <input type="radio" name="vehicle-type" id="" />
            </label>
            <label>
              Alcove
            <input type="radio" name="vehicle-type" id="" />
            </label>
            </fieldset>
          </div>
          <Button type="submit" className={css["search-submit-btn"]}>Search</Button>
        </form>
      </search>
      <div className={css["catalog-list-wrapper"]}>
        <ul className={css["catalog-list"]}>
          <li className={css["catalog-list-item"]}>
            <div className={css.card}>
              <img src="../../assets/images/hero-bg.webp" alt="preview" />
              <div className={css["card-details"]}>
                <div className={css["title-wrapper"]}>
                  <h3>Mavericks</h3>
                  <p>€8000.00</p>
                  <button className={css["favorite-btn"]}>
                    <svg className={css["favorite-icon"]} aria-label="favorite icon">
                      <use href={`${sprite}#icon-heart`}></use>
                    </svg>
                  </button>
                </div>
                <div className="stats">
                  <div className={css["card-rating"]}>rating</div>
                  <p className={css["card-location"]}>Kyiv, Ukraine</p>
                </div>
                <p className={css["card-description"]}>Embrace simplicity and freedom with the Mavericks panel truck...</p>
                <ul className={css["badges-wrapper"]}>
                  <li className={css.badge}>
                    <svg className={css["badge-icon"]} aria-label="badge icon">
                      <use href={`${sprite}#icon-diagram`}></use>
                    </svg>
                    Automatic
                  </li>
                  <li className={css.badge}>
                    <svg className={css["badge-icon"]} aria-label="badge icon">
                      <use href={`${sprite}#icon-fuel-pump`}></use>
                    </svg>
                    Petrol
                  </li>
                  <li className={css.badge}>
                    <svg className={css["badge-icon"]} aria-label="badge icon">
                      <use href={`${sprite}#icon-cup-hot`}></use>
                    </svg>
                    Kitchen
                  </li>
                  <li className={css.badge}>
                    <svg className={css["badge-icon"]} aria-label="badge icon">
                      <use href={`${sprite}#icon-wind`}></use>
                    </svg>
                    AC
                  </li>
                </ul>
                <Button>Show more</Button>
              </div>
            </div>
          </li>
          <li className={css["catalog-list-item"]}>
            Card
          </li>
          <li className={css["catalog-list-item"]}>
            Card
          </li>
          <li className={css["catalog-list-item"]}>
            Card
          </li>
        </ul>
        <Button style="secondary" className={css["load-more-btn"]}>Load more</Button>
      </div>
    </section>

    // <div>CatalogPage</div>
    //     <ul>
    //       <li>Location: { location }</li>
    //       <li>AC: { hasAc ? "true" : "false" }</li>
    //       <li>Automatic Transmission: { hasAutoTransmission ? "true" : "false" }</li>
    //       <li>Kitchen: { hasKitchen ? "true" : "false" }</li>
    //       <li>TV: { hasTv ? "true" : "false" }</li>
    //       <li>Bathroom: { hasBathroom ? "true" : "false" }</li>
    //       <li>Vehicle Type: { vehicleType }</li>
    //     </ul>
  );
};

export default CatalogPage;