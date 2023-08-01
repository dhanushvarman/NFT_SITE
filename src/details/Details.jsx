import coin from "../assests/coin.png";
import data_collection from "../assests/data-collection.png";
import paint_palette from "../assests/paint-palette.png";
import task_list from "../assests/task-list.png";

const cardDetails = [
  {
    title: "Best collection",
    img: data_collection,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "List of theme",
    img: task_list,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "Great artists",
    img: paint_palette,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "Coin exchange",
    img: coin,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
];

function DetailsCard({ card }) {
  const { title, img, description } = card;

  return (
    <div class="card text-center details-card-color">
      <div class="card-body position-relative">
        <div className="mb-4 position-absolute top-0 start-50 translate-middle">
          <img src={img} className="w-100" />
        </div>
        <h5 class="card-title mt-5 text-white">{title}</h5>
        <p class="card-text details-card-description-color">{description}</p>
      </div>
    </div>
  );
}

export default function Details() {
  return (
    <>
      <div className="col-5">
        <h1 className="my-5">
          <div>We give the best quality</div>
          <br />
          <span className="nft-text">NFT</span> for you
        </h1>
        <span className="details-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, mollitia autem sequi fugit
          voluptate saepe consectetur eos deserunt dicta dolor praesentium eum eveniet omnis explicabo dolore,
          necessitatibus impedit inventore.
        </span>
        <div>
          <button className="btn nav-btn text-white mt-4">See more</button>
        </div>
      </div>
      <div class="col-7">
        <div className="container">
          <div className="row">
            {cardDetails.map((card, index) => {
              return (
                <div key={index} className="col-6 my-5">
                  <DetailsCard card={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
