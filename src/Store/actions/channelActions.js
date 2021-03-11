export const SET_CURRENT_CHANNEL = "SET_CURRENT_CHANNEL";

export const setCurrentChannel = (channel) => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: channel,
  };
};
