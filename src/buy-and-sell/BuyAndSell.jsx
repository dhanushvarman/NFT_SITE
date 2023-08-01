import blockchain from "../assests/blockchain (2).png";
import wallet from "../assests/wallet.png";
import cart from "../assests/cart.png";

const cardDetails = [
  {
    title: "Connect wallet",
    img: wallet,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum, maiores architecto aliquam aspernatur impedit culpa sint obcaecati ad sunt porro reprehenderit incidunt deserunt eligendi earum quas quasi itaque sit.",
  },
  {
    title: "Add your NFTs",
    img: cart,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum, maiores architecto aliquam aspernatur impedit culpa sint obcaecati ad sunt porro reprehenderit incidunt deserunt eligendi earum quas quasi itaque sit.",
  },
  {
    title: "List them for sale",
    img: blockchain,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum, maiores architecto aliquam aspernatur impedit culpa sint obcaecati ad sunt porro reprehenderit incidunt deserunt eligendi earum quas quasi itaque sit.",
  },
];

export default function BuyAndSell() {
  return (
    <>
      <h1 className="text-center mb-5">
        buy and sell your <span className="nft-text">NFT</span>
      </h1>
      {cardDetails.map((card, index) => {
        const { title, img, description } = card;

        return (
          <div className="col-4 mt-4">
            <div key={index} class="card text-center details-card-color">
              <div class="card-body mt-4">
                <img src={img} className="w-10" />
                <h5 class="card-title mt-4 text-white">{title}</h5>
                <p class="card-text details-card-description-color">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
