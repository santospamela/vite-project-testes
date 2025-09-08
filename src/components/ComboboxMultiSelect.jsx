import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export function ComboboxMultiSelect() {
  const [selectedPerson, setSelectedPerson] = useState([people[0], people[1]]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col justify-between bg-zinc-950">
      <div className="mx-auto w-full min-h-96 p-4">
        <Combobox
          value={selectedPerson}
          onChange={setSelectedPerson}
          onClose={() => setQuery("")}
          multiple
        >
          <div className="relative">
            <ComboboxInput
              aria-label="Assignee"
              onChange={(event) => setQuery(event.target.value)}
              className={clsx(
                "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDownIcon className="h-5 w-5 text-white/60 group-data-hover:text-white" />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            className={clsx(
              "w-full border border-white/5 bg-white p-1 rounded-lg mt-1",
              "transition duration-100 ease-in data-leave:data-closed:opacity-0"
            )}
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
              >
                <CheckIcon
                  className={clsx(
                    "h-5 w-5 text-transparent group-data-selected:text-green-500 group-data-selected:opacity-100 group-data-selected:visible"
                  )}
                />
                <div className="text-sm/6 text-black">{person.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      {selectedPerson.length > 0 && (
        <ul className="text-white">
          {selectedPerson.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
