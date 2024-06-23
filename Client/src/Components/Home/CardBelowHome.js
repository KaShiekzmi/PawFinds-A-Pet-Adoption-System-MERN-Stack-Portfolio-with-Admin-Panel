import React from 'react';
import HomeDarkCardLeftPic from "./images/HomeDarkCardLeftPic.png";
import HomeDarkCardRightPic from "./images/HomeDarkCardRightPic.png";

const formatNumber = (number) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + number).length / 3);
    const shortNumber = parseFloat((number / Math.pow(1000, suffixNum)).toFixed(1));
    return shortNumber >= 1 ? `${shortNumber}${suffixes[suffixNum]}${"+"}` : number.toString();
  };

const CardBelowHome = () => {
    const adoptedPets = formatNumber(1212);
  return (
    <div className='dark-grey-container'>
      <div className='left-pic'><img src={HomeDarkCardLeftPic} alt="Dog with toy"/></div>
      <div className='left-para'><p><p className='adopted-pets-num'>{adoptedPets}</p> Furry Friends<br/>Living Their Best Lives</p></div>
      <div className='right-pic'><img src={HomeDarkCardRightPic} alt="Dog pic" /></div>
      <div className='right-para'><p className='we-do'>WHAT WE DO?</p>With a focus on matching the right pet with the right family, PawFinds makes it easy to adopt love and foster happiness.</div>
    </div>
  )
}

export default CardBelowHome;