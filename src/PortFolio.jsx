import React, { useEffect, useState } from 'react';
import './App.css';

function Portfolio() {
 const correctPassword = '16061996';   
 const [password1, setPassword1] = useState('');
 const [isPasswordCorrect1, setIsPasswordCorrect1] = useState(false);
 const [isCaseStudyClicked1, setIsCaseStudyClicked1] = useState(false);

 const [password2, setPassword2] = useState('');
  const [isPasswordCorrect2, setIsPasswordCorrect2] = useState(false);
  const [isCaseStudyClicked2, setIsCaseStudyClicked2] = useState(false);

  const [password3, setPassword3] = useState('');
  const [isPasswordCorrect3, setIsPasswordCorrect3] = useState(false);
  const [isCaseStudyClicked3, setIsCaseStudyClicked3] = useState(false);

  
  useEffect(() => {
    // Add an event listener for visibility change
    const handleVisibilityChange = () => {
      // Check if the tab is visible
      if (!document.hidden) {
        // Reload the page
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
 
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); 

  const openPDF= () => {
    window.open('Project management.pdf', '_blank');
  };


  const handlePasswordChange1 = (event) => {
    setPassword1(event.target.value);
  };

  const handleSubmit1 = () => {
    if (password1 === correctPassword) {
      setIsPasswordCorrect1(true);
      openPDF();
      setIsCaseStudyClicked1(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };


  const handleCaseStudyClick1 = () => {
    setIsCaseStudyClicked1(true);
  };

  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  const handleSubmit2 = () => {
    if (password2 === correctPassword) {
      setIsPasswordCorrect2(true);
      openPDF();
      setIsCaseStudyClicked2(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleCaseStudyClick2 = () => {
    setIsCaseStudyClicked2(true);
  };

  const handlePasswordChange3 = (event) => {
    setPassword3(event.target.value);
  };

  const handleSubmit3 = () => {
    if (password3 === correctPassword) {
      setIsPasswordCorrect3(true);
      openPDF();
      setIsCaseStudyClicked3(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };


  const handleCaseStudyClick3 = () => {
    setIsCaseStudyClicked3(true);
  };
  
return (
<div className="portfolio-container log-parent">
<header className="header">
<nav className="navbar">
<div className="logo logo-container"><button className="button1">KI</button><button className='button2'>KA</button></div>
<div className="menu header-container">
<a href="#works" className='class1 class2'>MY WORKS</a>
<a href="#about" className='class1'>ABOUT</a>
<a href="#resume" className='class1'>RESUME</a>
<a href="#contact" className='class2'>CONTACT ME</a>
</div>
</nav>
</header>
<div className="intro">
<h1 className='first-line'>Hi, Kirubhakaran here or just <span className="highlight">Karan</span>.</h1>
<div><img src='.\download.png' className='image'/><span className="location">CHENNAI, INDIA</span><span className="location space"><img src=".\suitcase-solid.svg" className='svg' />{" "}
 CURRENTLY WORKING <a href='https://www.siemens.com/' className='text-color'>@SIEMENS</a></span></div>
<div>
<p className="bio">
         I see myself as a UX/UI Designer with an expansive experience in building delightful and user centric digital 
</p>
<p className='bio2'>products that cater to people's goals. I get inspired as I connect with user's stories and that motivates me to </p>
<p className='bio2'>enrich each of their little</p>
</div>
<p className="btn-see-work">Scroll down to see such examples.</p>
</div>
<div className='container'>
  
<div className='image-container'>
    <img src='.\laptop.jpg' className='image-size'></img>
</div>
<div className="case-study">
<h2 className='color3'>SIMPLIFYING WORKFLOW</h2>
<p className="color4">Enhancing the role of managing projects for project </p>
<p className="color4">managers and project owners</p>
{!isCaseStudyClicked1 && (
          <button className="btn3" onClick={handleCaseStudyClick1}>Case Study</button>
        )}
        {isCaseStudyClicked1 && !isPasswordCorrect1 && (
          <div>
            <input className='password' type="password" value={password1} onChange={handlePasswordChange1} placeholder="Enter password" />
  
            <button className="btn3" onClick={handleSubmit1}>Submit</button>
            <button className="btn4" onClick={()=>{setIsCaseStudyClicked1(false)}}>Cancel</button>
            
          </div>
        )}
      </div>
    </div>
    <div className='container'>
  
<div className='image-container'>
    <img src='.\laptop.jpg' className='image-size'></img>
</div>
<div className="case-study">
<h2 className='color3'>MOMENTO</h2>
<p className="color4">Providing a meaningful life for the Alzheimer's patient </p>
<p className="color4">and assisting their family members and caretakers</p>
{!isCaseStudyClicked2 && (
          <button className="btn3" onClick={handleCaseStudyClick2}>Case Study</button>
        )}
        {isCaseStudyClicked2 && !isPasswordCorrect2 && (
          <div>
            <input className='password' type="password" value={password2} onChange={handlePasswordChange2} placeholder="Enter password" />
  
            <button className="btn3" onClick={handleSubmit2}>Submit</button>
            <button className="btn4" onClick={()=>{setIsCaseStudyClicked2(false)}}>Cancel</button>
            
          </div>
        )}
      </div>
    </div>
    <div className='container'>
  
<div className='image-container'>
    <img src='.\laptop.jpg' className='image-size'></img>
</div>
<div className="case-study">
<h2 className='color3'>PRODUCT DISCOVERY</h2>
<p className="color4">Improvising the search experience of products and its </p>
<p className="color4">developers in an organization</p>
{!isCaseStudyClicked3 && (
          <button className="btn3" onClick={handleCaseStudyClick3}>Case Study</button>
        )}
        {isCaseStudyClicked3 && !isPasswordCorrect3 && (
          <div>
            <input className='password' type="password" value={password3} onChange={handlePasswordChange3} placeholder="Enter password" />
  
            <button className="btn3" onClick={handleSubmit3}>Submit</button>
            <button className="btn4" onClick={()=>{setIsCaseStudyClicked3(false)}}>Cancel</button>
            
          </div>
        )}
      </div>
    </div>
  </div>
  
 );
}
export default Portfolio;