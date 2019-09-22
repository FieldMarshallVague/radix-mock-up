# Dev test thoughts

## initial

"Brief: The test is to create a responsive one page mock-up from the file supplied. Would be nice to see interactive/ animated sections but not essential. When we review your implementation we will - among other things - consider how you developed the pages. 

Few tips:

Use the tools you feel most comfortable with. 
Write code you are happy with, not code you think we want to see.
Relax! This will be fun, trust me."

### design file

Wow, been a while since I saw something this complete.

- panic.
- breathe.

## analysis

OK, break up the page into distinct components

- separate concerns
- same-same but different (do they have separate reasons to change?)
- SOLID
- R2R (Right to repair - maintenance mindedness)

try to visualise how the page will collapse responsively.

## any obvious responsive issues?

Not really, seems designed with components in mind.
Device-specific, though, so breakpoints should be based on the chosen ones rather than, say, BS defaults.
Not immediately clear how I'd do the hero collapse, but probably overlaid grids.

## which assets do I need to export?

- are the pictures important?
- assume so, since they would be in normal circumstances
- export all separately and label them for each of the 4 sizes

## maybe just use Vue for the components?

- should be simple enough
- seems like a good fit
  - i.e. simple use-case
  - easier to create dynamic list

## must haves

- exact visuals
- aria attributes / usual a11y decorators
- device-specific/responsive images (via srcset etc.)  
- fully hosted

## nice-to-haves

- radix fav-icon?
- theme switcher
- dynamic classes on pagination (to show available navigation)
- loading animation
- service worker
- click-able arrows (i.e.  change to new content)
- animated background images

  - scale transitions
  - blur
  - saturation


## CSS Grid

Really would benefit from spending more time with different layouts and maximising understanding of grid.
It's so powerful and some really cool responsive features can be made FAR more easily 

## Pagination

implementing actual pagination would make some of the CSS easier
