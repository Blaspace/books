import addiction from "./AddictionBooks";
import angelsBooks from "./AngelsBook";
import biographyBooks from "./BiographyBooks";
import blessingBooks from "./BlessingBooks";
import deliveranceBooks from "./DeliveranceBooks";
import demonsBooks from "./DemonsBooks";
import discipleshipBooks from "./DiscipleBooks";
import emotionBooks from "./EmotionBooks";
import raptureBooks from "./EndtimeBooks";
import faithBooks from "./FaithBooks";
import fearBooks from "./FearBooks";
import financeBooks from "./FinanceBooks";
import forgivenessBooks from "./ForgivenessBooks";
import gospelBooks from "./GospelBooks";
import graceBooks from "./GraceBooks";
import healingBooks from "./HealingBooks";
import holySpiritBooks from "./HolySpiritBooks";
import leadershipBooks from "./LeadershipBooks";
import lifestyleBooks from "./LifestyleBooks";
import menBooks from "./MenBooks";
import mindBooks from "./MindBooks";
import ministryBooks from "./MinistryBooks";
import miracleBooks from "./MiracleBooks";
import missionaryBooks from "./MisionaryBooks";
import mysteryBooks from "./MysteryBooks";
import obedienceBooks from "./ObedientBook";
import personalDevelopmentBooks from "./PersonalDevelopmentBooks";
import praiseAndWorshipBooks from "./PraiseAndWorship";
import prayerBooks from "./PrayerBooks";
import prophecyBooks from "./ProphecyBooks";
import relationshipBooks from "./RelationshipBooks";
import revivalBooks from "./RevivalBooks";
import SoulWinningBooks from "./SoulwiningBooks";
import spiritualGrowthBooks from "./SpiritualGrowthBooks";
import visionBooks from "./VisionBooks";
import wisdomBooks from "./WisdomBooks";
import womenBooks from "./WomenBooks";
import wordBooks from "./WordBooks";
import youthBooks from "./YouthBooks";
import voiceOfGod from "./voiceOfGodBooks";

const books = [
  ...prayerBooks,
  ...addiction,
  ...deliveranceBooks,
  ...graceBooks,
  ...healingBooks,
  ...holySpiritBooks,
  ...visionBooks,
  ...voiceOfGod,
  ...angelsBooks,
  ...biographyBooks,
  ...blessingBooks,
  ...demonsBooks,
  ...discipleshipBooks,
  ...emotionBooks,
  ...faithBooks,
  ...fearBooks,
  ...financeBooks,
  ...forgivenessBooks,
  ...gospelBooks,
  ...leadershipBooks,
  ...lifestyleBooks,
  ...mindBooks,
  ...ministryBooks,
  ...raptureBooks,
  ...relationshipBooks,
  ...SoulWinningBooks,
  ...prophecyBooks,
  ...menBooks,
  ...miracleBooks,
  ...missionaryBooks,
  ...mysteryBooks,
  ...obedienceBooks,
  ...praiseAndWorshipBooks,
  ...personalDevelopmentBooks,
  ...revivalBooks,
  ...wisdomBooks,
  ...wordBooks,
  ...womenBooks,
  ...youthBooks,
  ...spiritualGrowthBooks,
];
books.sort((v) => 0.5 - Math.random());

export default books;
