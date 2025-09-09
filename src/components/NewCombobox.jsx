import { useState } from "react";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export function NewCombobox() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filtrando as opções com base na pesquisa
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  // Adiciona ou remove uma pessoa da seleção
  const togglePersonSelection = (person) => {
    setSelectedPeople((prev) => {
      if (prev.some((selected) => selected.id === person.id)) {
        // Se já estiver selecionado, removemos
        return prev.filter((selected) => selected.id !== person.id);
      } else {
        // Caso contrário, adicionamos
        return [...prev, person];
      }
    });
  };

  return (
    <div className="flex flex-col w-72 mx-auto">
      {/* Combobox Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Delay para clicar na opção
          className="w-full rounded-lg border bg-white/5 py-2 pl-3 pr-8 text-sm text-white"
          placeholder="Search..."
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-y-0 right-0 px-3 flex items-center"
        >
          <ChevronDownIcon className="h-5 w-5 text-black/60" />
        </button>
      </div>

      {/* Opções filtradas */}
      {isOpen && (
        <ul
          className="mt-1 max-h-60 overflow-y-auto rounded-lg border border-white/5 bg-white/10"
          onMouseDown={(e) => e.preventDefault()} // Impede que o blur seja acionado ao clicar nas opções
        >
          {filteredPeople.map((person) => (
            <li
              key={person.id}
              onClick={() => togglePersonSelection(person)}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/20",
                selectedPeople.some((selected) => selected.id === person.id) &&
                  "bg-green-500 text-white"
              )}
            >
              {selectedPeople.some((selected) => selected.id === person.id) && (
                <CheckIcon className="h-5 w-5 text-white" />
              )}
              <span>{person.name}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Exibindo os itens selecionados */}
      <div className="mt-3">
        {selectedPeople.length > 0 && (
          <ul className="text-white">
            {selectedPeople.map((person) => (
              <li
                key={person.id}
                className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1 mb-2"
              >
                <span>{person.name}</span>
                <button
                  onClick={() => togglePersonSelection(person)}
                  className="text-red-500 hover:text-red-300"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
