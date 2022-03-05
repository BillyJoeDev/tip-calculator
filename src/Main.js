import './Main.css';
import { FaUser, FaDollarSign } from 'react-icons/fa'
import React, {useState} from 'react';

function Main() {
  const inputs = document.querySelectorAll('input');
  const tipButtons = document.querySelectorAll('.tip-button');

  const[bill, setBill] = useState(0);
  function onBillUpdate(val) 
  {
    setBill(val.target.value);
    calculateTip(val.target.value, tipPercent, people);
  }

  const[tipPercent, setTipPercent] = useState(5);
  const[tipSelected, setTipSelected] = useState(0);
  function inputPercent(val) 
  {
    var index = 6;
    if (val.target.value == '') index = 0;
    onPercentUpdated(val.target.value, index);
  }

  function onPercentUpdated(val, tipIndex)
  {
    setTipSelected(tipIndex);
    setTipPercent(val);
    calculateTip(bill, val, people);
  }

  const[people, setPeople] = useState(1);
  function onPeopleUpdated(val) 
  {
    setPeople(val.target.value);
    calculateTip(bill, tipPercent, val.target.value);
  }

  var tVar = 0;
  const[tipAmount, setTipAmount] = useState(0);
  const[tipAmountPerson, setTipAmountPerson] = useState(0);
  function calculateTip(billAmount, tip, peopleCount, reset = false) {
    if (!billAmount) billAmount = 0;
    if (!tip) tip = 5;
    if (!peopleCount) peopleCount = 1;
    if (reset) {
      inputs.forEach(input => (input.value = ''));
      tipButtons.forEach(button => (button.className = 'tip-button'));
      tipButtons[0].className = 'tip-button selected';
    }

    tVar = (billAmount * (tip / 100));
    setTipAmount(tVar);
    setTipAmountPerson(tVar / peopleCount);
  }

  return (
    <main className='wrapper'>
      <h1 className='title'>The Tip Calulator</h1>
      <div className='main-container'>
        <div className='left-flex'>
          <div className='left-bill-container'>
            <h1>Bill</h1>
            <FaDollarSign className='dollar-sign'/>
            <input onChange={onBillUpdate} type="number" placeholder="0" min={1} step="0.01" />
          </div>
          <div className='left-selecttip-container'>
            <h1>Select Tip %</h1>
            <div className='left-tipbuttons-container'>
              <button className={tipSelected == 0 ? 'tip-button selected' : 'tip-button'} onClick={()=>onPercentUpdated(5,0)}>5%</button>
              <button className={tipSelected == 1 ? 'tip-button selected' : 'tip-button'} onClick={()=>onPercentUpdated(10,1)}>10%</button>
              <button className={tipSelected == 2 ? 'tip-button selected' : 'tip-button'} onClick={()=>onPercentUpdated(15,2)}>15%</button>
              <button className={tipSelected == 3 ? 'tip-button selected' : 'tip-button'} onClick={()=>onPercentUpdated(25,3)}>25%</button>
              <button className={tipSelected == 4 ? 'tip-button selected' : 'tip-button'} onClick={()=>onPercentUpdated(50,4)}>50%</button>
              <input onChange={inputPercent} type="number" pattern="[0-9]" placeholder="Custom" min={1} max={100} step="1" />
            </div>
          </div>
          <div className='left-peoplecount-container'>
            <h1>Number of People</h1>
            <FaUser className='user-icon'/>
            <input onChange={onPeopleUpdated} type="number" placeholder="1" min={1} step="1" />
          </div>
        </div>
        <div className='right-flex'>
          <div className='right-item-container'>
            <div className='right-item'>
              <div className='right-header'>
                <h1>Tip Amount</h1>
                <p>/ person</p>
              </div>
              <p>${tipAmount.toFixed(2)}</p>
            </div>
            <div className='right-item'>
              <div className='right-header'>
                <h1>Total</h1>
                <p>/ person</p>
              </div>
              <p>${tipAmountPerson.toFixed(2)}</p>
            </div>
            <button className={bill > 0 ? 'reset-button active' : 'reset-button'} onClick={()=>calculateTip(0, 5, 1, true)}>RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
