import Children from './Children';
import { ComponentWay, MainContent, Footer } from './Events,Components/ComponentWay';
import HomeworkEvents from './Events,Components/homeworkEvents';
import HomeWorkProps from './JSX,PROPS/HomeWorkProps';
import Homework from './JSX,PROPS/homework';
import HomeworkChildren from './Portal,Children/HomeworkChildren';
import ChildComponent1 from './Portal,Children/HomeworkChildren';
import ChildComponent2 from './Portal,Children/HomeworkChildren';
// import { HomeworkChildren, ChildComponent1, ChildComponent2 } from './Portal,Children/HomeworkChildren';
import PortalHomework from './Portal,Children/PortalHomeworks';

function App() {
  return (
    <div className="App">
     {/* <Homework/> */}
     {/* <HomeWorkProps/> */}
    {/* <HomeworkEvents
     btnTitle="Click"
     btnTitle2="Submit"
     btnTitle3="onMouseDown"
     placeholder="you clicked placeholder"
     placeholder2="you clicked second placeholder"
     onClick={event =>console.log("you clicked")}
     onChange={(event) =>console.log("you changed",event.target.value)}
     onBlur={(event) =>console.log("you have blured")}
     onFocus={(event) =>console.log("you have focused")}
     onDoubleClick={(event)=>console.log('you have doubleClicked')}
     onContextMenu={(event)=>console.log("you что-то сделал короче")}
     onMouseDown={(event)=>console.log('you have onMouseDown')}
     
    /> */}
     {/* <ComponentWay/> */}
     {/* <div id="portal-root"></div>

    <PortalHomework
    container={document.body}
    >
    <button>Click</button>
    </PortalHomework> */}
      <HomeworkChildren>Hello whats up </HomeworkChildren> 
      <HomeworkChildren>my name is nuris</HomeworkChildren> 


      
      





    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import PortalHomework from './Portal,Children/PortalHomeworks';

// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>

//       {showModal && (
//         <PortalHomework onClose={closeModal}>
//           <h2>Modal Content</h2>
//           <p>This is some modal content.</p>
//           <button onClick={closeModal}>Close Modal</button>
//         </PortalHomework>
//       )}
//     </div>
//   );
// };

// export default App;