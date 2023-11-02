import Add from "./Add";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./Clickevent";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
function Assignment4() {
    function sayHello() {
        alert("Hello");
      }    
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />


      <ParentStateComponent/>
      <ChildStateComponent/>
      <ReduxExamples/>
      ...
    </div>
  );
}
export default Assignment4;