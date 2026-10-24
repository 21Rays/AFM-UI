type SettingPannelProps = {
  port: string;
  address: string;
  onPortChange: (port: string) => void;
  onAddressChange: (address: string) => void;
};

export function SettingPannel({
  port,
  address,
  onPortChange,
  onAddressChange,
}: SettingPannelProps) {
  return (
    //group connection settings
    <section aria-labelledby="settings-heading" className="flex flex-col gap-4 text-slate-900">
      {/*configure the server address*/}
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="text-sm font-medium text-slate-700">
            address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={address}
            onChange={(event) => onAddressChange(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm tabular-nums outline-none transition focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100"
          />
        </div>
      {/*stack the connection fields*/}
      <div className="flex flex-col gap-3">
        {/*configure the server port*/}
        <div className="flex flex-col gap-1">
          <label htmlFor="port" className="text-sm font-medium text-slate-700">
            port
          </label>
          <input
            id="port"
            name="port"
            type="number"
            min="1"
            max="65535"
            inputMode="numeric"
            value={port}
            onChange={(event) => onPortChange(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm tabular-nums outline-none transition focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100"
          />
        </div>
      </div>
    </section>
  );
}