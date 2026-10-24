import "./tailwind.generated.css";
import { Title } from "./components/Title";
import { InputChatText } from "./components/InputChatText";
import { SettingPannel } from "./components/SettingPannel";
import RightPannel from "./components/RightPannel";
import { QueryBuildPannel } from "./components/QueryBuildPannel";
import { SendQueryButton } from "./components/SendQueryButton";
import { GeneralButton } from "./components/GeneralButton";
import { useState } from "react";
import { LoadSettings, SaveSetting } from "./components/features/SaveSettings";

export function App() {
  const [settings, setSettings] = useState(LoadSettings);
  const [saveMessage, setSaveMessage] = useState("");
  const [query, setQuery] = useState("");

  function handleSaveSettings() {
    try {
      SaveSetting(settings);
      setSaveMessage("Settings saved.");
    } catch (error) {
      console.error("Failed to save settings to localStorage.", error);
      setSaveMessage("Could not save settings. Check browser storage permissions.");
    }
  }

  return (
    <main className="flex min-h-screen flex-col gap-4 p-4 md:p-6">
      {/*page title*/}
      <header>
        <Title />
      </header>
      {/*main content layout*/}
      <div className="grid min-h-[calc(100vh-8rem)] flex-1 grid-cols-1 grid-rows-[minmax(20rem,1fr)_minmax(18rem,auto)] gap-4 md:grid-cols-[minmax(0,1fr)_20rem] md:grid-rows-1">
        {/*chat area and input*/}
        <section
          aria-label="Chat"
          className="relative flex min-h-80 items-end gap-3 rounded-xl border border-slate-200 bg-white p-4"
        >
          <div className="min-w-0 flex-1">
            <InputChatText value={query} onChange={setQuery} />
          </div>
          <div className="shrink-0">
            <SendQueryButton />
          </div>
        </section>
        {/*settings and query tabs*/}
        <RightPannel
          className="min-h-72 md:min-h-0"
          settings={
            <SettingPannel
              port={settings.port}
              address={settings.address}
              onPortChange={(port) => setSettings((current) => ({ ...current, port }))}
              onAddressChange={(address) => setSettings((current) => ({ ...current, address }))}
            />
          }
          queryBuilder={
            <QueryBuildPannel
              address={settings.address}
              port={settings.port}
              content={query}
            />
          }
          saveButton={
            <div className="flex flex-col gap-2">
              <GeneralButton button_title="save" onClick={handleSaveSettings} />
              {saveMessage && (
                <p role="status" className="text-sm text-slate-600">
                  {saveMessage}
                </p>
              )}
            </div>
          }
        />
      </div>
    </main>
  );
}

export default App;
