import { players, scorePrediction, type Match } from "../data";
import { Avatar, PointsBadge, faNum, kindMeta } from "../ui";

interface Row {
  name: string;
  homeGoals: number;
  awayGoals: number;
  penaltyWinner?: "home" | "away";
  points: number;
  basePoints: number;
  bonus: number;
  kind: ReturnType<typeof scorePrediction>["kind"];
}

export default function MatchBreakdown({ match }: { match: Match }) {
  const rows: Row[] = players
    .map((p) => {
      const pred = p.predictions[match.id];
      if (!pred) return null;
      const r = scorePrediction(pred, match);
      return {
        name: p.name,
        homeGoals: pred.homeGoals,
        awayGoals: pred.awayGoals,
        penaltyWinner: pred.penaltyWinner,
        points: r.points,
        basePoints: r.basePoints,
        bonus: r.bonus,
        kind: r.kind,
      } as Row;
    })
    .filter((r): r is Row => r !== null)
    .sort((a, b) =>
      b.points !== a.points
        ? b.points - a.points
        : b.basePoints - a.basePoints,
    );

  const winnerSide =
    match.homeGoals! > match.awayGoals!
      ? "home"
      : match.homeGoals! < match.awayGoals!
        ? "away"
        : "draw";
  const penWinnerName =
    match.penaltyWinner === "home" ? match.home.name : match.away.name;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-l from-white/[0.04] to-transparent p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span className="text-3xl">{match.home.flag}</span>
            <span className="mt-1 text-xs font-semibold text-slate-200">
              {match.home.name}
            </span>
            <span className="text-[10px] text-slate-500">{match.home.fa}</span>
          </div>
          <div className="flex flex-col items-center px-1">
            <div className="flex items-center gap-2 text-2xl font-extrabold tabular-nums text-slate-100">
              <span>{faNum(match.homeGoals!)}</span>
              <span className="text-slate-600">-</span>
              <span>{faNum(match.awayGoals!)}</span>
            </div>
            <span className="mt-0.5 rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-slate-300">
              {match.penalties ? "پنالتی" : "پایان"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">{match.away.flag}</span>
            <span className="mt-1 text-xs font-semibold text-slate-200">
              {match.away.name}
            </span>
            <span className="text-[10px] text-slate-500">{match.away.fa}</span>
          </div>
        </div>

        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-slate-500">
            {match.stageFa}
          </div>
          {winnerSide === "draw" ? (
            <div className="text-sm font-bold text-amber-300">
              مساوی · برنده پنالتی: {penWinnerName}
            </div>
          ) : (
            <div className="text-sm font-bold text-emerald-300">
              برنده: {winnerSide === "home" ? match.home.name : match.away.name}
            </div>
          )}
        </div>
      </div>

      {/* predictions */}
      <div className="divide-y divide-white/5">
        {rows.map((r, idx) => {
          const meta = kindMeta[r.kind];
          const winnerIsHome = r.penaltyWinner === "home";
          return (
            <div
              key={r.name}
              className={`flex items-center gap-3 px-4 py-2.5 ${
                idx === 0 && r.points > 0 ? "bg-emerald-400/[0.04]" : ""
              }`}
            >
              <Avatar name={r.name} size={32} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-slate-100">
                  {r.name}
                  {idx === 0 && r.points > 0 && (
                    <span className="mr-2 rounded bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
                      بهترین
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`inline-flex h-1.5 w-1.5 rounded-full ${meta.dot}`}
                  />
                  <span className={`text-[11px] ${dotColor(meta)}`}>
                    {meta.label}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm font-bold tabular-nums text-slate-300">
                <span className={r.penaltyWinner && winnerIsHome ? "text-emerald-300" : ""}>
                  {faNum(r.homeGoals)}
                </span>
                <span className="text-slate-600">-</span>
                <span className={r.penaltyWinner && !winnerIsHome ? "text-emerald-300" : ""}>
                  {faNum(r.awayGoals)}
                </span>
              </div>
              <div className="w-14 text-left">
                <PointsBadge
                  result={{
                    points: r.points,
                    kind: r.kind,
                    basePoints: r.basePoints,
                    bonus: r.bonus,
                  }}
                  size="sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function dotColor(meta: { label: string }): string {
  if (meta.label.includes("دقیق")) return "text-emerald-300";
  if (meta.label.includes("گل")) return "text-teal-300";
  if (meta.label.includes("فقط")) return "text-amber-300";
  if (meta.label.includes("پنالتی")) return "text-fuchsia-300";
  return "text-slate-500";
}
