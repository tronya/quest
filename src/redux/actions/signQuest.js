export const UNSIGN_FROM_QUEST = "UNSIGN_FROM_QUEST";
export const SIGN_QUEST = "SIGN_YO_QUEST";

export function signToQuest(id) {
  return {
    type: SIGN_QUEST,
    id
  };
}

export function unSignFromQuest(id) {
  return {
    type: UNSIGN_FROM_QUEST,
    id
  };
}