import Joyride from "react-joyride";

function CustomTooltip(props) {
  const {
    backProps,
    closeProps,
    continuous,
    index,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
  } = props;

  return (
    <div className="bg-white" {...tooltipProps}>
      <button className="flex w-full justify-end" {...closeProps}>
        &times;
      </button>
      {step.title && <h4 className="font-bold">{step.title}</h4>}
      <div className="my-2">{step.content}</div>
      <div className="flex items-center justify-between mt-2">
        <button className="tooltip__button" {...skipProps}>
          {skipProps.title}
        </button>
        <div className="flex gap-2">
          {index > 0 && (
            <button className="tooltip__button" {...backProps}>
              {backProps.title}
            </button>
          )}
          {continuous && (
            <button
              className="tooltip__button tooltip__button--primary"
              {...primaryProps}
            >
              {primaryProps.title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function TutorialJoyRide() {
  const steps = [
    {
      target: "#my-new-button",
      content: "Este é o novo botão. Clique aqui para criar algo novo!",
      title: "Bem-vindo ao novo recurso!",
    },
    {
      target: "#my-new-info",
      content: "Aqui você pode ver suas informações principais.",
      title: "Bem-vindo ao segundo novo recurso!",
    },
  ];

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

      <Joyride
        steps={steps}
        continuous
        run={true}
        tooltipComponent={CustomTooltip}
        locale={{
          back: "Voltar",
          close: "Fechar",
          last: "Último",
          next: "Próximo",
          nextLabelWithProgress: "Próximo (Passo {step} de {steps})",
          open: "Abrir o tutorial",
          skip: "Pular",
        }}
      />
    </div>
  );
}
