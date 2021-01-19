import './App.css';
import React from 'react';
import loh from './img/loh.jpg'
import chetko from './img/chetko.jpg'

function App() {
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [seconds, setSeconds] = React.useState('');
  const [contacts, setContacts] = React.useState('');
  const [RR, setRR] = React.useState('');
  const [FCR, setFCR] = React.useState('');
 
 let second = Number(seconds)/ 3571.42;
 let time = Number(hours) + Number(minutes)/60 + second;
 let timeZP = Math.ceil(time * 100) / 100;
 
 let contactsZp = 
 contacts<=7? 75:  
 contacts>=7 && contacts<=7.9? 85:
 contacts>=8 && contacts<=8.9? 95:
 contacts>=9 && contacts<=9.9? 115:
 contacts>=10 && contacts<=11.9? 140:
 contacts>=12 && contacts<=13.9? 160:
 contacts>=14 && contacts<=15.9? 180:
 contacts>=16? 190: ''

 let contactsRR = 
 RR<=79.99 && RR>0? 0.2:  
 RR>=80 && RR<=84.99? 0.4:
 RR>=85 && RR<=87.9? 0.5:
 RR>=88 && RR<=90.9? 0.6:
 RR>=91 ? 0.7: ""

 let contactsFCR = 
 FCR<=79.99 && FCR>0? 0.2:  
 FCR>=80 && FCR<=84.99? 0.4:
 FCR>=85 && FCR<=86.9? 0.5:
 FCR>=87 && FCR<=89.9? 0.6:
 FCR>=90 ? 0.7: ""
 
 let coefficientItem = contactsRR + contactsFCR;
 let coefficient = Math.ceil(coefficientItem * 100) / 10;
 coefficient = Math.round(coefficient);
 
 
 let totalZP = timeZP * contactsZp * coefficientItem * 0.87;
/*
 console.log(time)
 console.log(contactsRR)
 console.log(contactsFCR)
 console.log(contactsZp)*/

  return (
    <div className="App">
      <div className = "container">
      <div className="header"> <h1>Персональный калькулятор твоей ЗП</h1></div>
    <div className= "calculator">
     <div> <h2>Полезное время </h2></div>
      <div className="info__text">
       <input placeholder='часы' name="count-currency" type="number" value={hours} onChange={(event) => setHours(event.target.value)}  /> :
       <input placeholder='минуты' name="count-currency" type="number" value={minutes} onChange={(event) => setMinutes(event.target.value)} /> :
       <input placeholder='секунды' name="count-currency" type="number" value={seconds} onChange={(event) => setSeconds(event.target.value)}/>
       <p className="base__currency-rate">Показатели</p>
       </div>
       <div className="info__text-coefficient">
       <span>К/Ч</span> <input placeholder='' name="count-currency" maxlength="10" type="number" value={contacts} onChange={(event) => setContacts(event.target.value)}  />
       <span>RR</span> <input placeholder='%' name="count-currency" type="number" value={RR} onChange={(event) => setRR(event.target.value)}  />
       <span>FCR</span> <input placeholder='%' name="count-currency" type="number" value={FCR} onChange={(event) => setFCR(event.target.value)}  />
       </div>
       {hours&&minutes&&seconds&&contacts&&RR.length>=2&&FCR.length>=2&& <div><div className = "totalZP">Твоя ЗП (после вычета налога):<span className="totalZP-item">{ `${Math.floor(totalZP)} рублей`} </span></div>
   <div className="message">{
   coefficient === 4 ?  <img className="message-img" src={loh}/> : 
   coefficient === 6 ? 'Жди лещей от своего РГ':
   coefficient === 7 ? 'Молодец(нет)':
   coefficient === 8 ? 'Пойдет':
   coefficient === 9 ? 'Ну, такое':
   coefficient === 10 ? 'Нормас':
   coefficient === 11 ? 'Молодэц!':
   coefficient === 12 ? 'Капитальный красавчик':
   coefficient === 13 ? 'Вай, вай, вай, бест оф зе бест (почти)':
   coefficient === 14 ? <img className="message-img" src={chetko}/>: ''
    }
    </div>
   </div>
}
    </div>
    </div>
    <div className="footer">Design by Azat</div>
    </div>
  );
}

export default App;
