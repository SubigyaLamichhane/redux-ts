import { ActionType } from '../action-types';

interface SearchRepositriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositriesAction
  | SearchRepositriesSuccessAction
  | SearchRepositriesErrorAction;
