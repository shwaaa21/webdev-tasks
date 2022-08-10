import React, { useState } from 'react'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import "./style.css";
import Navbar from './Navbar';


//This function is to get unique category in single format
const uniqueList=[
  ...new Set(Menu.map((loopcard)=>{
return loopcard.category;

})),"All",

];
//*****************************************************************88 */


function Resturant() {

//********************Hooks**************************************8 */
const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

//This is to filter the category one by one hardcoded
const  filterItem =(category)=>{
  //Map.filter 
if(category==="All"){

  setMenuData(Menu);
  return;
}

  const updatedList=Menu.filter((loopcard)=>{
    return loopcard.category===category;
  }
  );
  setMenuData(updatedList);
}

  return (
    <>
      <Navbar
      filterItem={filterItem} 
      menuList={menuList}
      />
      <MenuCard
        menuData={menuData}

      />
    </>
  )
}

export default Resturant;

