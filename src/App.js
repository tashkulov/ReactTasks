
import Content from "./UseRefAndUseContent/Content";
import  Header from "./UseRefAndUseContent/Header";
import ThemeProvider from "./UseRefAndUseContent/ThemeProvider";


function App() {
  // const inputProps = {
  //   placeholder: 'Enter',
  //   backgroundColor: 'lightblue',
  //   width: '200px',
  //   height: '30px',
  // };

  // const buttonProps = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   fontWeight: 'bold',
  //   btnTitle: 'Click',
  // };


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
      {/* <HomeworkChildren>Hello whats up </HomeworkChildren> 
      <HomeworkChildren>my name is nuris</HomeworkChildren>  */}


    {/* <CombinedComp inputProps={inputProps} buttonProps={buttonProps} /> */}
    {/* <SecondTask/> */}


      {/* <Counter/> */}
      {/* <ItemList/> */}
      {/* <TextInput/> */}
  
      <ThemeProvider>
        <Header/>
        <Content/>
      </ThemeProvider>
    </div>
  );
}

export default App;

