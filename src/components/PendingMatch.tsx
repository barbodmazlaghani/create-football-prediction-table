import { players, type Match } from "../data";
import { Avatar, faNum } from "../ui";

export default function PendingMatch({ match }: { match: Match }) {
  const predictions = players.filter((player) => player.predictions[match.id]);

  return (
    <div className="overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] p-4">
        <div className="flex min-w-0 items-center gap-4">
          <Team team={match.home} />
          <span className="text-xl font-black text-slate-600">⨯</span>
          <Team team={match.away} />
        </div>
        <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-300">
          ⏳ در انتظار
        </span>
      </div>

      {predictions.length > 0 ? (
        <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-2 sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-l sm:[&>*:nth-child(odd)]:border-white/5">
          {predictions.map((player) => {
            const prediction = player.predictions[match.id];
            const penaltyTeam =
              prediction.penaltyWinner === "home"
                ? match.home
                : prediction.penaltyWinner === "away"
                  ? match.away
                  : null;

            return (
              <div key={player.name} className="flex items-center gap-3 p-3.5">
                <Avatar name={player.name} size={32} />
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-200">
                  {player.name}
                </span>
                <div className="text-left">
                  <div className="rounded-md bg-white/5 px-2.5 py-1 text-sm font-bold tabular-nums text-slate-200">
                    {faNum(prediction.homeGoals)} - {faNum(prediction.awayGoals)}
                  </div>
                  {penaltyTeam && (
                    <div className="mt-1 whitespace-nowrap text-[9px] font-semibold text-fuchsia-300">
                      پنالتی: {penaltyTeam.fa}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="p-4 text-center text-xs text-slate-500">پیش‌بینی ثبت نشده است.</p>
      )}
    </div>
  );
}

function Team({ team }: { team: Match["home"] }) {
  return (
    <div className="min-w-0 text-center">
      <span className="text-3xl">{team.flag}</span>
      <span className="mt-1 block max-w-32 truncate text-sm font-semibold text-slate-200">
        {team.name}
      </span>
      <span className="block text-[10px] text-slate-500">{team.fa}</span>
    </div>
  );
}
