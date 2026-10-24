import React, { useMemo, useState } from 'react';

type PanelKey = 'settings' | 'query';

//define the panel component options
type RightPannelProps = {
  settings?: React.ReactNode;
  queryBuilder?: React.ReactNode;
  saveButton?: React.ReactNode;
  className?: string;
  defaultView?: PanelKey;
  variant?: 'tabs' | 'split';
  settingsLabel?: string;
  queryLabel?: string;
};

//provide fallback content for each panel
const defaultPanelMap: Record<PanelKey, React.ReactNode> = {
  settings: <div className="text-sm text-slate-500">Settings panel</div>,
  query: <div className="text-sm text-slate-500">Query build display</div>,
};

export default function RightPannel({
  settings,
  queryBuilder,
  saveButton,
  className = '',
  defaultView = 'settings',
  variant = 'tabs',
  settingsLabel = 'Settings',
  queryLabel = 'Query',
}: RightPannelProps) {
  //track the selected panel
  const [activeView, setActiveView] = useState<PanelKey>(defaultView);

  //use supplied content or fallback panels
  const panels = useMemo(
    () => ({
      settings: settings ?? defaultPanelMap.settings,
      query: queryBuilder ?? defaultPanelMap.query,
    }),
    [settings, queryBuilder],
  );

  //define the available panel tabs
  const tabs: Array<{ key: PanelKey; label: string }> = [
    { key: 'settings', label: settingsLabel },
    { key: 'query', label: queryLabel },
  ];

  return (
    //render the panel with tabs or split view
    <aside
      className={`flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`.trim()}
    >
      {variant === 'tabs' ? (
        <>
          {/*switch between settings and query*/}
          <div className="flex border-b border-slate-200 bg-slate-50">
            {tabs.map((tab) => {
              const isActive = activeView === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveView(tab.key)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-b-2 border-black bg-white text-black'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/*show the selected panel content*/}
          <div className="flex-1 overflow-auto p-4">{panels[activeView]}</div>
        </>
      ) : (
        //show both panels side by side
        <div className="grid h-full grid-cols-2 divide-x divide-slate-200">
          <section className="overflow-auto p-4">{panels.settings}</section>
          <section className="overflow-auto p-4">{panels.query}</section>
        </div>
      )}
      {saveButton && (
        //keep the save action visible below the panel content
        <div className="border-t border-slate-200 p-4">{saveButton}</div>
      )}
    </aside>
  );
}
