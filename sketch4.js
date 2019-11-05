let loopBeat;
let bassSynth, cymbalSynth;
let counter;
let amSynth;

function setup() {

  counter = 0;

  amSynth = new Tone.AMSynth().toMaster();
  bassSynth = new Tone.MembraneSynth().toMaster();
  cymbalSynth = new Tone.MetalSynth({
      "frequency": 250,
      "envelope": {
        "attack": .001,
        "decay": .1,
        "release": .01
      },
      "harmonicity": 3.1,
      "modulationIndex": 16,
      "resonance": 8000,
      "octaves": .5
    }

  ).toMaster();

  loopBeat = new Tone.Loop(song, '16n');

  Tone.Transport.bpm.value = 140
  Tone.Transport.start();
  loopBeat.start();
}

function song(time) {


  if (counter % 4 === 0) {
    bassSynth.triggerAttackRelease('F#1', '8n', time, 1)

  }



  if (counter % 4 !== 1) {

    if (counter === 3 || counter === 12) {
      cymbalSynth.envelope.decay= .5;

    } else {
      cymbalSynth.envelope.decay= .01;
    }
    cymbalSynth.triggerAttackRelease('32n', time, .3);
  }

  if (counter === 0) {
    amSynth.triggerAttackRelease('c3', '16n', time, .8)
  }


  counter = (counter + 1) % 16
}
