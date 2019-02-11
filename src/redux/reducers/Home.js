import Const  from './../../const';
export default function Reducer(state = {
  activeMenu:1,
  breadCrumb:'HOME/CASE 1',
  activeForm:'Person',
  dataRadio:[ 
    { id:1,name:'Person', active:true },
    { id:2,name:'Company', active:false } 
  ],
  dataMenu: [
    { id:1, name:'CASE 1',active:true },
    { id:2, name:'CASE 2',active:false },
    { id:3, name:'CASE 3',active:false },
  ],
},action) {
  var { dataMenu, dataRadio, activeForm, activeMenu, breadCrumb } = state;
  switch (action.type) {
    case `${Const.CHANGE_MENU}`:
    dataMenu.forEach((menu)=>{
      if (menu.id==action.payload.id){
        menu.active = true;
        activeMenu  = menu.id;
        breadCrumb  = `HOME/${menu.name}`;
      }else {
        menu.active = false
      }
    });
    return {...state, dataMenu, activeMenu, breadCrumb}
    break;

    case `${Const.CHANGE_FORM}`:
    dataRadio.forEach((radio)=>{
      if (radio.id==action.payload.id){
        radio.active = true;
        activeForm  = radio.name;
      }else {
        radio.active = false
      }
    });
    return {...state, activeForm, dataRadio}
    break;
    default:
      return state;
  }
}
