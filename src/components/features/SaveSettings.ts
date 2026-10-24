export type SettingsProps = {
  port: string;
  address: string;
};

const SETTINGS_STORAGE_KEY = "afmui-settings";

export function LoadSettings(): SettingsProps {
  const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);

  if (savedSettings === null) {
    return { port: "", address: "" };
  }

  const settings: unknown = JSON.parse(savedSettings);
  if (
    typeof settings !== "object" ||
    settings === null ||
    !("port" in settings) ||
    typeof settings.port !== "string" ||
    !("address" in settings) ||
    typeof settings.address !== "string"
  ) {
    throw new Error("Saved settings have an invalid format.");
  }

  return { port: settings.port, address: settings.address };
}

export function SaveSetting(setting: SettingsProps): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(setting));
}