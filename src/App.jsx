import "./global.css";
import "./App.css";
import { ComboboxMultiSelect } from "./components/ComboboxMultiSelect";
import { NewCombobox } from "./components/NewCombobox";
import { MyJoditEditor } from "./components/MyJoditEditor";
import { MyQuillEditor } from "./components/MyQuillEditor";
import { MySunEditor } from "./components/MySunEditor";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <ComboboxMultiSelect />
      <NewCombobox />
      <MySunEditor />
      <MyJoditEditor />
      <MyQuillEditor />
    </div>
  );
}
