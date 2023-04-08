import React from 'react'
import Header from './components/Header';
import Info from './components/Info';
import './style.css'
import Skills from './components/Skills';
let skills_arr =[
  {    name :"java", friendly:"interdmediate" ,img :"https://cdn-icons-png.flaticon.com/512/1055/1055855.png"},
  {    name :"javascript", friendly:"advanced" ,img:"https://cdn-icons-png.flaticon.com/512/5345/5345636.png"},

  {    name :"react", friendly:"beginner" , img:"https://cdn-icons-png.flaticon.com/512/6662/6662934.png"}

]
const App=()=>{
  
     return(
      <div>
        <Header name="Ruby Pal" details ="Other details" />
        
        <Info heading ="About" value ="info1" description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore magni inventore. Corporis reiciendis obcaecati ipsam odit cum ad quam maxime quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugit dicta repudiandae cupiditate quisquam sint possimus vero non, nostrum voluptatibus modi consequatur. Provident maiores veniam, iure dolorum non sint in dolore corporis vitae deleniti repudiandae accusantium, itaque obcaecati omnis consequuntur ab beatae amet voluptas." />
        <Info heading ="Skills" description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore magni inventore. Corporis reiciendis obcaecati ipsam odit cum ad quam maxime quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugit dicta repudiandae cupiditate quisquam sint possimus vero non, nostrum voluptatibus modi consequatur. Provident maiores veniam, iure dolorum non sint in dolore corporis vitae deleniti repudiandae accusantium, itaque obcaecati omnis consequuntur ab beatae amet voluptas." />
        <Info heading ="Project" description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore magni inventore. Corporis reiciendis obcaecati ipsam odit cum ad quam maxime quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugit dicta repudiandae cupiditate quisquam sint possimus vero non, nostrum voluptatibus modi consequatur. Provident maiores veniam, iure dolorum non sint in dolore corporis vitae deleniti repudiandae accusantium, itaque obcaecati omnis consequuntur ab beatae amet voluptas." />

        
          <div className='flex'>
            {
           skills_arr.map((element)=>
          
          <Skills 
          name = {element.name} 
          friendly={element.friendly} 
          image={element.img}
          />
          )
            }
          </div>
        
      
      </div>
     )
}

export default App;
