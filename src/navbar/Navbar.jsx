export default function Navbar() {
  return (
    <>
      <div className="col-6 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-2">Logo</div>
            <div className="col-10">
              <span className="me-4">Market place</span>
              <span className="me-4">About us</span>
              <span className="me-4">Contact us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3  mt-4">
        <div class="input-group input-group-sm ">
          <input
            type="text"
            class="form-control details-color shadow-none search-input bg-transparent"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text search-input bg-transparent details-color" id="basic-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <i class="fa-solid fa-bell fa-xl mt-3 ms-4 me-3"></i>
        </div>
      </div>
      <div className="col-3 mt-4">
        <button className="btn nav-btn text-white">Create</button>
        <button className="btn nav-btn ms-4 text-white">Connect Wallet</button>
      </div>
    </>
  );
}
