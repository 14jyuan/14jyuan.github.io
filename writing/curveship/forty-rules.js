//  Forty Rules of Love

var metadata = { title: "Starry Memories", author: "Joanne Yuan", date: "2020",
instructions: "Click below or add your own parameters to the URL to change the “spin” and to create variation in the narrative discourse. You have to use the official names of “actors” for narrator and narratee. Examples:",
examples: [ "narrator=ella", "narrator=john",
"order=retrograde", "speaking=after" ] };

// PLACES first
place.bedroom = new Place("the", "bedroom");
place.street = new Place("the", "street");

// ACTORS next
actor.ella = new Actor("", "Ella", spatial.in, place.bedroom, pronoun.feminine);
actor.michael = new Actor("", "Michael", spatial.in, place.bedroom, pronoun.masculine);
actor.john = new Actor("", "He", spatial.in, place.street, pronoun.masculine);

// THINGS next
thing.memories = new Thing("", "memories",  spatial.of, actor.ella);
thing.memories.owner = actor.ella;

//2
var WANDER = new Event(actor.john, "are going", "to the library");
var WALK = new Event(actor.ella, "are walking with", actor.john);
var WIPE = new Event(actor.ella, "resist", "the urge to step away");
var OVER = new Event(actor.ella, "want", "this to be over");
var WANDER = new Event(actor.ella, "think", "about books and blankets and stars and night");
var WANDER = new Event(actor.john, "say", "something");
var JOLT = new Event(actor.ella, "jolt out of", thing.memories);
var REFOCUS = new Event(actor.ella, "look", "at the afternoon sky")
var REPEAT = new Event(actor.ella, "blink", "repeatedly");
var REPEAT = new Event(actor.ella, "ask", "“Michael, what did you just say?”");
var SURPRISE = new Event(actor.john, "turn", "in surprise");
var NAME = new Event(actor.john, "reply", "“My name is John”");
var REMEMBER = new Event(actor.ella, "have not forgotten", actor.michael);

var world = new World(place, actor, thing, eventSeq);

function run() {
    var spin = getParameters(world.actor);
    narrate(metadata, spin, world);
};
