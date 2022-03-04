import './Main.css';

function Main() {
  return (
    <main className='wrapper'>
      <div className='main-container'>
        <div className='left-flex'>
          <div className='left-bill-container'>
            <h1>Bill</h1>
            <input type="number" placeholder="0" min={1} step="0.01" />
          </div>
          <div className='left-selecttip-container'>
            <h1>Select Tip %</h1>
            <div className='left-tipbuttons-container'>
              <button className='tip-button'>5%</button>
              <button className='tip-button'>10%</button>
              <button className='tip-button'>15%</button>
              <button className='tip-button'>25%</button>
              <button className='tip-button'>50%</button>
              <input type="number" placeholder="Custom" min={1} step="0.01" />
            </div>
          </div>
          <div className='left-peoplecount-container'>
            <h1>Number of People</h1>
            <input type="number" placeholder="1" min={1} step="0.01" />
          </div>
        </div>
        <div className='right-flex'>
          <div className='right-item-container'>
            <div className='right-item'>
              <div className='right-header'>
                <h1>Tip Amount</h1>
                <p>/ person</p>
              </div>
              <p>$4.27</p>
            </div>
            <div className='right-item'>
              <div className='right-header'>
                <h1>Total</h1>
                <p>/ person</p>
              </div>
              <p>$32.79</p>
            </div>
            <button>RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
