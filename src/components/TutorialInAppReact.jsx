import { useState, useRef, useEffect } from "react";

export function TutorialInAppReact() {
  const [step, setStep] = useState(0);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  const steps = [
    {
      ref: buttonRef,
      text: "Este é o novo botão. Clique aqui para criar algo novo!",
    },
    { ref: cardRef, text: "Aqui você pode ver suas informações principais." },
  ];

  const nextStep = () => setStep((s) => (s + 1 < steps.length ? s + 1 : s));
  const prevStep = () => setStep((s) => (s - 1 >= 0 ? s - 1 : s));
  const endTutorial = () => setStep(-1);

  // Calcula posição do tooltip
  const [tooltipStyle, setTooltipStyle] = useState({});
  useEffect(() => {
    if (step >= 0 && steps[step].ref.current) {
      const rect = steps[step].ref.current.getBoundingClientRect();
      setTooltipStyle({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    }
  }, [step]);

  return (
    <div className="relative max-w-2xl mx-auto py-8 space-y-8">
      <h1 className="text-2xl text-white font-bold">Minha Página</h1>

      <button
        ref={buttonRef}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Novo recurso
      </button>

      <div
        ref={cardRef}
        className="p-6 border text-white rounded shadow-md w-64"
      >
        <p>Card de informações</p>
      </div>

      {/* Overlay e tooltip */}
      {step >= 0 && (
        <div className="fixed inset-0 z-50">
          {/* fundo escuro */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Tooltip */}
          <div
            className="absolute bg-white p-4 rounded-lg shadow-lg w-64 text-center"
            style={{
              top: tooltipStyle.top,
              left: tooltipStyle.left,
              transform: "translateX(-50%)",
            }}
          >
            <p className="text-gray-800">{steps[step].text}</p>
            <div className="flex justify-between mt-3">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                Anterior
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Próximo
                </button>
              ) : (
                <button
                  onClick={endTutorial}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Concluir
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
