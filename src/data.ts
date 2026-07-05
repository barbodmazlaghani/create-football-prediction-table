export type Outcome = "home" | "away" | "draw";

export interface Team {
  name: string;
  fa: string;
  flag: string;
}

export interface Match {
  id: string;
  stage: string;
  stageFa: string;
  home: Team;
  away: Team;
  // Result (90 min / extra time). Undefined when match is pending.
  homeGoals?: number;
  awayGoals?: number;
  penalties?: boolean;
  homePen?: number;
  awayPen?: number;
  penaltyWinner?: "home" | "away";
  pending?: boolean;
}

export interface Prediction {
  homeGoals: number;
  awayGoals: number;
  // Present only when the user predicted a draw + a penalty winner.
  penaltyWinner?: "home" | "away";
}

export interface Player {
  name: string;
  predictions: Record<string, Prediction>;
}

/* ----------------------------- TEAMS ----------------------------- */

const JPN: Team = { name: "Japan", fa: "ژاپن", flag: "🇯🇵" };
const BRA: Team = { name: "Brazil", fa: "برزیل", flag: "🇧🇷" };
const GER: Team = { name: "Germany", fa: "آلمان", flag: "🇩🇪" };
const PAR: Team = { name: "Paraguay", fa: "پاراگوئه", flag: "🇵🇾" };
const NED: Team = { name: "Netherlands", fa: "هلند", flag: "🇳🇱" };
const MAR: Team = { name: "Morocco", fa: "مراکش", flag: "🇲🇦" };
const CAN: Team = { name: "Canada", fa: "کانادا", flag: "🇨🇦" };
const CIV: Team = { name: "Ivory Coast", fa: "ساحل عاج", flag: "🇨🇮" };
const NOR: Team = { name: "Norway", fa: "نروژ", flag: "🇳🇴" };
const FRA: Team = { name: "France", fa: "فرانسه", flag: "🇫🇷" };
const SWE: Team = { name: "Sweden", fa: "سوئد", flag: "🇸🇪" };
const MEX: Team = { name: "Mexico", fa: "مکزیک", flag: "🇲🇽" };
const ECU: Team = { name: "Ecuador", fa: "اکوادور", flag: "🇪🇨" };
const ENG: Team = { name: "England", fa: "انگلیس", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" };
const COD: Team = { name: "DR Congo", fa: "کنگو", flag: "🇨🇩" };
const BEL: Team = { name: "Belgium", fa: "بلژیک", flag: "🇧🇪" };
const SEN: Team = { name: "Senegal", fa: "سنگال", flag: "🇸🇳" };
const USA: Team = { name: "USA", fa: "آمریکا", flag: "🇺🇸" };
const BIH: Team = { name: "Bosnia and Herzegovina", fa: "بوسنی", flag: "🇧🇦" };
const ESP: Team = { name: "Spain", fa: "اسپانیا", flag: "🇪🇸" };
const AUT: Team = { name: "Austria", fa: "اتریش", flag: "🇦🇹" };
const POR: Team = { name: "Portugal", fa: "پرتغال", flag: "🇵🇹" };
const CRO: Team = { name: "Croatia", fa: "کرواسی", flag: "🇭🇷" };
const SUI: Team = { name: "Switzerland", fa: "سوییس", flag: "🇨🇭" };
const ALG: Team = { name: "Algeria", fa: "الجزایر", flag: "🇩🇿" };
const AUS: Team = { name: "Australia", fa: "استرالیا", flag: "🇦🇺" };
const EGY: Team = { name: "Egypt", fa: "مصر", flag: "🇪🇬" };
const ARG: Team = { name: "Argentina", fa: "آرژانتین", flag: "🇦🇷" };
const CPV: Team = { name: "Cabo Verde", fa: "کیپ ورد", flag: "🇨🇻" };
const COL: Team = { name: "Colombia", fa: "کلمبیا", flag: "🇨🇴" };
const GHA: Team = { name: "Ghana", fa: "غنا", flag: "🇬🇭" };

/* ----------------------------- MATCHES ----------------------------- */

export const matches: Match[] = [
  {
    id: "jpn-bra",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: JPN,
    away: BRA,
    homeGoals: 1,
    awayGoals: 2,
  },
  {
    id: "ger-par",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: GER,
    away: PAR,
    homeGoals: 1,
    awayGoals: 1,
    penalties: true,
    homePen: 3,
    awayPen: 4,
    penaltyWinner: "away",
  },
  {
    id: "ned-mar",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: NED,
    away: MAR,
    homeGoals: 1,
    awayGoals: 1,
    penalties: true,
    homePen: 2,
    awayPen: 3,
    penaltyWinner: "away",
  },
  {
    id: "civ-nor",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: CIV,
    away: NOR,
    homeGoals: 1,
    awayGoals: 2,
  },
  {
    id: "fra-swe",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: FRA,
    away: SWE,
    homeGoals: 3,
    awayGoals: 0,
  },
  {
    id: "mex-ecu",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: MEX,
    away: ECU,
    homeGoals: 2,
    awayGoals: 0,
  },
  {
    id: "eng-cod",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: ENG,
    away: COD,
    homeGoals: 2,
    awayGoals: 1,
  },
  {
    id: "bel-sen",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: BEL,
    away: SEN,
    homeGoals: 3,
    awayGoals: 2,
  },
  {
    id: "usa-bih",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: USA,
    away: BIH,
    homeGoals: 2,
    awayGoals: 0,
  },
  {
    id: "esp-aut",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: ESP,
    away: AUT,
    homeGoals: 3,
    awayGoals: 0,
  },
  {
    id: "por-cro",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: POR,
    away: CRO,
    homeGoals: 2,
    awayGoals: 1,
  },
  {
    id: "sui-alg",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: SUI,
    away: ALG,
    homeGoals: 2,
    awayGoals: 0,
  },
  {
    id: "aus-egy",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: AUS,
    away: EGY,
    homeGoals: 1,
    awayGoals: 1,
    penalties: true,
    homePen: 2,
    awayPen: 4,
    penaltyWinner: "away",
  },
  {
    id: "arg-cpv",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: ARG,
    away: CPV,
    homeGoals: 3,
    awayGoals: 2,
  },
  {
    id: "col-gha",
    stage: "Round of 32",
    stageFa: "یک‌شانزدهم نهایی",
    home: COL,
    away: GHA,
    homeGoals: 1,
    awayGoals: 0,
  },
  {
    id: "can-mar",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: CAN,
    away: MAR,
    homeGoals: 0,
    awayGoals: 3,
  },
  {
    id: "par-fra",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: PAR,
    away: FRA,
    homeGoals: 0,
    awayGoals: 1,
  },
  {
    id: "bra-nor",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: BRA,
    away: NOR,
    pending: true,
  },
  {
    id: "mex-eng",
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: MEX,
    away: ENG,
    pending: true,
  },
];

/* ----------------------------- PLAYERS ----------------------------- */

export const players: Player[] = [
  {
    name: "Barbod",
    predictions: {
      "jpn-bra": { homeGoals: 3, awayGoals: 2 },
      "civ-nor": { homeGoals: 1, awayGoals: 2 },
      "fra-swe": { homeGoals: 3, awayGoals: 0 },
      "mex-ecu": { homeGoals: 1, awayGoals: 2 },
      "eng-cod": { homeGoals: 3, awayGoals: 0 },
      "bel-sen": { homeGoals: 2, awayGoals: 2, penaltyWinner: "home" },
      "usa-bih": { homeGoals: 2, awayGoals: 0 },
      "esp-aut": { homeGoals: 3, awayGoals: 1 },
      "por-cro": { homeGoals: 2, awayGoals: 1 },
      "sui-alg": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "aus-egy": { homeGoals: 1, awayGoals: 2 },
      "arg-cpv": { homeGoals: 3, awayGoals: 0 },
      "col-gha": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" },
      "can-mar": { homeGoals: 1, awayGoals: 3 },
      "par-fra": { homeGoals: 1, awayGoals: 4 },
      "bra-nor": { homeGoals: 2, awayGoals: 3 },
      "mex-eng": { homeGoals: 1, awayGoals: 2 },
    },
  },
  {
    name: "Mohammad Taha Fakharian",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 2 }, // Bra 2 - Jpn 1  ✅ exact
      "ger-par": { homeGoals: 3, awayGoals: 0 }, // Ger 3 - Par 0
      "ned-mar": { homeGoals: 1, awayGoals: 2 }, // Mar 2 - Ned 1
      "fra-swe": { homeGoals: 3, awayGoals: 1 },
      "mex-ecu": { homeGoals: 2, awayGoals: 1 },
      "bel-sen": { homeGoals: 2, awayGoals: 1 },
      "usa-bih": { homeGoals: 3, awayGoals: 1 },
      "esp-aut": { homeGoals: 2, awayGoals: 1 },
      "por-cro": { homeGoals: 3, awayGoals: 1 },
      "sui-alg": { homeGoals: 2, awayGoals: 1 },
      "arg-cpv": { homeGoals: 2, awayGoals: 0 },
      "col-gha": { homeGoals: 3, awayGoals: 1 },
      "can-mar": { homeGoals: 1, awayGoals: 3 },
      "par-fra": { homeGoals: 0, awayGoals: 4 },
      "bra-nor": { homeGoals: 2, awayGoals: 1 },
      "mex-eng": { homeGoals: 2, awayGoals: 1 },
    },
  },
  {
    name: "امین علیاری جون",
    predictions: {
      "jpn-bra": { homeGoals: 4, awayGoals: 1 }, // Jpn 4 - Bra 1
      "ger-par": { homeGoals: 0, awayGoals: 2 }, // Par 2 - Ger 0
      "ned-mar": { homeGoals: 1, awayGoals: 3 }, // Mar 3 - Ned 1
      "civ-nor": { homeGoals: 3, awayGoals: 0 }, // CIV 3 - Nor 0
      "fra-swe": { homeGoals: 4, awayGoals: 0 },
      "mex-ecu": { homeGoals: 1, awayGoals: 0 },
      "eng-cod": { homeGoals: 2, awayGoals: 0 },
      "bel-sen": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "usa-bih": { homeGoals: 0, awayGoals: 1 },
      "esp-aut": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "por-cro": { homeGoals: 3, awayGoals: 1 },
      "sui-alg": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" },
      "aus-egy": { homeGoals: 2, awayGoals: 1 },
      "arg-cpv": { homeGoals: 0, awayGoals: 1 },
      "col-gha": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "can-mar": { homeGoals: 1, awayGoals: 0 },
      "par-fra": { homeGoals: 0, awayGoals: 4 },
      "bra-nor": { homeGoals: 1, awayGoals: 2 },
      "mex-eng": { homeGoals: 2, awayGoals: 1 },
    },
  },
  {
    name: "Peyman",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 3 }, // Bra 3 - Jpn 1
      "ger-par": { homeGoals: 4, awayGoals: 0 }, // Ger 4 - Par 0
      "ned-mar": { homeGoals: 3, awayGoals: 2 }, // Ned 3 - Mar 2
      "civ-nor": { homeGoals: 0, awayGoals: 3 }, // Nor 3 - CIV 0
      "fra-swe": { homeGoals: 4, awayGoals: 1 },
      "mex-ecu": { homeGoals: 2, awayGoals: 1 },
      "eng-cod": { homeGoals: 2, awayGoals: 0 },
      "bel-sen": { homeGoals: 1, awayGoals: 2 },
      "usa-bih": { homeGoals: 3, awayGoals: 1 },
      "esp-aut": { homeGoals: 2, awayGoals: 0 },
      "por-cro": { homeGoals: 1, awayGoals: 1 },
      "sui-alg": { homeGoals: 2, awayGoals: 0 },
      "aus-egy": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "arg-cpv": { homeGoals: 3, awayGoals: 0 },
      "col-gha": { homeGoals: 2, awayGoals: 1 },
      "can-mar": { homeGoals: 1, awayGoals: 3 },
      "par-fra": { homeGoals: 0, awayGoals: 3 },
      "bra-nor": { homeGoals: 2, awayGoals: 1 },
      "mex-eng": { homeGoals: 2, awayGoals: 3 },
    },
  },
  {
    name: "آرش دهقان",
    predictions: {
      "jpn-bra": { homeGoals: 2, awayGoals: 1 }, // Jpn 2 - Bra 1
    },
  },
  {
    name: "Behnam",
    predictions: {
      "jpn-bra": { homeGoals: 2, awayGoals: 3 }, // Bra 3 - Jpn 2
      "ger-par": { homeGoals: 3, awayGoals: 1 }, // Ger 3 - Par 1
    },
  },
  {
    name: "Ali Aghamiri",
    predictions: {
      "jpn-bra": { homeGoals: 2, awayGoals: 2, penaltyWinner: "away" }, // 2-2, Bra pens
      "ger-par": { homeGoals: 3, awayGoals: 1 }, // Ger 3 - Par 1
      "ned-mar": { homeGoals: 2, awayGoals: 2, penaltyWinner: "home" }, // 2-2, Ned pens
      "civ-nor": { homeGoals: 1, awayGoals: 3 }, // Nor 3 - CIV 1
      "fra-swe": { homeGoals: 4, awayGoals: 2 },
      "mex-ecu": { homeGoals: 1, awayGoals: 2 },
      "eng-cod": { homeGoals: 4, awayGoals: 1 },
      "bel-sen": { homeGoals: 2, awayGoals: 1 },
      "usa-bih": { homeGoals: 2, awayGoals: 1 },
      "esp-aut": { homeGoals: 2, awayGoals: 0 },
      "por-cro": { homeGoals: 2, awayGoals: 1 },
      "sui-alg": { homeGoals: 2, awayGoals: 1 },
      "aus-egy": { homeGoals: 2, awayGoals: 1 },
      "arg-cpv": { homeGoals: 2, awayGoals: 0 },
      "col-gha": { homeGoals: 2, awayGoals: 1 },
      "can-mar": { homeGoals: 1, awayGoals: 2 },
      "par-fra": { homeGoals: 1, awayGoals: 3 },
      "bra-nor": { homeGoals: 2, awayGoals: 1 },
      "mex-eng": { homeGoals: 1, awayGoals: 2 },
    },
  },
  {
    name: "Erfan Zare",
    predictions: {
      "jpn-bra": { homeGoals: 3, awayGoals: 2 }, // Jpn 3 - Bra 2
      "ger-par": { homeGoals: 2, awayGoals: 1 }, // Ger 2 - Par 1
      "ned-mar": { homeGoals: 0, awayGoals: 2 }, // Mar 2 - Ned 0
      "civ-nor": { homeGoals: 0, awayGoals: 2 }, // Nor 2 - CIV 0
      "fra-swe": { homeGoals: 3, awayGoals: 0 },
      "mex-ecu": { homeGoals: 2, awayGoals: 1 },
      "eng-cod": { homeGoals: 2, awayGoals: 0 },
      "bel-sen": { homeGoals: 2, awayGoals: 1 },
      "usa-bih": { homeGoals: 2, awayGoals: 0 },
      "esp-aut": { homeGoals: 1, awayGoals: 0 },
      "por-cro": { homeGoals: 2, awayGoals: 2, penaltyWinner: "home" },
      "sui-alg": { homeGoals: 3, awayGoals: 1 },
      "aus-egy": { homeGoals: 2, awayGoals: 1 },
      "arg-cpv": { homeGoals: 1, awayGoals: 2 },
      "col-gha": { homeGoals: 2, awayGoals: 0 },
      "can-mar": { homeGoals: 1, awayGoals: 2 },
      "par-fra": { homeGoals: 0, awayGoals: 3 },
      "bra-nor": { homeGoals: 3, awayGoals: 1 },
      "mex-eng": { homeGoals: 2, awayGoals: 1 },
    },
  },
  {
    name: "Samyar",
    predictions: {
      "jpn-bra": { homeGoals: 2, awayGoals: 1 }, // Jpn 2 - Bra 1
      "civ-nor": { homeGoals: 1, awayGoals: 2 },
      "fra-swe": { homeGoals: 3, awayGoals: 0 },
      "mex-ecu": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
      "eng-cod": { homeGoals: 2, awayGoals: 1 },
      "bel-sen": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" },
      "usa-bih": { homeGoals: 2, awayGoals: 1 },
      "esp-aut": { homeGoals: 3, awayGoals: 0 },
      "por-cro": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" },
      "sui-alg": { homeGoals: 1, awayGoals: 0 },
      "aus-egy": { homeGoals: 2, awayGoals: 0 },
      "arg-cpv": { homeGoals: 2, awayGoals: 0 },
      "col-gha": { homeGoals: 3, awayGoals: 0 },
      "can-mar": { homeGoals: 1, awayGoals: 3 },
      "par-fra": { homeGoals: 0, awayGoals: 3 },
      "bra-nor": { homeGoals: 3, awayGoals: 2 },
      "mex-eng": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
    },
  },
  {
    name: "𝓐𝓵𝓲",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 2 }, // Bra 2 - Jpn 1  ✅ exact
      "ger-par": { homeGoals: 3, awayGoals: 0 }, // Ger 3 - Par 0
      "ned-mar": { homeGoals: 2, awayGoals: 1 }, // Ned 2 - Mar 1
      "civ-nor": { homeGoals: 1, awayGoals: 3 }, // Nor 3 - CIV 1
      "fra-swe": { homeGoals: 3, awayGoals: 1 },
      "mex-ecu": { homeGoals: 2, awayGoals: 1 },
      "eng-cod": { homeGoals: 2, awayGoals: 0 },
      "bel-sen": { homeGoals: 2, awayGoals: 1 },
      "usa-bih": { homeGoals: 2, awayGoals: 1 },
      "esp-aut": { homeGoals: 2, awayGoals: 0 },
      "por-cro": { homeGoals: 2, awayGoals: 1 },
      "sui-alg": { homeGoals: 2, awayGoals: 1 },
      "aus-egy": { homeGoals: 1, awayGoals: 2 },
      "arg-cpv": { homeGoals: 2, awayGoals: 0 },
      "col-gha": { homeGoals: 2, awayGoals: 1 },
      "can-mar": { homeGoals: 1, awayGoals: 2 },
      "par-fra": { homeGoals: 1, awayGoals: 3 },
      "bra-nor": { homeGoals: 2, awayGoals: 1 },
      "mex-eng": { homeGoals: 1, awayGoals: 2 },
    },
  },
  {
    name: "TheBeniamin",
    predictions: {
      "jpn-bra": { homeGoals: 0, awayGoals: 2 }, // Bra 2 - Jpn 0
      "ger-par": { homeGoals: 2, awayGoals: 0 }, // Ger 2 - Par 0
      "ned-mar": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" }, // 1-1, Mar pens ✅
      "civ-nor": { homeGoals: 0, awayGoals: 1 }, // Nor 1 - CIV 0
      "fra-swe": { homeGoals: 2, awayGoals: 0 },
      "mex-ecu": { homeGoals: 0, awayGoals: 0, penaltyWinner: "home" },
      "eng-cod": { homeGoals: 3, awayGoals: 1 },
      "bel-sen": { homeGoals: 1, awayGoals: 2 },
      "usa-bih": { homeGoals: 2, awayGoals: 2, penaltyWinner: "home" },
      "esp-aut": { homeGoals: 2, awayGoals: 0 },
      "por-cro": { homeGoals: 2, awayGoals: 0 },
      "sui-alg": { homeGoals: 3, awayGoals: 1 },
      "aus-egy": { homeGoals: 0, awayGoals: 2 },
      "arg-cpv": { homeGoals: 2, awayGoals: 0 },
      "col-gha": { homeGoals: 2, awayGoals: 0 },
      "can-mar": { homeGoals: 0, awayGoals: 2 },
      "par-fra": { homeGoals: 0, awayGoals: 2 },
      "bra-nor": { homeGoals: 2, awayGoals: 1 },
      "mex-eng": { homeGoals: 1, awayGoals: 1, penaltyWinner: "home" },
    },
  },
];

