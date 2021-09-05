import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import imgGoku from './images/descarga.png';
import imgVegeta from './images/vegeta.png';
import imgPicoro from './images/picoro.png';
import imgFreezer from './images/freezer.png';
import imgMajinboo from './images/majinboo.png';
import imgYamcha from './images/yamcha.png';
import imgGoham from './images/goham.png';
class App extends Component {
  render() {
    const siglo=21;
    const info={
      name:"Dragon ball z",
      caps:"293",
      author:"Akiratoriyama",


    }
    const goku={
      name:"Son GOKU",
      height:"175cm",
      race:"saiyan",
      fases:["Super Sayan 1","Super Sayan 2","Super Sayan 3","Good","Blue","Ultrainstinc"],
     
    }
    const picoro={
      name:"picoro",
      height:"236cm",
      race:"Namekusei",
    }
    const freezer={
      name:"Freezer",
      height:"158cm",
      race:"Furiza-zoku",
    }
    const majinBoo={
      name:"Majin Boo",
      height:"244cm",
      race:"Majin"
    }
    const yamcha={
      name:"yamcha",
      height:"183cm",
      race:"human",
    }
    const goham={
      name:"Goham",
      height:"176cm",
      race:"saiyan/human"
    }
    const vegeta={
      name:"Vegeta",
      height:"164",
      race:"saiyan",
      fases:["Super Sayan 1","Super Sayan 2","Super Sayan 3","Good","Blue"],

    }

    return (
      <div>
       <header>
       <h1>{info.name}</h1>
       <h2>{info.caps}</h2>
       <h3>{info.author}</h3>
         </header>
         <main>
          <section class="goku">
<div class="name__character--dbz">
<img src={imgGoku}/>
</div>
<div class="name__characteristics--dbz">
  <p>{goku.name}</p>
  <p>{goku.height}</p>
  <p>{goku.race}</p>
  <p>Fases {goku.fases+" "}</p>
  </div>      
         
          </section>
          <section>
<div class="name__character--dbz">
<img src={imgVegeta}/>
</div>
<div class="name__characteristics--dbz">
  <p>{vegeta.name}</p>
  <p>{vegeta.height}</p>
  <p>{vegeta.race}</p>
  <p>Fases {vegeta.fases+" "}</p>
  </div>      
         
          </section>
          <section>
<div class="name__character--dbz">
<img src={imgPicoro}/>
</div>
<div class="name__characteristics--dbz">
  <p>{picoro.name}</p>
  <p>{picoro.height}</p>
  <p>{picoro.race}</p>

  </div>      
         
          </section>
          <section>
<div class="name__character--dbz">
<img src={imgFreezer}/>
</div>
<div class="name__characteristics--dbz">
  <p>{freezer.name}</p>
  <p>{freezer.height}</p>
  <p>{freezer.race}</p>

  </div>      
         
          </section>


          <section>
<div class="name__character--dbz">
<img src={imgMajinboo}/>
</div>
<div class="name__characteristics--dbz">
  <p>{majinBoo.name}</p>
  <p>{majinBoo.height}</p>
  <p>{majinBoo.race}</p>

  </div>      
         
          </section>
          <section>
<div class="name__character--dbz">
<img src={imgYamcha}/>
</div>
<div class="name__characteristics--dbz">
  <p>{yamcha.name}</p>
  <p>{yamcha.height}</p>
  <p>{yamcha.race}</p>

  </div>      
         
          </section>
          <section>
<div class="name__character--dbz">
<img src={imgGoham}/>
</div>
<div class="name__characteristics--dbz">
  <p>{goham.name}</p>
  <p>{goham.height}</p>
  <p>{goham.race}</p>

  </div>      
         
          </section>
         </main>

      </div>
    );
  }

 
}

export default App;
