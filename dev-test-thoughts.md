# Dev test thoughts

"Brief: The test is to create a responsive one page mock-up from the file supplied. Would be nice to see interactive/ animated sections but not essential. When we review your implementation we will - among other things - consider how you developed the pages. 

Few tips:

Use the tools you feel most comfortable with. 
Write code you are happy with, not code you think we want to see.
Relax! This will be fun, trust me."

Wow, been a while since I saw something this complete.
  panic.
  breathe.

OK, break up the page into distinct components

- separate concerns
- same-same but different (do they have separate reasons to change?)
- SOLID
- R2R (Right to repair - maintenance mindedness)

try to visualise how the page will collapse responsively.

which assets do I need to export?

- are the pictures important?
- assume so, since they would be in normal circumstances
- export all separately and label them for each of the 4 sizes

is the header image wrong?

- the alignment of the rhs seems off...
  - should it stop at the end of the column guide?
  - or does it need more space due to size?
- no, it isn't.
  - it's matching the margin of the 'more news' section

maybe just use Vue for the components?

- should be simple enough
- seems like a good fit
  - i.e. simple use-case
  - easier to create dynamic list

must haves:

- exact visuals
- aria attributes / usual a11y decorators
- device-specific/responsive images (via srcset etc.)  
- fully hosted

nice-to-haves

- radix fav-icon
- theme switcher
- loading animation
- service worker
- click-able arrows (i.e.  change to new content)
- animated background images

  - scale transitions
  - blur
  - saturation