import type { ScoreResult } from "./data";

/* --------------------------- formatting --------------------------- */

/** Convert Western digits to Persian digits. */
export const faNum = (n: number | string): string =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

/** Deterministic hue (0-360) from a string — used for avatars. */
export const hueFromName = (name: string): number => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
};

export const avatarGradient = (name: string): string => {
  const h = hueFromName(name);
  const h2 = (h + 40) % 360;
  return `linear-gradient(135deg, hsl(${h} 70% 45%), hsl(${h2} 75% 38%))`;
};

export const initials = (name: string): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2)
    return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.trim().slice(0, 1).toUpperCase();
};

/* --------------------------- score metadata --------------------------- */

export interface KindMeta {
  label: string;
  pill: string; // tailwind classes for the points pill
  dot: string; // small status color
}

export const kindMeta: Record<ScoreResult["kind"], KindMeta> = {
  exact: {
    label: "نتیجه دقیق",
    pill: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
    dot: "bg-emerald-400",
  },
  "outcome-plus-goal": {
    label: "نتیجه + گل/تفاضل دقیق",
    pill: "bg-teal-400/15 text-teal-300 ring-1 ring-inset ring-teal-400/30",
    dot: "bg-teal-400",
  },
  outcome: {
    label: "فقط نتیجه درست",
    pill: "bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
    dot: "bg-amber-400",
  },
  "penalty-bonus": {
    label: "بونوس پنالتی",
    pill: "bg-fuchsia-400/15 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-400/30",
    dot: "bg-fuchsia-400",
  },
  wrong: {
    label: "نتیجه اشتباه",
    pill: "bg-white/5 text-slate-500 ring-1 ring-inset ring-white/10",
    dot: "bg-slate-600",
  },
  pending: {
    label: "در انتظار بازی",
    pill: "bg-white/[0.03] text-slate-400 ring-1 ring-inset ring-dashed ring-white/15",
    dot: "bg-slate-500",
  },
};

/* --------------------------- small components --------------------------- */

export function Avatar({
  name,
  size = 44,
}: {
  name: string;
  size?: number;
}) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-inner"
      style={{
        width: size,
        height: size,
        background: avatarGradient(name),
        fontSize: size * 0.38,
      }}
    >
      {initials(name)}
    </span>
  );
}

export function PointsBadge({
  result,
  size = "md",
}: {
  result: ScoreResult;
  size?: "sm" | "md";
}) {
  const meta = kindMeta[result.kind];
  const pad = size === "sm" ? "px-1.5 py-0.5 text-[11px]" : "px-2 py-1 text-xs";
  const showBonus = result.bonus > 0;
  return (
    <span
      className={`inline-flex min-w-[1.75rem] items-center justify-center gap-0.5 rounded-md font-bold tabular-nums ${pad} ${meta.pill}`}
      title={meta.label + (showBonus ? "  ·  بونوس پنالتی" : "")}
    >
      {result.kind === "pending" ? "؟" : faNum(result.points)}
      {showBonus && (
        <span className="text-fuchsia-300" title="بونوس پنالتی">
          ⚡
        </span>
      )}
    </span>
  );
}

/** A compact cell showing the predicted scoreline + earned points. */
export function PredCell({
  result,
  homeGoals,
  awayGoals,
  penalties,
  penaltyWinner,
}: {
  result: ScoreResult;
  homeGoals: number;
  awayGoals: number;
  penalties?: boolean;
  penaltyWinner?: "home" | "away";
}) {
  const winnerIsHome = penaltyWinner === "home";
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1 text-[13px] font-semibold tabular-nums text-slate-300">
        <span className={penalties && winnerIsHome ? "text-emerald-300" : ""}>
          {faNum(homeGoals)}
        </span>
        <span className="text-slate-600">–</span>
        <span className={penalties && !winnerIsHome ? "text-emerald-300" : ""}>
          {faNum(awayGoals)}
        </span>
      </div>
      <PointsBadge result={result} size="sm" />
    </div>
  );
}

export function FlagChip({
  flag,
  name,
  fa,
  size = "md",
}: {
  flag: string;
  name: string;
  fa?: string;
  size?: "sm" | "md";
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={size === "sm" ? "text-base leading-none" : "text-xl leading-none"}>
        {flag}
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] font-semibold text-slate-100">{name}</span>
        {fa && <span className="block text-[11px] text-slate-500">{fa}</span>}
      </span>
    </span>
  );
}
