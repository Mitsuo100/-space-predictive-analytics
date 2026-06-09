import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateTelemetry } from "../services/simulator";

interface Telemetry {
  temperature: number;
  energy: number;
  signal: number;
  stability: number;
}

interface MissionContextType {
  telemetry: Telemetry;
  alerts: string[];
  threshold: number;
  setThreshold: (value: number) => void;
}

const MissionContext = createContext({} as MissionContextType);

export const MissionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [threshold, setThreshold] = useState(80);

  const [telemetry, setTelemetry] = useState<Telemetry>({
    temperature: 50,
    energy: 100,
    signal: 90,
    stability: 95,
  });

  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    loadThreshold();
  }, []);

  useEffect(() => {
    saveThreshold();
  }, [threshold]);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = generateTelemetry();

      setTelemetry(data);

      const generatedAlerts: string[] = [];

      if (data.temperature > threshold) {
        generatedAlerts.push(
          `Temperatura crítica: ${data.temperature}°C`
        );
      }

      if (data.energy < 20) {
        generatedAlerts.push(
          `Energia baixa: ${data.energy}%`
        );
      }

      if (data.signal < 30) {
        generatedAlerts.push(
          `Perda de sinal: ${data.signal}%`
        );
      }

      if (data.stability < 40) {
        generatedAlerts.push(
          `Instabilidade orbital: ${data.stability}%`
        );
      }

      setAlerts(generatedAlerts);
    }, 3000);

    return () => clearInterval(interval);
  }, [threshold]);

  const saveThreshold = async () => {
    await AsyncStorage.setItem(
      "@threshold",
      threshold.toString()
    );
  };

  const loadThreshold = async () => {
    const value = await AsyncStorage.getItem("@threshold");

    if (value) {
      setThreshold(Number(value));
    }
  };

  return (
    <MissionContext.Provider
      value={{
        telemetry,
        alerts,
        threshold,
        setThreshold,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export const useMission = () => useContext(MissionContext);