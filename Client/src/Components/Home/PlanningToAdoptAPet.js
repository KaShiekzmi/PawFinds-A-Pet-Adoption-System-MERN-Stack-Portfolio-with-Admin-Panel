import React from 'react';
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className='planning-container'>
        <h1>Planning to Adopt a Pet?</h1>
        <div className='boxes-container'>
            <Card title="The Joy of Pet Adoption" description="Bringing a pet into your life can be an incredibly rewarding experience, not just for you but for the furry friend you welcome into your home. There's a special kind of magic that comes with adopting any companion animal."/>
            <Card title="A Guide to Pet Adoption" description="Are you considering adding a new pet to your family? Pet adoption is a wonderful option to consider. The journey of finding the ideal companion involves careful thought, research, and planning, but the rewards are immeasurable. "/>
            <Card title="Healing Power of Animal" description="Animals have an extraordinary ability to touch our lives in profound ways, offering not only companionship but also a therapeutic bond that can positively impact our physical, mental, and emotional well-being"/>
        </div>
    </div>
  )
}

export default PlanningToAdoptAPet;