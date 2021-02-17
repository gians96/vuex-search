import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const movies = () => {
  return [
    {
      id: 1,
      title: "Are You Listening?",
      description: "Displaced segmental fracture of shaft of left femur",
      available: false,
    },
    {
      id: 2,
      title: "Doomsday Book",
      description:
        "Thyrotoxicosis with toxic single thyroid nodule without thyrotoxic crisis or storm",
      available: false,
    },
    {
      id: 3,
      title: "Tyler Perry's Madea Goes to Jail",
      description:
        "Poisoning by monoamine-oxidase-inhibitor antidepressants, assault, initial encounter",
      available: true,
    },
    {
      id: 4,
      title: "All Things to All Men",
      description: "Fracture of unspecified phalanx of other finger",
      available: false,
    },
    {
      id: 5,
      title: "Zero",
      description:
        "Paralytic calcification and ossification of muscle, unspecified thigh",
      available: true,
    },
    {
      id: 6,
      title: "Slither",
      description:
        "Corrosion of first degree of multiple sites of unspecified wrist and hand, sequela",
      available: true,
    },
    {
      id: 7,
      title: "Prinsessa Ruusunen",
      description:
        "Nondisplaced fracture of triquetrum [cuneiform] bone, right wrist, subsequent encounter for fracture with routine healing",
      available: false,
    },
    {
      id: 8,
      title: "Whoopi Goldberg Presents Moms Mabley",
      description:
        "Other traumatic displaced spondylolisthesis of third cervical vertebra, subsequent encounter for fracture with routine healing",
      available: true,
    },
    {
      id: 9,
      title: "Vacancy 2: The First Cut",
      description: "Intramural leiomyoma of uterus",
      available: false,
    },
    {
      id: 10,
      title: "This Is Not a Film (In film nist)",
      description:
        "Other fracture of lower end of left femur, subsequent encounter for open fracture type I or II with malunion",
      available: false,
    },
    {
      id: 11,
      title: "Indian in the Cupboard, The",
      description:
        "Decreased fetal movements, unspecified trimester, other fetus",
      available: false,
    },
    {
      id: 12,
      title: "One-Way Ticket to Mombasa (Menolippu Mombasaan)",
      description: "Contact with hot water in bath or tub, sequela",
      available: false,
    },
    {
      id: 13,
      title: "Kid in King Arthur's Court, A",
      description: "Poisoning by oxytocic drugs, accidental (unintentional)",
      available: false,
    },
    {
      id: 14,
      title: "Beverly Hills Ninja",
      description: "Other injury of small intestine",
      available: false,
    },
    {
      id: 15,
      title: "I Love You, Don't Touch Me!",
      description:
        "Unspecified car occupant injured in collision with sport utility vehicle in nontraffic accident",
      available: false,
    },
    {
      id: 16,
      title: "15 Minutes",
      description: "Laceration of unspecified tibial artery, left leg",
      available: false,
    },
    {
      id: 17,
      title: "Redes (Fishermen's Nets) (Wave, The)",
      description: "Newborn affected by surgical procedure on mother",
      available: false,
    },
    {
      id: 18,
      title: "Garden of Allah, The",
      description: "Assault by unspecified hot objects",
      available: true,
    },
    {
      id: 19,
      title: "Jolly Boys' Last Stand, The",
      description: "Other specified injury of innominate or subclavian artery",
      available: true,
    },
    {
      id: 20,
      title: "Returner (Ritaanaa)",
      description:
        "Acute hematogenous osteomyelitis, unspecified ankle and foot",
      available: true,
    },
    {
      id: 21,
      title: "Punk in London",
      description: "Parasomnia in conditions classified elsewhere",
      available: true,
    },
    {
      id: 22,
      title: "24 City (Er shi si cheng ji)",
      description:
        "Traumatic hemorrhage of left cerebrum with loss of consciousness of any duration with death due to other cause prior to regaining consciousness",
      available: false,
    },
    {
      id: 23,
      title: "Getting Even with Dad",
      description:
        "Fracture of one rib, unspecified side, subsequent encounter for fracture with delayed healing",
      available: true,
    },
    {
      id: 24,
      title: "Small Wonders",
      description: "Dissection of renal artery",
      available: false,
    },
    {
      id: 25,
      title: "Swoon",
      description:
        "Traumatic cerebral edema with loss of consciousness greater than 24 hours with return to pre-existing conscious level, sequela",
      available: true,
    },
    {
      id: 26,
      title: "Millions Game, The (Das Millionenspiel)",
      description:
        "Partial traumatic amputation at unspecified hip joint, subsequent encounter",
      available: false,
    },
    {
      id: 27,
      title: "Alone in the Wilderness",
      description:
        "Nondisplaced oblique fracture of shaft of right radius, subsequent encounter for open fracture type I or II with malunion",
      available: false,
    },
    {
      id: 28,
      title: "Cherry Tree Lane",
      description: "Corrosion of first degree of lip(s), initial encounter",
      available: false,
    },
    {
      id: 29,
      title: "Best Foot Forward",
      description:
        "Corrosions of other specified parts of unspecified eye and adnexa",
      available: true,
    },
    {
      id: 30,
      title: "Tesla: Master of Lightning",
      description: "Hemopericardium, not elsewhere classified",
      available: false,
    },
    {
      id: 31,
      title: "Torments (El) (This Strange Passion)",
      description:
        "Displaced spiral fracture of shaft of radius, right arm, subsequent encounter for open fracture type I or II with nonunion",
      available: false,
    },
    {
      id: 32,
      title: "California Conquest",
      description:
        "Cerebral infarction due to embolism of bilateral posterior cerebral arteries",
      available: false,
    },
    {
      id: 33,
      title: "Wings of Courage",
      description:
        "Nondisplaced subtrochanteric fracture of unspecified femur, subsequent encounter for open fracture type I or II with malunion",
      available: true,
    },
    {
      id: 34,
      title: "Disco and Atomic War (Disko ja tuumasõda)",
      description:
        "Unspecified injury of other blood vessels at ankle and foot level, left leg",
      available: true,
    },
    {
      id: 35,
      title: "Horse Soldiers, The",
      description:
        "War operations involving explosion of improvised explosive device [IED], military personnel, initial encounter",
      available: false,
    },
    {
      id: 36,
      title: "Miss Minoes",
      description: "Unstable burst fracture of first thoracic vertebra",
      available: false,
    },
    {
      id: 37,
      title: "Our Blushing Brides",
      description: "Fistula, right ankle",
      available: false,
    },
    {
      id: 38,
      title: "Outrageous Fortune",
      description: "Kissing spine",
      available: false,
    },
    {
      id: 39,
      title: "Dirty Ho (Lan tou He)",
      description:
        "Unspecified intracapsular fracture of left femur, subsequent encounter for closed fracture with routine healing",
      available: false,
    },
    {
      id: 40,
      title: "Split Second",
      description:
        "Laceration without foreign body of abdominal wall, unspecified quadrant with penetration into peritoneal cavity, initial encounter",
      available: false,
    },
    {
      id: 41,
      title: "Khodorkovsky",
      description:
        "Contusion of eyeball and orbital tissues, left eye, subsequent encounter",
      available: true,
    },
    {
      id: 42,
      title: "Fanny",
      description: "Ulcerative (chronic) proctitis with abscess",
      available: false,
    },
    {
      id: 43,
      title: "Die Another Day",
      description: "Poisoning by antipruritics, undetermined, sequela",
      available: false,
    },
    {
      id: 44,
      title: "Principal, The",
      description:
        "Displaced fracture of medial condyle of unspecified humerus, subsequent encounter for fracture with delayed healing",
      available: false,
    },
    {
      id: 45,
      title: "Elena Undone",
      description:
        "Driver of heavy transport vehicle injured in collision with car, pick-up truck or van in nontraffic accident, sequela",
      available: false,
    },
    {
      id: 46,
      title: "Men Don't Leave",
      description:
        "Military operations involving unspecified effect of nuclear weapon, civilian, subsequent encounter",
      available: false,
    },
    {
      id: 47,
      title: "Cab for Three, A (Taxi para tres)",
      description: "Skeletal fluorosis, left shoulder",
      available: false,
    },
    {
      id: 48,
      title: "Camp Hell",
      description: "Other calcification of muscle, hand",
      available: false,
    },
    {
      id: 49,
      title: "Chu Chin Chow",
      description:
        "Unspecified motorcycle rider injured in collision with railway train or railway vehicle in traffic accident",
      available: false,
    },
    {
      id: 50,
      title: "Deterrence",
      description:
        "Poisoning by unspecified psychostimulants, accidental (unintentional), sequela",
      available: true,
    },
    {
      id: 51,
      title: "Breaking the Rules",
      description:
        "Unspecified injury of esophagus (thoracic part), initial encounter",
      available: true,
    },
    {
      id: 52,
      title: "Dream Team 1935",
      description: "Pseudopterygium of conjunctiva",
      available: false,
    },
    {
      id: 53,
      title: "Perifery (Härmä)",
      description: "Traumatic arthropathy, left hand",
      available: true,
    },
    {
      id: 54,
      title: "Day's Pleasure, A (Ford Story, A)",
      description:
        "Other private fixed-wing aircraft fire injuring occupant, initial encounter",
      available: true,
    },
    {
      id: 55,
      title: "For the Love of Benji",
      description:
        "Poisoning by, adverse effect of and underdosing of predominantly beta-adrenoreceptor agonists",
      available: false,
    },
    {
      id: 56,
      title: "Brassed Off",
      description: "Enthesopathy, unspecified",
      available: true,
    },
    {
      id: 57,
      title: "Generation P",
      description:
        "Salter-Harris Type II physeal fracture of lower end of left femur, subsequent encounter for fracture with nonunion",
      available: true,
    },
    {
      id: 58,
      title: "Inkwell, The",
      description: "Algoneurodystrophy, unspecified thigh",
      available: false,
    },
    {
      id: 59,
      title: "Rescuers Down Under, The",
      description: "Other fracture of lower end of unspecified tibia, sequela",
      available: false,
    },
    {
      id: 60,
      title: "Muck",
      description:
        "Displaced fracture of glenoid cavity of scapula, right shoulder, initial encounter for closed fracture",
      available: true,
    },
    {
      id: 61,
      title: "Dutch",
      description: "Open bite of left shoulder, initial encounter",
      available: false,
    },
    {
      id: 62,
      title: "Blood Creek (a.k.a. Town Creek)",
      description:
        "Puncture wound with foreign body of right lesser toe(s) with damage to nail, initial encounter",
      available: true,
    },
    {
      id: 63,
      title: "Star Is Born, A",
      description: "Other specified disorders of breast",
      available: true,
    },
    {
      id: 64,
      title: "Ponyo (Gake no ue no Ponyo)",
      description:
        "Unspecified fracture of upper end of unspecified ulna, subsequent encounter for closed fracture with nonunion",
      available: true,
    },
    {
      id: 65,
      title: "Golden Christmas 3, A",
      description:
        "Partial traumatic amputation of left shoulder and upper arm, level unspecified",
      available: true,
    },
    {
      id: 66,
      title: "Conspirators of Pleasure (Spiklenci slasti)",
      description:
        "Sprain of interphalangeal joint of left middle finger, sequela",
      available: true,
    },
    {
      id: 67,
      title: "Mille bolle blu",
      description:
        "Other injury of other flexor muscle, fascia and tendon at forearm level, right arm, sequela",
      available: false,
    },
    {
      id: 68,
      title: "Wild Women",
      description: "Other noninfective acute otitis externa, bilateral",
      available: true,
    },
    {
      id: 69,
      title: "Mysterious Origins of Man",
      description: "Combined forms of age-related cataract",
      available: true,
    },
    {
      id: 70,
      title: "Dead Men Walk",
      description: "Enteropathic arthropathies, left shoulder",
      available: false,
    },
    {
      id: 71,
      title: "Box of Moon Light",
      description:
        "3-part fracture of surgical neck of unspecified humerus, subsequent encounter for fracture with routine healing",
      available: false,
    },
    {
      id: 72,
      title: "Sounder",
      description: "Renal failure following incomplete spontaneous abortion",
      available: false,
    },
    {
      id: 73,
      title:
        "Lone Wolf and Cub: Baby Cart at the River Styx (Kozure Ôkami: Sanzu no kawa no ubaguruma)",
      description:
        "Idiopathic cysts of iris, ciliary body or anterior chamber, unspecified eye",
      available: true,
    },
    {
      id: 74,
      title: "Promise of the Flesh (Yukcheui yaksok)",
      description:
        "Fibrosis due to nervous system prosthetic devices, implants and grafts, subsequent encounter",
      available: false,
    },
    {
      id: 75,
      title: "Tesseract, The",
      description: "Adult sexual abuse, confirmed, initial encounter",
      available: false,
    },
    {
      id: 76,
      title: "Town, The",
      description:
        "Drowning and submersion due to falling or jumping from crushed unspecified watercraft",
      available: true,
    },
    {
      id: 77,
      title: "Good Lawyer's Wife, A (Baramnan gajok)",
      description: "Crohn's disease of small intestine with complications",
      available: false,
    },
    {
      id: 78,
      title: "Shining Through",
      description: "Unspecified otitis externa, unspecified ear",
      available: false,
    },
    {
      id: 79,
      title: "Conjuring, The",
      description: "Insomnia, unspecified",
      available: true,
    },
    {
      id: 80,
      title: "Shining, The",
      description: "Subluxation and dislocation of knee",
      available: false,
    },
    {
      id: 81,
      title: "Bombshell",
      description:
        "Displaced fracture of capitate [os magnum] bone, left wrist, subsequent encounter for fracture with delayed healing",
      available: false,
    },
    {
      id: 82,
      title: "Death Race 3: Inferno",
      description:
        "Injury of unspecified blood vessel at neck level, subsequent encounter",
      available: true,
    },
    {
      id: 83,
      title: "Aliyah (Alyah) ",
      description: "Injury of brachial artery",
      available: false,
    },
    {
      id: 84,
      title: "Any Which Way You Can",
      description: "Glomerular disorders in diseases classified elsewhere",
      available: false,
    },
    {
      id: 85,
      title: "Cold Comfort Farm",
      description:
        "Displacement of prosthetic orbit of right eye, initial encounter",
      available: false,
    },
    {
      id: 86,
      title: "Zakochani",
      description:
        "Displaced fracture of coronoid process of right ulna, subsequent encounter for open fracture type I or II with nonunion",
      available: false,
    },
    {
      id: 87,
      title: "Bury My Heart at Wounded Knee",
      description:
        "Diverticular disease of small intestine without perforation or abscess",
      available: false,
    },
    {
      id: 88,
      title: "Forger, The",
      description:
        "Unspecified occupant of bus injured in noncollision transport accident in traffic accident, sequela",
      available: false,
    },
    {
      id: 89,
      title: "Power of One, The",
      description: "Congenital diaphragmatic hernia",
      available: false,
    },
    {
      id: 90,
      title: "Levottomat 3",
      description:
        "Anaplastic large cell lymphoma, ALK-negative, lymph nodes of axilla and upper limb",
      available: false,
    },
    {
      id: 91,
      title: "On the Threshold (Lars i porten)",
      description: "Struck by soccer ball, sequela",
      available: true,
    },
    {
      id: 92,
      title: "Hail Mary ('Je vous salue, Marie')",
      description: "Chromosome replaced with ring, dicentric or isochromosome",
      available: true,
    },
    {
      id: 93,
      title: "American President, The",
      description: "Other articular cartilage disorders, wrist",
      available: true,
    },
    {
      id: 94,
      title: "Addicted to Plastic",
      description:
        "Displaced supracondylar fracture without intracondylar extension of lower end of unspecified femur, subsequent encounter for closed fracture with nonunion",
      available: false,
    },
    {
      id: 95,
      title: "Arthur",
      description:
        "Injury of other nerves at wrist and hand level of right arm",
      available: false,
    },
    {
      id: 96,
      title: "Under the Bridges (Unter den Brücken)",
      description:
        "Malignant hyperthermia due to anesthesia, initial encounter",
      available: false,
    },
    {
      id: 97,
      title: "Mutiny on the Bounty",
      description: "Retained placenta without hemorrhage",
      available: false,
    },
    {
      id: 98,
      title:
        "Adventures of Prince Achmed, The (Abenteuer des Prinzen Achmed, Die)",
      description:
        "Rheumatoid arthritis without rheumatoid factor, unspecified site",
      available: true,
    },
    {
      id: 99,
      title: "District 9",
      description: "Newborn affected by other conditions of umbilical cord",
      available: true,
    },
    {
      id: 100,
      title: "Saving Mr. Banks",
      description:
        "Other specified injury of radial artery at forearm level, right arm",
      available: false,
    },
  ];
};
export default new Vuex.Store({
  state: {
    movies: movies(),
    filter: {
      query: "",
      available: true,
    },
  },
  mutations: {
    SET_QUERY(state, query) {
      state.filter.query = query;
    },
    SET_AVAILABLE(state) {
      state.filter.available = !state.filter.available;
    },
  },
  actions: {},
  modules: {},
  getters: {
    filteredMovies(state) {
      let movies = state.movies.filter(
        (movie) => movie.available === state.filter.available
      );
      if (state.filter.query.length > 2) {
        return movies.filter((movie) =>
          movie.title
            .toLocaleLowerCase()
            .includes(state.filter.query.toLocaleLowerCase())
        );
      }
      return movies;
    },
  },
});
