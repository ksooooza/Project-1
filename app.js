//List of possible words = 2280

const wordList = ["aback", "abase", "abate", "abbey", "abbot", "abhor",
 "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss",
 "acorn", "acrid", "actor", "acute", "adage", "adapt", "adept", "admin", 
 "admit", "adobe", "adopt", "adore", "adorn", "adult", "affix", "afire", 
 "afoot", "afoul", "after", "again", "agape", "agate", "agent", "agile", 
 "aging", "aglow", "agony", "agree", "ahead", "aider", "aisle", "alarm", 
 "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", 
 "allay", "alley", "allot", "allow", "alloy", "aloft", "alone", "along", 
 "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", 
 "amble", "amend", "amiss", "amity", "among", "amply", "amply", "amuse", 
 "angel", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", 
 "annex", "annoy", "annul", "anode", "antic", "anvil", "aorta", "apart", 
 "aphid", "aping", "apnea", "apple", "apply", "apron", "aptly", "arbor", 
 "ardor", "arena", "argue", "arise", "aroma", "arose", "array", "arrow", 
 "arson", "artsy", "ascot", "ashen", "aside", "askew", "assay", "asset", 
 "atoll", "atone", "attic", "audio", "audit", "augur", "aunty", "avail", 
 "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", 
 "awful", "awoke", "axial", "axiom", "axion", "azure", "bacon", "badge", 
 "badly", "bagel", "baggy", "baker", "baler", "balmy", "banal", "banjo", 
 "barge", "baron", "basal", "basic", "basin", "basis", "baste", "batch", 
 "bathe", "baton", "batty", "bawdy", "bayou", "beach", "beady", "beard", 
 "beast", "beech", "beefy", "befit", "began", "begat", "beget", "begin", 
 "begun", "being", "belch", "belie", "belle", "belly", "below", "bench", 
 "beret", "berry", "berth", "beset", "betel", "bevel", "bezel", "bible", 
 "bicep", "biddy", "bigot", "bilge", "billy", "binge", "bingo", "biome", 
 "birch", "birth", "bison", "bitty", "black", "blade", "blame", "bland", 
 "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "bleep", 
 "blend", "bless", "blimp", "blind", "blink", "bliss", "blitz", "bloat", 
 "block", "bloke", "blond", "blood", "bloom", "blown", "bluer", "bluff",
 "blunt", "blurb", "blurt", "blush", "board", "boast", "bobby", "boney", 
 "bongo", "bonus", "booby", "boost", "booth", "booty", "booze", "boozy", 
 "borax", "borne", "bosom", "bossy", "botch", "bough", "boule", "bound", 
 "bowel", "boxer", "brace", "braid", "brain", "brake", "brand", "brash", "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", 
 "breed", "briar", "bribe", "brick", "bride", "brief", "brine", "bring", 
 "brink", "briny", "brisk", "broad", "broil", "broke", "brood", "brook", 
 "broom", "broth", "brown", "brunt", "brush", "brute", "buddy", "budge", 
 "buggy", "bugle", "build", "built", "bulge", "bulky", "bully", "bunch", 
 "bunny", "burly", "burnt", "burst", "bused", "bushy", "butch", "butte", 
 "buxom", "buyer", "bylaw",
 "cabal", "cabby", "cabin", "cable", "cacao", "cache", "cacti", "caddy", 
 "cadet", "cagey", "cairn", "camel", "cameo", "canal", "candy", "canny", 
 "canoe", "canon", "caper", "caput", "carat", "cargo", "carol", "carry", 
 "carve", "caste", "catch", "cater", "catty", "caulk", "cause", "cavil", 
 "cease", "cedar", "cello", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chant", "chaos", "chard", "charm", "chart", "chase", "chasm", 
 "cheap", "cheat", "check", "cheek", "cheer", "chess", "chest", "chick", 
 "chide", "chief", "child", "chili", "chill", "chime", "china", "chirp", 
 "chock", "choir", "choke", "chord", "chore", "chose", "chuck", "chump", 
 "chunk", "churn", "chute", "cider", "cigar", "cinch", "circa", "civic", 
 "civil", "clack", "claim", "clamp", "clang", "clank", "clash", "clasp", 
 "class", "clean", "clear", "cleat", "cleft", "clerk", "click", "cliff", 
 "climb", "cling", "clink", "cloak", "clock", "clone", "close", "cloth", 
 "cloud", "clout", "clove", "clown", "cluck", "clued", "clump", "clung", 
 "coach", "coast", "cobra", "cocoa", "colon", "color", "comet", "comfy", "comic", "comma", "conch", "condo", "conic", "copse", "coral", "corer", 
 "corny", "couch", "cough", "could", "count", "coupe", "court", "coven", "cover", "covet", "covey", "cower", "coyly", "crack", "craft", "cramp", 
 "crane", "crank", "crash", "crass", "crate", "crave", "crawl", "craze", 
 "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "creme", 
 "crepe", "crept", "cress", "crest", "crick", "cried", "crier", "crime", 
 "crimp", "crisp", "croak", "crock", "crone", "crony", "crook", "cross", "croup", "crowd", "crown", "crude", "cruel", "crumb", "crump", "crush", 
 "crust", "crypt", "cubic", "cumin", "curio", "curly", "curry", "curse", 
 "curve", "curvy", "cutie", "cyber", "cycle", "cynic",
 "daddy", "daily", "dairy", "daisy", "dally", "dance", "dandy", "datum", 
 "daunt", "dealt", "death", "debar", "debit", "debug", "debut", "decal", 
 "decay", "decor", "decoy", "decry", "defer", "deign", "deity", "delay", 
 "delta", "delve", "demon", "demur", "denim", "dense", "depot", "depth", 
 "derby", "deter", "detox", "deuce", "devil", "diary", "dicey", "digit", "dilly", "dimly", "diner", "dingo", "dingy", "diode", "dirge", "dirty", 
 "disco", "ditch", "ditto", "ditty", "diver", "dizzy", "dodge", "dodgy", 
 "dogma", "doing", "dolly", "donor", "donut", "dopey", "doubt", "dough", 
 "dowdy", "dowel", "downy", "dowry", "dozen", "draft", "drain", "drake", 
 "drama", "drank", "drape", "drawl", "drawn", "dread", "dream", "dress", 
 "dried", "drier", "drift", "drill", "drink", "drive", "droit", "droll", "drone", "drool", "droop", "dross", "drove", "drove", "drown", "druid", 
 "drunk", "dryer", "dryly", "duchy", "dully", "dummy", "dumpy", "dunce", 
 "dusky", "dusty", "dutch", "duvet", "dwarf", "dwell", "dwelt", "dying", 
 "eager", "eagle", "early", "earth", "easel", "eaten", "eater", "ebony", 
 "eclat", "edict", "edify", "eerie", "egret", "eight", "eject", "eking", 
 "elate", "elbow", "elder", "elect", "elegy", "elfin", "elide", "elite", 
 "elope", "elude", "email", "embed", "ember", "emcee", "empty", "enact", 
 "endow", "enema", "enemy", "enjoy", "ennui", "ensue", "enter", "entry", 
 "envoy", "epoch", "epoxy", "equal", "equip", "erase", "erect", "erode",
 "error", "erupt", "essay", "ester", "ether", "ethic", "ethos", "etude", 
 "evade", "event", "every", "evict", "evoke", "exact", "exalt", "excel", 
 "exert", "exile", "exist", "expel", "extol", "extra", "exult", "eying", 
 "fable", "facet", "faint", "fairy", "faith", "false", "fancy", "fanny", 
 "farce", "fatal", "fatty", "fault", "fauna", "favor", "feast", "fecal", 
 "feign", "fella", "felon", "femme", "femur", "fence", "feral", "ferry", 
 "fetal", "fetch", "fetid", "fetus", "fever", "fewer", "fiber", "ficus", 
 "field", "fiend", "fiery", "fifth", "fifty", "fight", "filer", "filet", "filly", "filmy", "filth", "final", "finch", "finer", "first", "fishy", "fixer", "fizzy", "fjord", "flack", "flail", "flair", "flake", "flaky", 
 "flame", "flank", "flare", "flash", "flask", "fleck", "fleet", "flesh", 
 "flick", "flier", "fling", "flint", "flirt", "float", "flock", "flood", 
 "floor", "flora", "floss", "flour", "flout", "flown", "fluff", "fluid", 
 "fluke", "flume", "flung", "flunk", "flush", "flute", "flyer", "foamy", "focal", "focus", "foggy", "foist", "folio", "folly", "foray", "force", 
 "forge", "forgo", "forte", "forth", "forty", "forum", "found", "foyer", 
 "frail", "frame", "frank", "friar", "fried", "frill", "frisk", "fritz", 
 "frock", "frond", "front", "frost", "froth", "frown", "froze", "fruit", "fudge", "fugue", "fully", "fungi", "funky", "funny", "furor", "furry", 
 "fussy", "fuzzy", "gaffe", "gaily", "gamer", "gamma", "gamut", "gassy", 
 "gaudy", "guage", "gaunt", "guaze", "gavel", "gawky", "gayer", "gayly", 
 "gazer", "gecko", "geeky", "geese", "genie", "genre", "ghost", "ghoul", 
 "giant", "giddy", "girly", "girth", "given", "giver", "glade", "gland", 
 "glare", "glass", "glaze", "gleam", "glean", "glide", "glint", "gloat", 
 "globe", "gloom", "glory", "gloss", "glove", "glyph", "gnash", "gnome", 
 "godly", "going", "golem", "golly", "gonad", "goner", "goody", "gooey", 
 "goofy", "goose", "gorge", "gouge", "gourd", "grace", "grade", "graft", 
 "grail", "grain", "grand", "grant", "grape", "graph", "grasp", "grass", 
 "grate", "grave", "gravy", "graze", "great", "greed", "green", "greet", 
 "grief", "grill", "grime", "grimy", "grind", "gripe", "groan", "groin", 
 "groom", "grope", "gross", "group", "grout", "grove", "growl", "grown", 
 "gruel", "gruff", "grunt", "guard", "guava", "guess", "guest", "guide", 
 "guild", "guile", "guilt", "guise", "gulch", "gully", "gumbo", "gummy", 
 "guppy", "gusto", "gusty", 
 "habit", "hairy", "halve", "handy", "happy", "hardy", "harem", "harpy", 
 "harry", "harsh", "haste", "hasty", "hatch", "hater", "haunt", "haute", 
 "haven", "havoc", "hazel", "heady", "heard", "heart", "heath", "heave", 
 "heavy", "hedge", "hefty", "heist", "helix", "hello", "hence", "heron", 
 "hilly", "hinge", "hippo", "hippy", "hitch", "hoard", "hobby", "hoist", "holly", "homer", "honey", "honor", "horde", "horny", "horse", "hotel", 
 "hotly", "hound", "house", "hovel", "hover", "howdy", "human", "humid", 
 "humor", "humph", "humus", "hunch", "hunky", "hurry", "husky", "hussy", 
 "hutch", "hydro", "hyena", "hymen", "hyper", 
 "icily", "icing", "ideal", "idiom", "idiot", "idler", "idyll", "igloo", 
 "lilac", "image", "imbue", "impel", "imply", "inane", "inbox", "incur", 
 "index", "inept", "inert", "infer", "ingot", "inlay", "inlet", "inner", 
 "input", "inter", "intro", "ionic", "irate", "irony", "islet", "issue", 
 "itchy", "ivory", 
 "jaunt", "jazzy", "jelly", "jerky", "jetty", "jewel", "jiffy", "joint", 
"joist", "joker", "jolly", "joust", "judge", "juice", "juicy", "jumbo", 
"jumpy", "juror", 
"karma", "kayak", "kebab", "khaki", "kinky", "kiosk", "kitty", "knack", 
"knave", "knead", "kneed", "kneel", "knelt", "knife", "knock", "knoll", 
"known", "koala", "krill", 
"label", "labor", "laden", "ladle", "lager", "lance", "lanky", "lapel", 
"lapse", "large", "larva", "lasso", "latch", "later", "lathe", "latte", 
"laugh", "layer", "leach", "leafy", "leaky", "leant", "leapt", "learn", 
"lease", "leash", "least", "leave", "ledge", "leech", "leery", "lefty", 
"legal", "leggy", "lemon", "lemur", "leper", "level", "lever", "libel", 
"liege", "light", "liken", "lilac", "limbo", "limit", "linen", "liner", 
"lingo", "lipid", "lithe", "liver", "livid", "llama", "loamy", "loath", 
"lobby", "local", "locus", "lodge", "lofty", "logic", "login", "loopy", 
"loose", "lorry", "loser", "louse", "lousy", "lover", "lower", "lowly", 
"loyal", "lucid", "lucky", "lumen", "lumpy", "lunar", "lunch", "lunge", 
"lupus", "lurch", "lurid", "lusty", "lying", "lymph", "lyric", 
"macaw", "macho", "macro", "madam", "madly", "mafia", "magic", "magma", 
"maize", "major", "major", "maker", "mambo", "mamma", "mammy", "magna", 
"mange", "mango", "mangy", "mania", "manic", "manly", "manor", "maple", 
"march", "marry", "marsh", "mason", "masse", "match", "matey", "mauve", 
"maxim", "maybe", "mayor", "mealy", "meant", "meaty", "mecca", "medal", 
"media", "medic", "melee", "melon", "mercy", "merge", "merit", "merry", 
"metal", "meter", "metro", "micro", "midge", "midst", "might", "milky", 
"mimic", "mince", "miner", "minim", "minor", "minty", "minus", "mirth", 
"miser", "missy", "mocha", "modal", "model", "modem", "mogul", "moist", 
"molar", "moldy", "money", "month", "moody", "moose", "moral", "moron", "morph", "mossy", "motel", "motif", "motor", "motto", "moult", "mound", 
"mount", "mourn", "mouse", "mouth", "mover", "movie", "mower", "mucky", 
"mucus", "muddy", "mulch", "mummy", "munch", "mural", "murky", "mushy", 
"music", "musky", "musty", "myrrh", 
"nadir", "naive", "nanny", "nasal", "nasty", "natal", "naval", "navel", 
"needy", "neigh", "nerdy", "nerve", "never", "newer", "newly", "nicer", 
"niche", "niece", "night", "ninja", "ninny", "ninth", "noble", "nobly", 
"noise", "noisy", "nomad", "noose", "north", "nosey", "notch", "novel", 
"nudge", "nurse", "nutty", "nylon", "nymph", 
"oaken", "obese", "occur", "ocean", "octal", "octet", "odder", "oddly", 
"offal", "offer", "often", "olden", "older", "olive", "ombre", "omega", "onion", "onset", "opera", "opine", "opium", "optic", "orbit", "order", 
"organ", "other", "otter", "ought", "ounce", "outdo", "outer", "ovary", 
"ovate", "overt", "ovine", "ovoid", "owing", "owner", "oxide", "ozone", 
"paddy", "pagan", "paint", "paler", "palsy", "panel", "panic", "pansy", 
"papal", "paper", "parer", "parka", "parry", "parse", "party", "pasta", 
"paste", "pasty", "patch", "patio", "patsy", "patty", "pause", "payee", 
"payer", "peace", "peach", "pearl", "pecan", "pedal", "penal", "pence", 
"penne", "penny", "perch", "peril", "perky", "pesky", "pesto", "petal", 
"petty", "phase", "phone", "phony", "photo", "piano", "picky", "piece", 
"piety", "piggy", "pilot", "pinch", "piney", "pinky", "pinto", "piper", 
"pique", "pitch", "pithy", "pivot", "pixel", "pixie", "pizza", "place", 
"plaid", "plain", "plait", "plane", "plank", "plant", "plate", "plaza", 
"plead", "pleat", "plied", "plier", "pluck", "plumb", "plume", "plump", 
"plunk", "plush", "poesy", "point", "poise", "poker", "polar", "polka", 
"polyp", "ppoch", "poppy", "porch", "poser", "posit", "posse", "pouch", 
"pound", "pouty", "power", "prank", "prawn", "preen", "press", "price", 
"prick", "pride", "pried", "prime", "primo", "print", "prior", "prism", 
"privy", "prize", "probe", "prone", "prong", "proof", "prose", "proud", 
"prove", "prowl", "proxy", "prude", "prune", "psalm", "pudgy", "puffy", "pulpy", "pulse", "punch", "pupil", "puppy", "puree", "purer", "purge", "purse", "pushy", "putty", "pygmy", 
"quack", "quail", "quake", "qualm", "quark", "quart", "quash", "quasi", 
"queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", 
"quill", "guilt", "quirk", "quite", "quota", "quote", "quoth", 
"rabbi", "rabid", "racer", "radar", "radii", "radio", "rainy", "raise", 
"rally", "ramen", "ranch", "ranch", "range", "rapid", "rarer", "raspy", 
"ratio", "ratty", "raven", "rayon", "razor", "reach", "react", "ready", 
"realm", "rearm", "rebar", "rebel", "rebut", "recap", "recur", "recut", 
"reedy", "refer", "refit", "regal", "rehab", "reign", "relax", "relay", "relic", "remit", "renal", "renew", "repay", "repel", "reply", "rerun", 
"reset", "resin", "retch", "retro", "retry", "reuse", "revel", "revue", 
"rhino", "rhyme", "rider", "ridge", "rifle", "right", "rigid", "rigor", 
"rinse", "ripen", "riper", "risen", "riser", "risky", "rival", "river", "rivet", "roach", "roast", "robin", "robot", "rocky", "rodeo", "roger", 
"rogue", "roomy", "roost", "rotor", "rouge", "rough", "round", "rouse", 
"route", "rover", "rowdy", "rower", "royal", "ruddy", "ruder", "rugby", 
"ruler", "rumba", "rumor", "rupee", "rural", "rusty", 
"sadly", "safer", "saint", "salad", "sally", "salon", "salsa", "salty", "salve", "salvo", "sandy", "saner", "sappy", "sassy", "satin", "satyr", 
"sauce", "saucy", "sauna", "saute", "savor", "savoy", "savvy", "scald", 
"scale", "scalp", "scaly", "scamp", "scant", "scare", "scarf", "scary", 
"scene", "scent", "scion", "scoff", "scold", "scone", "scoop", "scope", 
"score", "scorn", "scour", "scout", "scowl", "scram", "scrap", "scree", "screw", "scrub", "scrum", "Scuba", "sedan", "seedy", "segue", "seize", 
"sense", "sepia", "serif", "serum", "serve", "setup", "seven", "sewer", 
"shack", "shade", "shady", "shaft", "shake", "shaky", "shale", "shall", 
"shalt", "shame", "shank", "shape", "shard", "shard", "share", "shark", 
"sharp", "shave", "shawl", "shear", "sheen", "sheep", "sheer", "sheet", 
"shiek", "shelf", "shell", "shied", "shift", "shine", "shiny", "shiny", 
"shire", "shirk", "shirt", "shoal", "shock", "shone", "shook", "shoot", 
"shore", "shorn", "short", "shout", "shove", "shown", "showy", "shrew", 
"shrub", "shrug", "shuck", "shunt", "shush", "shyly", "seige", "sieve", 
"sight", "sigma", "silky", "silly", "since", "sinew", "singe", "siren", 
"sissy", "sixth", "sixty", "skate", "skier", "skiff", "skimp", "skirt", 
"skulk", "skull", "skunk", "slack", "slain", "slang", "slant", "slash", 
"slate", "sleek", "sleep", "sleet", "slept", "slice", "slick", "slide", "slime", "slimy", "sling", "slink", "sloop", "slope", "slosh", "sloth", 
"slump", "slung", "slunk", "slurp", "slush", "slyly", "smack", "small", 
"smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", 
"smith", "smock", "smoke", "smoky", "smote", "snack", "snail", "snake", 
"snaky", "snare", "snarl", "sneak", "sneer", "snide", "sniff", "snipe", 
"snoop", "snore", "snort", "snout", "snowy", "snuck", "snuff", "soapy", 
"sober", "soggy", "solar", "solid", "solve", "sonar", "sonic", "sooth", 
"sooty", "sorry", "sound", "south", "sower", "space", "spade", "spank", 
"spare", "spark", "spasm", "spawn", "speak", "spear", "speck", "speed", 
"spell", "spelt", "spend", "spent", "spice", "spicy", "spied", "spiel", 
"spike", "spiky", "spill", "spilt", "spoil", "spoke", "spoof", "spook", 
"spool", "spoon", "spore", "sport", "spout", "spray", "spree", "sprig", 
"spunk", "spurn", "spurt", "squad", "squat", "squib", "stack", "staff", 
"stage", "staid", "stair", "stake", "stale", "stalk", "stall", "stamp", 
"stand", "stank", "stare", "stark", "start", "stash", "state", "stave", 
"stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", 
"stein", "stern", "stick", "stiff", "still", "stilt", "sting", "sting", 
"stink", "stint", "stock", "stoic", "stoke", "stole", "stomp", "stone", "stony", "stood", "stool", "stoop", "store", "stork", "storm", "story", 
"stout", "stove", "strap", "straw", "stray", "strip", "strut", "stuck", 
"study", "stuff", "stump", "stung", "stunk", "stunt", "style", "suave", 
"sugar", "suing", "suite", "sulky", "sully", "sumac", "sunny", "super", 
"surer", "surge", "surly", "sushi", "swamp", "swarm", "swash", "swath", 
"swear", "Sweat", "Sweep", "sweet", "swell", "swept", "swift", "swill", 
"swine", "swing", "swirl", "swish", "swoon", "swoop", "sword", "swore", 
"sworn", "Swung", "syrup", 
"tabby", "table", "taboo", "tacit", "tacky", "taffy", "taint", "taken", 
"taker", "tally", "talon", "tamer", "tango", "tangy", "taper", "taper", 
"tardy", "tarot", "taste", "tasty", "tatty", "taunt", "tawny", "teach", 
"teary", "tease", "teddy", "teeth", "tempo", "tenet", "tenor", "tense", 
"tenth", "tepee", "tepid", "terra", "terse", "testy", "thank", "theft", 
"their", "theme", "there", "these", "theta", "thick", "theif", "thigh", 
"thing", "think", "third", "thong", "thorn", "those", "three", "threw", "throb", "throw", "thrum", "thumb", "thump", "thyme", "tiara", "tibia", 
"tidal", "tiger", "tight", "tilde", "timer", "timid", "tipsy", "titan", "tithe", "title", "toast", "today", "toddy", "token", "tonal", "tonga", 
"tonic", "tooth", "topaz", "topic", "torch", "torso", "torus", "total", 
"totem", "touch", "tough", "towel", "tower", "toxic", "trace", "track", 
"tract", "trade", "trail", "train", "trait", "tramp", "trash", "trawl", 
"tread", "treat", "trend", "triad", "trial", "tribe", "trice", "trick", 
"tried", "tripe", "trite", "troll", "troop", "trope", "trout", "trove", 
"truce", "truck", "truer", "truly", "trump", "trunk", "truss", "trust", 
"truth", "tryst", "tubal", "tuber", "tulip", "tulle", "tumor", "tunic", 
"turbo", "tutor", "twang", "tweak", "tweed", "tweet", "twice", "twine", 
"twirl", "twist", "twixt", "tying", 
"udder", "ulcer", "ultra", "umbra", "uncle", "uncut", "under", "undid", 
"undue", "unfed", "unfit", "unify", "union", "unite", "unity", "unlit", 
"unmet", "unset", "untie", "until", "unwed", "unzip", "upper", "upset", 
"urban", "urine", "usage", "usher", "using", "usual", "usurp", "utile", 
"utter", 
"vague", "valet", "valid", "valor", "value", "valve", "vapid", "vapor", 
"vault", "vaunt", "vegan", "venom", "venue", "varge", "verse", "verso", 
"verve", "vicar", "video", "vigil", "vigor", "villa", "vinyl", "viola", 
"viper", "viral", "virus", "visit", "visor", "vista", "vital", "vivid", 
"vixen", "vocal", "vodka", "vogue", "voice", "voila", "vomit", "voter", 
"vouch", "vowel", "vying", 
"wacky", "wafer", "wager", "wagon", "waist", "waive", "waltz", "warty", 
"waste", "watch", "water", "waver", "waxen", "weary", "weave", "wedge", 
"weedy", "weigh", "weird", "welch", "welsh", "whack", "whale", "wharf", 
"wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whine", 
"whiny", "whirl", "whisk", "white", "whole", "whoop", "whose", "widen", 
"wider", "widow", "width", "wield", "wight", "willy", "wimpy", "wince", 
"winch", "windy", "wiser", "wispy", "witch", "witty", "woken", "woman", 
"wordy", "world", "worry", "worse", "worst", "worth", "would", "wound", 
"woven", "wrack", "wrath", "wreak", "wreck", "wrest", "wring", "wrist", 
"write", "wrong", "wrote", "wrung", "wryly", "yacht", "yearn", "yeast", 
"yield", "young", "youth", "zebra", "zesty", "zonal"] 

