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
const CIV: Team = { name: "Ivory Coast", fa: "ساحل عاج", flag: "🇨🇮" };
const NOR: Team = { name: "Norway", fa: "نروژ", flag: "🇳🇴" };

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
    stage: "Round of 16",
    stageFa: "یک‌هشتم نهایی",
    home: CIV,
    away: NOR,
    pending: true,
  },
];

/* ----------------------------- PLAYERS ----------------------------- */

export const players: Player[] = [
  {
    name: "Barbod",
    predictions: {
      "jpn-bra": { homeGoals: 3, awayGoals: 2 },
    },
  },
  {
    name: "Mohammad Taha Fakharian",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 2 }, // Bra 2 - Jpn 1  ✅ exact
      "ger-par": { homeGoals: 3, awayGoals: 0 }, // Ger 3 - Par 0
      "ned-mar": { homeGoals: 1, awayGoals: 2 }, // Mar 2 - Ned 1
    },
  },
  {
    name: "امین علیاری جون",
    predictions: {
      "jpn-bra": { homeGoals: 4, awayGoals: 1 }, // Jpn 4 - Bra 1
      "ger-par": { homeGoals: 0, awayGoals: 2 }, // Par 2 - Ger 0
      "ned-mar": { homeGoals: 1, awayGoals: 3 }, // Mar 3 - Ned 1
      "civ-nor": { homeGoals: 3, awayGoals: 0 }, // CIV 3 - Nor 0
    },
  },
  {
    name: "Peyman",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 3 }, // Bra 3 - Jpn 1
      "ger-par": { homeGoals: 4, awayGoals: 0 }, // Ger 4 - Par 0
      "ned-mar": { homeGoals: 3, awayGoals: 2 }, // Ned 3 - Mar 2
      "civ-nor": { homeGoals: 0, awayGoals: 3 }, // Nor 3 - CIV 0
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
    },
  },
  {
    name: "Erfan Zare",
    predictions: {
      "jpn-bra": { homeGoals: 3, awayGoals: 2 }, // Jpn 3 - Bra 2
      "ger-par": { homeGoals: 2, awayGoals: 1 }, // Ger 2 - Par 1
      "ned-mar": { homeGoals: 0, awayGoals: 2 }, // Mar 2 - Ned 0
      "civ-nor": { homeGoals: 0, awayGoals: 2 }, // Nor 2 - CIV 0
    },
  },
  {
    name: "Samyar",
    predictions: {
      "jpn-bra": { homeGoals: 2, awayGoals: 1 }, // Jpn 2 - Bra 1
    },
  },
  {
    name: "𝓐𝓵𝓲",
    predictions: {
      "jpn-bra": { homeGoals: 1, awayGoals: 2 }, // Bra 2 - Jpn 1  ✅ exact
      "ger-par": { homeGoals: 3, awayGoals: 0 }, // Ger 3 - Par 0
      "ned-mar": { homeGoals: 2, awayGoals: 1 }, // Ned 2 - Mar 1
      "civ-nor": { homeGoals: 1, awayGoals: 3 }, // Nor 3 - CIV 1
    },
  },
  {
    name: "TheBeniamin",
    predictions: {
      "jpn-bra": { homeGoals: 0, awayGoals: 2 }, // Bra 2 - Jpn 0
      "ger-par": { homeGoals: 2, awayGoals: 0 }, // Ger 2 - Par 0
      "ned-mar": { homeGoals: 1, awayGoals: 1, penaltyWinner: "away" }, // 1-1, Mar pens ✅
      "civ-nor": { homeGoals: 0, awayGoals: 1 }, // Nor 1 - CIV 0
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
    | "outcome-plus-goal" // 7
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
    outcomeCorrect = predOutcome === actualOutcome;
  }

  let basePoints = 0;
  let kind: ScoreResult["kind"] = "wrong";

  if (outcomeCorrect) {
    const exact =
      pred.homeGoals === match.homeGoals && pred.awayGoals === match.awayGoals;
    const oneTeamExact =
      pred.homeGoals === match.homeGoals || pred.awayGoals === match.awayGoals;

    if (exact) {
      basePoints = 10;
      kind = "exact";
    } else if (oneTeamExact) {
      basePoints = 7;
      kind = "outcome-plus-goal";
    } else {
      basePoints = 5;
      kind = "outcome";
    }
  }

  // Penalty bonus: match went to pens AND you predicted the draw + correct winner
  let bonus = 0;
  if (
    match.penalties &&
    predOutcome === "draw" &&
    pred.penaltyWinner &&
    pred.penaltyWinner === match.penaltyWinner
  ) {
    bonus = 3;
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
      // pending match could still yield up to 10 (plus a 3-pt penalty bonus)
      if (res.kind === "pending") {
        maxPossible += 13;
      } else {
        maxPossible += res.points;
      }
      if (res.basePoints === 3) exactCount += 1;
      if (res.basePoints >= 1) outcomeCount += 1;
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
