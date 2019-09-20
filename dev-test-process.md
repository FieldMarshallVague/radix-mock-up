# Process

### Export images from xd file

First time doing this from XD.  The obviously-required plugin isn't free and the manual way is repetitive and seems unnecessarily time-consuming (is this adobe's business model?).  I could just use lorem-pixel or something, but I want it to look the same.

### Rename images to match sizes

exported images to device folders.  
renamed semantically.

- srcset can now map to subfolder.

## General issues

scss linting mayhem

- caused by old extension
- that wasn't supposed to affect SCSS!

bootstrap is a bit of a pain when it comes to themeing

- maybe I should have just done the navbar by hand
- BS 4 has made some good progress on dynamic variable overriding.
  - need to spend some more time with it

inner span not getting the scoped ID assigned (so styles were being ignored).

- menu-icon was a chore


## vue docs are all different

- even for version 2.x

  - hard to know which is the standard (future-proof) way.

- vue.extend?

  - as in the CLI-created examples

- or vue.component?
  
  - as in the docs?

Notes:

  - vue.extend creates locally-scope components, so doesn't pollute the global space.

    - harder to refactor
    - naming collisions
    - breaks tooling (with vetur, I think)
  - vue.component calls 'extend' under the hood.

note: classes are not the way (any more)

- this is a shame, the syntax was familiar

Seems like there is no 'vue way', just use the one that works best for you.


## component building

consider using 'extends' syntax for variants of article units
  - e.g. where they differ by having a subtitle or not
consider using 'slots' to override the same behaviour

