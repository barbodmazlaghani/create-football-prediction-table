import type { PlayerStanding } from "../data";
import { Avatar, faNum } from "../ui";

const PODIUM_STYLE: Record<
  number,
  {
    medal: string;
    ring: string;
    glow: string;
    bar: string;
    label: string;
    emoji: string;
  }
> = {
  1: {
    medal: "text-amber-300",
    ring: "ring-amber-400/40",
    glow: "shadow-amber-500/20",
    bar: "from-amber-400/80 to-amber-600/40",
    label: "قهرمان",
    emoji: "🏆",
  },
  2: {
    medal: "text-slate-200",
    ring: "ring-slate-300/30",
    glow: "shadow-slate-400/10",
    bar: "from-slate-300/70 to-slate-500/30",
    label: "نایب قهرمان",
    emoji: "🥈",
  },
  3: {
    medal: "text-orange-300",
    ring: "ring-orange-400/30",
    glow: "shadow-orange-500/10",
    bar: "from-orange-400/70 to-orange-600/30",
    label: "مقام سوم",
    emoji: "🥉",
  },
};

export default function Podium({ standings }: { standings: PlayerStanding[] }) {
  const top = standings.slice(0, 3);
  // display order: 2nd, 1st, 3rd
  const order = [top[1], top[0], top[2]].filter(Boolean) as PlayerStanding[];
  const heights: Record<number, string> = {
    1: "mt-0 sm:mt-0",
    2: "mt-6 sm:mt-10",
    3: "mt-10 sm:mt-16",
  };

  return (
    <div className="grid grid-cols-3 items-end gap-3 sm:gap-5">
      {order.map((s) => {
        const rank = standings.indexOf(s) + 1;
        const st = PODIUM_STYLE[rank];
        const isFirst = rank === 1;
        return (
          <div key={s.player.name} className={`flex flex-col items-center ${heights[rank]}`}>
            <div className="mb-2 text-2xl sm:text-3xl">{st.emoji}</div>
            <div
              className={`rounded-2xl bg-white/5 p-3 text-center ring-1 backdrop-blur transition ${st.ring} shadow-2xl ${st.glow} ${
                isFirst ? "sm:-translate-y-2 sm:scale-105" : ""
              }`}
            >
              <div className="mx-auto mb-2 flex justify-center">
                <Avatar name={s.player.name} size={isFirst ? 56 : 46} />
              </div>
              <div className="truncate text-[13px] font-bold text-slate-100 sm:text-sm">
                {s.player.name}
              </div>
              <div className={`text-2xl font-extrabold tabular-nums sm:text-3xl ${st.medal}`}>
                {faNum(s.total)}
              </div>
              <div className="text-[10px] font-medium tracking-wide text-slate-400 sm:text-[11px]">
                {st.label}
              </div>
            </div>
            <div
              className={`mt-2 h-10 w-full rounded-t-xl bg-gradient-to-b sm:h-16 ${st.bar}`}
            />
            <div className="text-[11px] font-bold text-slate-400">#{faNum(rank)}</div>
          </div>
        );
      })}
    </div>
  );
}
