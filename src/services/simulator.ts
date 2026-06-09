export const generateTelemetry = () => {
  return {
    temperature: Math.floor(Math.random() * 100),
    energy: Math.floor(Math.random() * 100),
    signal: Math.floor(Math.random() * 100),
    stability: Math.floor(Math.random() * 100),
  };
};