/* ----------------------------- SCORING ----------------------------- */

export const outcomeOf = (h?: number, a?: number): Outcome | null => {
  if (h === undefined || a === undefined) return null;
  if (h > a) return "home";
  if (h < a) return "away";
  return "draw";
};

export interface ScoreResult {
  points: number;
  /** how the points were earned */
  kind:
    | "exact" // 10
    | "outcome-plus-goal" // 7 (one team goal or goal difference exact)
    | "outcome-plus-penalty" // 7 (non-exact draw + correct shootout winner)
    | "outcome" // 5
    | "penalty-bonus" // +3 bonus (added on top for correct draw + pen winner)
    | "wrong" // 0
    | "pending";
  /** raw outcome points (without penalty bonus) — used for breakdown */
  basePoints: number;
  bonus: number;
}

export function scorePrediction(pred: Prediction, match: Match): ScoreResult {
  if (match.pending) {
    return { points: 0, kind: "pending", basePoints: 0, bonus: 0 };
  }

  const predOutcome = outcomeOf(pred.homeGoals, pred.awayGoals)!;

  // Determine whether the predicted outcome is correct.
  let outcomeCorrect: boolean;
  if (match.penalties && match.penaltyWinner) {
    // Shootout: it's a draw at full time, but one team advances.
    if (predOutcome === "draw") {
      // A draw prediction matches the full-time result.
      outcomeCorrect = true;
    } else {
      // A win/loss prediction is correct if you picked the team that
      // actually WON the shootout (the real winner of the match).
      outcomeCorrect = predOutcome === match.penaltyWinner;
    }
  } else {
    const actualOutcome = outcomeOf(match.homeGoals, match.awayGoals)!;
    // A shootout pick made alongside a draw is also a pick for the team
    // to advance, even when that team wins before a shootout is needed.
    outcomeCorrect =
      predOutcome === "draw" && pred.penaltyWinner && actualOutcome !== "draw"
        ? pred.penaltyWinner === actualOutcome
        : predOutcome === actualOutcome;
  }

  let basePoints = 0;
  let kind: ScoreResult["kind"] = "wrong";
  const exact =
    pred.homeGoals === match.homeGoals && pred.awayGoals === match.awayGoals;
  const oneTeamExact =
    pred.homeGoals === match.homeGoals || pred.awayGoals === match.awayGoals;
  const goalDifferenceExact =
    predOutcome !== "draw" &&
    pred.homeGoals - pred.awayGoals === match.homeGoals! - match.awayGoals!;

  if (outcomeCorrect) {
    if (exact) {
      basePoints = 10;
      kind = "exact";
    } else if (oneTeamExact || goalDifferenceExact) {
      basePoints = 7;
      kind = "outcome-plus-goal";
    } else {
      basePoints = 5;
      kind = "outcome";
    }
  }

  // Shootout pick: +2 for a non-exact draw, or +3 only for an exact draw.
  let bonus = 0;
  const correctDrawAndPenaltyWinner =
    match.penalties &&
    predOutcome === "draw" &&
    pred.penaltyWinner === match.penaltyWinner;

  if (correctDrawAndPenaltyWinner) {
    if (exact) {
      bonus = 3;
    } else {
      basePoints = 7;
      kind = "outcome-plus-penalty";
    }
  }

  return { points: basePoints + bonus, kind, basePoints, bonus };
}

