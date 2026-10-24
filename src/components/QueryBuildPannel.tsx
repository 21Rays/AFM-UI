type QueryBuildPannelProps = {
  address: string;
  port: string;
  content: string;
};

const tokenPattern =
  /("(?:\\.|[^"\\])*"\s*:|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;

export function QueryBuildPannel({ address, port, content }: QueryBuildPannelProps) {
  const normalizedAddress = address.trim().replace(/\/+$/, "");
  const endpoint = normalizedAddress
    ? `${/^https?:\/\//i.test(normalizedAddress) ? normalizedAddress : `http://${normalizedAddress}`}${port ? `:${port}` : ""}`
    : "Address not configured";
  const queryPreview = JSON.stringify(
    {
      model: "apple.local",
      messages: [{ role: "user", content }],
    },
    null,
    2,
  );

  //highlight json tokens by type
  const highlightedQuery = queryPreview.split(tokenPattern).map((token, index) => {
    let colorClass = "";

    if (token.startsWith('"') && token.trimEnd().endsWith(":")) {
      colorClass = "text-sky-300";
    } else if (token.startsWith('"')) {
      colorClass = "text-emerald-300";
    } else if (/^-?\d/.test(token)) {
      colorClass = "text-amber-300";
    } else if (/^(true|false|null)$/.test(token)) {
      colorClass = "text-violet-300";
    }

    return colorClass ? (
      <span key={index} className={colorClass}>
        {token}
      </span>
    ) : (
      token
    );
  });

  return (
    //display query builder content
    <section aria-labelledby="query-build-heading" className="flex min-w-0 flex-col gap-3 text-slate-900">
      <h2 id="query-build-heading" className="text-base font-semibold tracking-tight">
        query preview
      </h2>
      <p className="break-all rounded-md bg-slate-100 px-3 py-2 font-mono text-xs text-slate-700">
        {endpoint}
      </p>
      <pre className="max-h-80 overflow-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-100">
        <code>{highlightedQuery}</code>
      </pre>
    </section>
  );
}