//Chooses a random index corresponding to a word in the words array
 function chooseRandomWord() {
    i = Math.floor(Math.random() * 2281);
   //Make sure to update this number with a longer word list!
 }

chooseRandomWord();
let answerindex = wordList[i];

let answer = answerindex.split('');
//Leaving this in for quick game play purposes so we don't spend 5ever trying to guess the word
console.log(answer);


//Collect user input for guess 1
const guess1 = document.querySelector('[class="guess1"]')
const input1 = guess1.querySelectorAll('.inputs1 input')


function handleInput(e) {
//check for input and if there is a next input, skip to that one after text has been entered
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess1.addEventListener('input', handleInput);

//Collecting the data from the input boxes on a click of the check button and putting it into an array
let submitGuess1 = document.getElementById("checkguess1"); 

submitGuess1.onclick = function() {
    //Gets values from all input boxes
    let zero = document.querySelector('[id="0"]').value;
    let one = document.querySelector('[id="1"]').value;
    let two = document.querySelector('[id="2"]').value;
    let three = document.querySelector('[id="3"]').value;
    let four = document.querySelector('[id="4"]').value;

    //Pushes all of the values from input boxes in row 1 into an array and saves it as guess1
    let guess1 = [zero, one, two, three, four];

    //Compares word collected from guess 1 to the one selected from the list of possible words

    //Locks in guess so you can't go back and change it after submission
    function lockButton() {
        document.getElementById("checkguess1").disabled = true;
        document.getElementById("checkguess1").readOnly = true;
        function lockInputs() {
            document.getElementById("0").disabled = true;
            document.getElementById("0").readOnly = true;
            document.getElementById("1").disabled = true;
            document.getElementById("1").readOnly = true;
            document.getElementById("2").disabled = true;
            document.getElementById("2").readOnly = true;
            document.getElementById("3").disabled = true;
            document.getElementById("3").readOnly = true;
            document.getElementById("4").disabled = true;
            document.getElementById("4").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    
//Compares guess 1 to the answer
    function compareGuess1() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess1[i]) {
           document.getElementById([i]).style.background = "green"
            } else if (answer.includes(guess1[i])) {
             document.getElementById([i]).style.background = "orange"
            } else {
           document.getElementById([i]).style.background = "gray"
            }
        }
    };

    compareGuess1();

    //WIN CIRCUMSTANCE
    function checkWin() {
            if (answer[0] === guess1[0] && answer[1] === guess1[1] && answer[2] === guess1[2] && answer[3] === guess1[3] && answer[4] === guess1[4]) {
            document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
        }
    }

    checkWin(); 
}


    
//Collect user input for guess 2
const guess2 = document.querySelector('[class="guess2"]')
const input2 = guess1.querySelectorAll('.inputs2 input')

