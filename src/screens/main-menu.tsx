import house from '../../assets/background-image/house.png';

export function Page() {
  return (
    <div>
      <h1>Main Menu</h1>
      <div className="main-menu-selection">
        <button className="main-menu-button" type="button">
          PICK A SYSTEM
        </button>
        <button className="main-menu-button" type="button">
          OPTIONS
        </button>
      </div>
    </div>
  );
}

export default Page;
