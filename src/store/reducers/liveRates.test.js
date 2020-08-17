/// <reference types='jest' />

import liveRatesReducer, { initialState } from './liveRates.reducer'

describe('liveRates reducer', () => {
  test('does return the initial state', () => {
    const newAction = { type: '' }
    expect(liveRatesReducer(undefined, newAction))
      .toEqual(initialState)
  })

  describe('ON_FETCH_LIVE_RATES_STARTED', () => {
    test('does return isLoading as true', () => {
      const newAction = {
        type: 'ON_FETCH_LIVE_RATES_STARTED'
      }
      const state = {
        ...initialState,
        isLoading: false,
      }
      const expectedState = {
        ...state,
        isLoading: true
      }
      expect(liveRatesReducer(state, newAction))
          .toEqual(expectedState)
    })
  })
})