function handleInput2(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess2.addEventListener('input', handleInput2);

let submitGuess2 = document.getElementById("checkguess2");


submitGuess2.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess2").disabled = true;
        document.getElementById("checkguess2").readOnly = true;
        function lockInputs() {
            document.getElementById("5").disabled = true;
            document.getElementById("5").readOnly = true;
            document.getElementById("6").disabled = true;
            document.getElementById("6").readOnly = true;
            document.getElementById("7").disabled = true;
            document.getElementById("7").readOnly = true;
            document.getElementById("8").disabled = true;
            document.getElementById("8").readOnly = true;
            document.getElementById("9").disabled = true;
            document.getElementById("9").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let five = document.querySelector('[id="5"]').value;
    let six = document.querySelector('[id="6"]').value;
    let seven = document.querySelector('[id="7"]').value;
    let eight = document.querySelector('[id="8"]').value;
    let nine = document.querySelector('[id="9"]').value;

    let guess2 = [five, six, seven, eight, nine];

    function compareGuess2() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess2[i]) {
           document.getElementById([i + 5]).style.background = "green";
            } else if (answer.includes(guess2[i])) {
             document.getElementById([i + 5]).style.background = "orange"
            } else {
           document.getElementById([i + 5]).style.background = "gray"
            }
            }
        }
        compareGuess2();
        
    function checkWin() {
        if (answer[0] === guess2[0] && answer[1] === guess2[1] && answer[2] === guess2[2] && answer[3] === guess2[3] && answer[4] === guess2[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
        }
    }
    checkWin();
    };

    

