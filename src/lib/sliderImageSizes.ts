/**
 * `sizes` hints for the slider figures — keep in sync with Tailwind widths:
 * main ~74% mobile / ~58% ≥500px; secondary ~50% / ~43%; peek ~38% / ~34–35%.
 */
export const SLIDER_MAIN_SIZES =
  '(max-width: 499px) 74vw, (max-width: 1288px) 58vw, min(747px, 58vw)'

export const SLIDER_SECONDARY_SIZES =
  '(max-width: 499px) 50vw, (max-width: 1288px) 43vw, min(554px, 43vw)'

export const SLIDER_PEEK_SIZES =
  '(max-width: 499px) 38vw, (max-width: 1288px) 35vw, min(451px, 35vw)'
