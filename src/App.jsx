import "./global.css";
import "./App.css";
import { ComboboxMultiSelect } from "./components/ComboboxMultiSelect";
import { NewCombobox } from "./components/NewCombobox";
import { MyJoditEditor } from "./components/MyJoditEditor";
import { MyQuillEditor } from "./components/MyQuillEditor";
import { MySunEditor } from "./components/MySunEditor";
import { TutorialInAppReact } from "./components/TutorialInAppReact";
import { TutorialJoyRide } from "./components/TutorialJoyRide";

export function App() {
  return (
    <div className="bg-black flex flex-col gap-6 w-full h-dvh">
      {/* <ComboboxMultiSelect /> */}
      {/* <NewCombobox /> */}
      {/* <MySunEditor /> */}
      {/* <MyJoditEditor /> */}
      {/* <MyQuillEditor /> */}
      {/* <TutorialInAppReact /> */}
      <TutorialJoyRide />
    </div>
  );
}