//Collect user input for guess 3
const guess3 = document.querySelector('[class="guess3"]')
const input3 = guess1.querySelectorAll('.inputs input')

function handleInput3(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess3.addEventListener('input', handleInput3);

let submitGuess3 = document.getElementById("checkguess3");

submitGuess3.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess3").disabled = true;
        document.getElementById("checkguess3").readOnly = true;
        function lockInputs() {
            document.getElementById("10").disabled = true;
            document.getElementById("10").readOnly = true;
            document.getElementById("11").disabled = true;
            document.getElementById("11").readOnly = true;
            document.getElementById("12").disabled = true;
            document.getElementById("12").readOnly = true;
            document.getElementById("13").disabled = true;
            document.getElementById("13").readOnly = true;
            document.getElementById("14").disabled = true;
            document.getElementById("14").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let ten = document.querySelector('[id="10"]').value;
    let eleven = document.querySelector('[id="11"]').value;
    let twelve = document.querySelector('[id="12"]').value;
    let thirteen = document.querySelector('[id="13"]').value;
    let fourteen = document.querySelector('[id="14"]').value;

    let guess3 = [ten, eleven, twelve, thirteen, fourteen]
    

    function compareGuess3() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess3[i]) {
           document.getElementById([i + 10]).style.background = "green";
            } else if (answer.includes(guess3[i])) {
             document.getElementById([i + 10]).style.background = "orange"
            } else {
           document.getElementById([i + 10]).style.background = "gray"
            }
        }
    }
    compareGuess3();

    function checkWin() {
        if (answer[0] === guess3[0] && answer[1] === guess3[1] && answer[2] === guess3[2] && answer[3] === guess3[3] && answer[4] === guess3[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
};

    



//Collect user input for guess 4
const guess4 = document.querySelector('[class="guess4"]')
const input4 = guess1.querySelectorAll('.inputs input')

function handleInput4(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess4.addEventListener('input', handleInput4);

let submitGuess4 = document.getElementById("checkguess4");

submitGuess4.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess4").disabled = true;
        document.getElementById("checkguess4").readOnly = true;
        function lockInputs() {
            document.getElementById("15").disabled = true;
            document.getElementById("15").readOnly = true;
            document.getElementById("16").disabled = true;
            document.getElementById("16").readOnly = true;
            document.getElementById("17").disabled = true;
            document.getElementById("17").readOnly = true;
            document.getElementById("18").disabled = true;
            document.getElementById("18").readOnly = true;
            document.getElementById("19").disabled = true;
            document.getElementById("19").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let fifteen = document.querySelector('[id="15"]').value;
    let sixteen = document.querySelector('[id="16"]').value;
    let seventeen = document.querySelector('[id="17"]').value;
    let eighteen = document.querySelector('[id="18"]').value;
    let nineteen = document.querySelector('[id="19"]').value;

    let guess4 = [fifteen, sixteen, seventeen, eighteen, nineteen]
    
    function compareGuess4() {
        for (let i = 0; i < 5; i++) {
            for (let j = 15; j < 20; j++) {
           if (answer[i] === guess4[i]) {
           document.getElementById([i + 15]).style.background = "green";
            } else if (answer.includes(guess4[i])) {
             document.getElementById([i + 15]).style.background = "orange"
            } else {
           document.getElementById([i + 15]).style.background = "gray"
            }
        }
    }
    };

    compareGuess4();

    function checkWin() {
        if (answer[0] === guess4[0] && answer[1] === guess4[1] && answer[2] === guess4[2] && answer[3] === guess4[3] && answer[4] === guess4[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
}

//Collect user input for guess 5
const guess5 = document.querySelector('[class="guess5"]')
const input5 = guess1.querySelectorAll('.inputs input')

function handleInput5(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess5.addEventListener('input', handleInput5);

let submitGuess5 = document.getElementById("checkguess5");

submitGuess5.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess5").disabled = true;
        document.getElementById("checkguess5").readOnly = true;
        function lockInputs() {
            document.getElementById("20").disabled = true;
            document.getElementById("20").readOnly = true;
            document.getElementById("21").disabled = true;
            document.getElementById("21").readOnly = true;
            document.getElementById("22").disabled = true;
            document.getElementById("22").readOnly = true;
            document.getElementById("23").disabled = true;
            document.getElementById("23").readOnly = true;
            document.getElementById("24").disabled = true;
            document.getElementById("24").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let twenty = document.querySelector('[id="20"]').value;
    let twentyone = document.querySelector('[id="21"]').value;
    let twentytwo = document.querySelector('[id="22"]').value;
    let twentythree = document.querySelector('[id="23"]').value;
    let twentyfour = document.querySelector('[id="24"]').value;

    let guess5 = [twenty, twentyone, twentytwo, twentythree, twentyfour]
    

    function compareGuess5() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess5[i]) {
           document.getElementById([i + 20]).style.background = "green";
            } else if (answer.includes(guess5[i])) {
             document.getElementById([i + 20]).style.background = "orange"
            } else {
           document.getElementById([i + 20]).style.background = "gray"
            }
        }
    }
    compareGuess5();

    function checkWin() {
        if (answer[0] === guess5[0] && answer[1] === guess5[1] && answer[2] === guess5[2] && answer[3] === guess5[3] && answer[4] === guess5[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
};

    

//Collect user input for guess 6
const guess6 = document.querySelector('[class="guess6"]')
const input6 = guess1.querySelectorAll('.inputs input')

function handleInput6(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess6.addEventListener('input', handleInput6);

let submitGuess6 = document.getElementById("checkguess6");

submitGuess6.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess6").disabled = true;
        document.getElementById("checkguess6").readOnly = true;
        function lockInputs() {
            document.getElementById("25").disabled = true;
            document.getElementById("25").readOnly = true;
            document.getElementById("26").disabled = true;
            document.getElementById("26").readOnly = true;
            document.getElementById("27").disabled = true;
            document.getElementById("27").readOnly = true;
            document.getElementById("28").disabled = true;
            document.getElementById("28").readOnly = true;
            document.getElementById("29").disabled = true;
            document.getElementById("29").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let twentyfive = document.querySelector('[id="25"]').value;
    let twentysix = document.querySelector('[id="26"]').value;
    let twentyseven = document.querySelector('[id="27"]').value;
    let twentyeight = document.querySelector('[id="28"]').value;
    let twentynine = document.querySelector('[id="29"]').value;

    let guess6 = [twentyfive, twentysix, twentyseven, twentyeight, twentynine]
    
    function compareGuess6() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess6[i]) {
           document.getElementById([i + 25]).style.background = "green";
            } else if (answer.includes(guess6[i])) {
             document.getElementById([i + 25]).style.background = "orange"
            } else {
           document.getElementById([i + 25]).style.background = "gray"
            }
        }
    } compareGuess6();

    function checkWin() {
        if (answer[0] === guess6[0] && answer[1] === guess6[1] && answer[2] === guess6[2] && answer[3] === guess6[3] && answer[4] === guess6[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    } else {
        document.getElementById("winorlosemessage").innerHTML = `YOU LOSE! The word was ${answerindex}.`
    }
}

checkWin();
};