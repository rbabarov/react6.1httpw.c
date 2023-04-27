export default function turnArrowsF(hs, ms, ss) {
  ss += 6;
  if (ss === 360) {ss = 0; ms += 6; hs += 0.5;}
  if (ms >= 360) {ms = 0;}
  if (hs === 360) {hs = 0;}
  return {hC: hs, mC: ms, sC: ss};
}
