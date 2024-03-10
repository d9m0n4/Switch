import './App.css'
import {ISwitchItems, Switch} from "./features/Switch";
import {useState} from "react";

function App() {
  const [activeElementIndex, setActiveElementIndex] = useState(0);

  const tabs: ISwitchItems[] = [
    {
      label: 'Courses',
    },
    {
      label: 'My schedule',
    },
    // {
    //   label: 'My schedulesssssd',
    // },
  ];

  const handleSwitchItem = (index: number) => {
    setActiveElementIndex(index)
  }

  return (
      <div>
        <Switch
            switchItems={tabs}
            activeElementIndex={activeElementIndex}
            handleSwitchItem={handleSwitchItem}
        />
      </div>
  );
}

export default App
