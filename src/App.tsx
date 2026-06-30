import type { ReactNode } from "react";
import { buildStandings, matches, players } from "./data";
import { faNum } from "./ui";
import heroImage from "./assets/hero.jpg";
import Podium from "./components/Podium";
import Standings from "./components/Standings";
import MatchBreakdown from "./components/MatchBreakdown";
import PendingMatch from "./components/PendingMatch";

const RULES = [
  {
    pts: "۱۰",
    title: "نتیجه دقیق",
    desc: "حدس دقیق و کامل نتیجه نهایی (۹۰ دقیقه / وقت اضافه)",
    pill: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
    special: false,
  },
  {
    pts: "۷",
    title: "نتیجه + گل/تفاضل دقیق",
    desc: "حدس درست برد/مساوی همراه با گل دقیق یکی از تیم‌ها یا تفاضل گل دقیق",
    pill: "bg-teal-400/15 text-teal-300 ring-teal-400/30",
    special: false,
  },
  {
    pts: "۵",
    title: "فقط نتیجه درست",
    desc: "حدس درست برد، باخت یا مساوی بدون حدس دقیق گل‌ها",
    pill: "bg-amber-400/15 text-amber-300 ring-amber-400/30",
    special: false,
  },
  {
    pts: "۰",
    title: "نتیجه اشتباه",
    desc: "حدس نادرست برد، باخت یا مساوی",
    pill: "bg-white/5 text-slate-500 ring-white/10",
    special: false,
  },
  {
    pts: "🥅",
    title: "بازی‌های پنالتی · قانون ویژه",
    desc: "اگر بازی به ضربات پنالتی برسد، تیم برندهٔ ضربات پنالتی برندهٔ واقعی بازی محسوب می‌شود. هرکس که پیروزی همان تیم را درست پیش‌بینی کرده باشد، امتیاز «نتیجه درست» (و در صورت درست بودن گل‌ها، امتیاز بیشتر) می‌گیرد. ضمناً اگر کسی نتیجهٔ مساوی و برندهٔ پنالتی را با هم درست گفته باشد، ۳ امتیاز بونوس (⚡) می‌گیرد.",
    pill: "bg-fuchsia-400/15 text-fuchsia-300 ring-fuchsia-400/30",
    special: true,
  },
];

function SectionTitle({
  children,
  hint,
}: {
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <h2 className="flex items-center gap-2.5 text-lg font-extrabold text-slate-100 sm:text-xl">
        <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500" />
        {children}
      </h2>
      {hint && <span className="text-xs text-slate-500">{hint}</span>}
    </div>
  );
}

export default function App() {
  const standings = buildStandings();
  const finished = matches.filter((m) => !m.pending);
  const pending = matches.filter((m) => m.pending);
  const latestFinished = finished[finished.length - 1];

  const leader = standings[0];
  const totalPoints = standings.reduce((s, x) => s + x.total, 0);
  const avg = (totalPoints / standings.length).toFixed(1);

  const stats = [
    { label: "بازیکنان", value: faNum(players.length), icon: "👥" },
    { label: "بازی‌های انجام‌شده", value: faNum(`${finished.length}/${matches.length}`), icon: "⚽" },
    { label: "صدرنشین", value: leader?.player.name ?? "—", icon: "🏆", small: true },
    { label: "میانگین امتیاز", value: faNum(avg), icon: "📈" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b14] text-slate-200">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <main className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* HERO */}
        <header className="animate-rise relative mb-8 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/70 to-[#070b14]/30" />
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/20 to-transparent" />
          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              جام جهانی ۲۰۲۶ · به‌روز
            </div>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
              رده‌بندی پیش‌بینی‌های
              <span className="bg-gradient-to-l from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                {" "}گروهی
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
              مرحله حذفی — امتیاز هر بازی بر اساس حدس نتیجه، گل‌ها و بونوس پنالتی
              محاسبه می‌شود. جدول کامل، تفکیک هر بازی و قوانین امتیازدهی.
            </p>
          </div>
        </header>

        {/* STATS */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
            >
              <div className="mb-1 text-xl">{s.icon}</div>
              <div
                className={`font-extrabold text-slate-100 ${
                  s.small ? "truncate text-base" : "text-2xl tabular-nums"
                }`}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* PODIUM */}
        <section className="mb-12">
          <SectionTitle hint="سه نفر برتر">سکوی قهرمانی</SectionTitle>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur sm:p-8">
            <Podium standings={standings} />
          </div>
        </section>

        {/* STANDINGS TABLE */}
        <section className="mb-12">
          <SectionTitle
            hint={`${faNum(finished.length)} بازی ثبت‌شده · ${faNum(pending.length)} بازی در انتظار`}
          >
            جدول رده‌بندی کامل
          </SectionTitle>
          <Standings standings={standings} finishedMatches={finished} />
          <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">
            عدد زیر هر ستون، نتیجه واقعی آن بازی است. هر خانه نتیجه پیش‌بینی‌شده و
            امتیاز کسب‌شده‌ی شما را نشان می‌دهد. بازی‌های در انتظار می‌توانند
            امتیازها و رتبه‌ها را تغییر دهند.
          </p>
        </section>

        {/* MATCH BREAKDOWNS */}
        <section className="mb-12">
          <SectionTitle>تفکیک تک‌تک بازی‌ها</SectionTitle>
          <div className="space-y-5">
            {finished.map((m) => (
              <MatchBreakdown key={m.id} match={m} />
            ))}
          </div>
        </section>

        {/* PENDING MATCHES */}
        {pending.length > 0 && (
          <section className="mb-12">
            <SectionTitle hint={`${faNum(pending.length)} بازی در انتظار`}>
              بازی‌های پیش‌رو
            </SectionTitle>
            <div className="space-y-5">
              {pending.map((match) => (
                <PendingMatch key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}

        {/* RULES */}
        <section className="mb-8">
          <SectionTitle>قوانین امتیازدهی</SectionTitle>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {RULES.map((r) => (
              <div
                key={r.title}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  r.special
                    ? "border-fuchsia-400/30 bg-fuchsia-400/[0.06] sm:col-span-2"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ring-1 ring-inset ${r.pill}`}
                >
                  {r.pts}
                </span>
                <div>
                  <div className="text-sm font-bold text-slate-100">{r.title}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            ساخته‌شده برای گروه دوستانه پیش‌بینی فوتبال · نتایج تا پایان بازی «
            {latestFinished?.home.fa} ⨯ {latestFinished?.away.fa}» لحاظ شده است.
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            امتیازدهی بر اساس قوانین رسمی گروه · {faNum(players.length)} بازیکن ·{" "}
            {faNum(finished.length)} بازی
          </p>
        </footer>
      </main>
    </div>
  );
}
