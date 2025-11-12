import { driver } from "driver.js";
import { useEffect } from "react";
import "driver.js/dist/driver.css";
import { StarIcon } from "@heroicons/react/20/solid";
import { renderToString } from "react-dom/server";

export function TutorialDriver() {
  const hideTutorialForUser = localStorage.getItem("hideTutorial");

  useEffect(() => {
    const iconHtml = renderToString(
      <StarIcon className="h-5 w-5 text-yellow-400" />
    );
    const titleWithIcon = `<span class="flex items-center gap-2">${iconHtml} Novo recurso!</span>`;

    const driverObj = driver({
      showProgress: true,
      progressText: "{{current}} de {{total}}",
      overlayClickBehavior: "nextStep",
      steps: [
        {
          element: "#my-new-button",
          popover: {
            title: titleWithIcon,
            description:
              "Este é o novo botão. Clique aqui para criar algo novo!",
            side: "bottom",
          },
        },
        {
          element: "#my-new-info",
          popover: {
            title: "Segundo novo recurso!",
            description: "Aqui você pode ver suas informações principais.",
            side: "right",
          },
        },
      ],
      nextBtnText: "Próximo",
      prevBtnText: "Anterior",
      doneBtnText: "Concluído",
    });

    if (!hideTutorialForUser) {
      driverObj.drive();
      localStorage.setItem("hideTutorial", "true");
    }
  }, [hideTutorialForUser]);

  return (
    <div className="relative max-w-2xl mx-auto py-8 space-y-8">
      <h1 className="text-2xl text-white font-bold">Minha Página</h1>

      <button
        id="my-new-button"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Novo recurso
      </button>

      <div
        id="my-new-info"
        className="p-6 border text-white rounded shadow-md w-64"
      >
        <p>Card de informações</p>
      </div>
    </div>
  );
}
