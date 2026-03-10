export interface SelectedLink {
  active: boolean;
  index: number;
}


export interface InitialState {
  isOpen: boolean;
  selectedLink: SelectedLink;
  isMounted: boolean;
}