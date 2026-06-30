import type { Match, PlayerStanding } from "../data";
import { Avatar, PredCell, faNum, kindMeta } from "../ui";

const RANK_STYLE: Record<number, string> = {
  1: "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/30",
  2: "bg-slate-300/15 text-slate-200 ring-1 ring-slate-300/25",
  3: "bg-orange-400/15 text-orange-300 ring-1 ring-orange-400/30",
};

function computeRanks(standings: PlayerStanding[]): number[] {
  const ranks: number[] = [];
  let lastTotal = Number.POSITIVE_INFINITY;
  let lastRank = 0;
  standings.forEach((s, i) => {
    if (s.total !== lastTotal) {
      lastRank = i + 1;
      lastTotal = s.total;
    }
    ranks.push(lastRank);
  });
  return ranks;
}

export default function Standings({
  standings,
  finishedMatches,
}: {
  standings: PlayerStanding[];
  finishedMatches: Match[];
}) {
  const ranks = computeRanks(standings);

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
      <table className="w-full min-w-[760px] border-collapse text-right">
        <thead>
          <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400">
            <th className="px-3 py-3 text-center font-semibold">#</th>
            <th className="px-3 py-3 text-right font-semibold">بازیکن</th>
            {finishedMatches.map((m) => (
              <th key={m.id} className="px-2 py-3 text-center font-semibold">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="flex items-center gap-1 text-base">
                    <span>{m.home.flag}</span>
                    <span className="text-slate-600">·</span>
                    <span>{m.away.flag}</span>
                  </div>
                  <div className="text-[11px] font-bold tabular-nums text-slate-300">
                    {faNum(m.homeGoals!)} - {faNum(m.awayGoals!)}
                  </div>
                  {m.penalties && (
                    <div className="text-[9px] text-fuchsia-300/80">(پنالتی)</div>
                  )}
                </div>
              </th>
            ))}
            <th className="px-3 py-3 text-center font-semibold">امتیاز</th>
            <th className="px-3 py-3 text-center font-semibold">دقیق</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s, i) => {
            const rank = ranks[i];
            const top3 = rank <= 3;
            return (
              <tr
                key={s.player.name}
                className={`border-b border-white/5 transition hover:bg-white/[0.04] ${
                  top3 ? "bg-white/[0.02]" : ""
                }`}
              >
                <td className="px-3 py-3 text-center">
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold tabular-nums ${
                      RANK_STYLE[rank] ?? "bg-white/5 text-slate-400"
                    }`}
                  >
                    {faNum(rank)}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <Avatar name={s.player.name} size={36} />
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-slate-100">
                        {s.player.name}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>{faNum(s.predictedCount)} پیش‌بینی</span>
                        {s.bonusCount > 0 && (
                          <span className="text-fuchsia-300/90">
                            ⚡ {faNum(s.bonusCount)} بونوس
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                {finishedMatches.map((m) => {
                  const pred = s.player.predictions[m.id];
                  const res = s.results[m.id];
                  if (!pred || !res) {
                    return (
                      <td key={m.id} className="px-2 py-3 text-center">
                        <span className="text-slate-700">—</span>
                      </td>
                    );
                  }
                  return (
                    <td key={m.id} className="px-2 py-3 text-center">
                      <PredCell
                        result={res}
                        homeGoals={pred.homeGoals}
                        awayGoals={pred.awayGoals}
                        penalties={!!pred.penaltyWinner}
                        penaltyWinner={pred.penaltyWinner}
                      />
                    </td>
                  );
                })}
                <td className="px-3 py-3 text-center">
                  <span className="text-xl font-extrabold tabular-nums text-emerald-300">
                    {faNum(s.total)}
                  </span>
                  {s.maxPossible > s.total && (
                    <span className="block text-[10px] text-slate-500">
                      تا {faNum(s.maxPossible)} ممکن
                    </span>
                  )}
                </td>
                <td className="px-3 py-3 text-center">
                  <span
                    className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-md px-1.5 text-xs font-bold tabular-nums ${
                      s.exactCount > 0 ? kindMeta.exact.pill : "text-slate-600"
                    }`}
                  >
                    {faNum(s.exactCount)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
