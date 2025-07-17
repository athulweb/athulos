function speak(text) {
  const synth = window.speechSynthesis;
  if (!synth) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.pitch = 1.1;
  utter.rate = 1;
  synth.speak(utter);
}
