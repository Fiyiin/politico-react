export const fetchPartiesStarted = () => ({
  type: 'FETCH_PARTIES_STARTED',
});

export const fetchPartiesSucceeded = parties => ({
  type: 'FETCH_PARTIES_SUCCEEDED',
  payload: parties,
});

export const fetchPartiesFailed = error => ({
  type: 'FETCH_PARTIES_FAILED',
  payload: { error },
});
