import React from 'react'
import './Skill.css'
const SkillFil = () => {
  return (<div className='MainSkil'> 
    <div className='mainskill'><h1 style={{color:"black",fontSize:"60px",marginLeft:"20px"}}>Skills</h1></div>
  
  <div className='Frontskill'>


    <div className='Webprograming' >

{/*       
        <div className='leftt'>
            <h3>HTML5</h3>
        <p>advanced</p>
        <h3>CSS3</h3>
        <p>advanced</p>
        <h3>JavaScript</h3>
        <p>Intermidet</p></div> 
 
        <div className='rigtt'>
             <h3>React</h3>
        <p>Intermidet</p>
        
        <h3>PHP</h3>  
        <p>Intermdet</p>
        <h3>Bootstrup</h3>
        <h3>CSS3</h3>
        <h3>SQL</h3>
        <p>Advanced</p>
        <h3>Python</h3>
        <p>Intermidet</p></div>
         */}
        <div class="container">
  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-Html" >HTML</div></div>
  </div>
  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-css" >CSS</div></div>
  </div>
  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-js" >JavaScript</div></div>
  </div>

  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-re" >React</div></div>
  </div>
</div>
         
    </div>

    <div className="otherskl">
        {/* <h3>Adobe photoshop</h3>
      <p>Intermidet</p>
      <h3>Adobe Illustrater</h3>
      <p>Intermidet</p>
      <h3>Logo</h3> */}
     <div class="skill">
    <div class="skill-name">
    <div class="skill-level-Il" >Illustrator</div></div>
  </div>
  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-Ph" >Photoshop</div></div>
  </div>

  <div class="skill">
    <div class="skill-name">
    <div class="skill-level-Gr" >Graphics</div></div>
  </div>

        </div>
  </div>
  </div>
    
  )
}

export default SkillFil