export interface PlayerStanding {
  player: Player;
  total: number;
  maxPossible: number; // includes the still-pending match (best case)
  results: Record<string, ScoreResult>;
  exactCount: number;
  outcomeCount: number;
  bonusCount: number;
  predictedCount: number;
}

export function buildStandings(): PlayerStanding[] {
  const standings = players.map((player) => {
    const results: Record<string, ScoreResult> = {};
    let total = 0;
    let maxPossible = 0;
    let exactCount = 0;
    let outcomeCount = 0;
    let bonusCount = 0;
    let predictedCount = 0;

    for (const match of matches) {
      const pred = player.predictions[match.id];
      if (!pred) continue;
      predictedCount += 1;
      const res = scorePrediction(pred, match);
      results[match.id] = res;
      total += res.points;
      // A pending prediction can earn 10, plus 3 when it includes a shootout pick.
      if (res.kind === "pending") {
        maxPossible += 10 + (pred.penaltyWinner ? 3 : 0);
      } else {
        maxPossible += res.points;
      }
      if (res.basePoints === 10) exactCount += 1;
      if (res.basePoints >= 5) outcomeCount += 1;
      if (res.bonus > 0) bonusCount += 1;
    }

    return {
      player,
      total,
      maxPossible,
      results,
      exactCount,
      outcomeCount,
      bonusCount,
      predictedCount,
    };
  });

  // Sort: total desc, then exactCount, then outcomeCount, then bonusCount
  standings.sort((a, b) =>
    b.total !== a.total
      ? b.total - a.total
      : b.exactCount !== a.exactCount
        ? b.exactCount - a.exactCount
        : b.outcomeCount !== a.outcomeCount
          ? b.outcomeCount - a.outcomeCount
          : b.bonusCount - a.bonusCount,
  );

  return standings;
}
