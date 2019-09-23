# Process

### Export images from xd file

First time doing this from XD.  The obviously-required plugin isn't free and the manual way is repetitive and seems unnecessarily time-consuming (is this adobe's business model?).  I could just use lorem-pixel or something, but I want it to look the same.

### Rename images to match sizes

exported images to device folders.  
renamed semantically.

- srcset can now map to subfolder.

## General issues

scss linting mayhem

- saving re-formatted my code
- caused by old extension
- that wasn't supposed to affect SCSS!
- fixed by going through settings for all extensions then un-installing extensions

  - finally investigated an extension that formatted CSS and an update included SCSS support.

bootstrap is a bit of a pain when it comes to themeing

- just seems too verbose, necessary to provide specificity to override the BS defaults.
- maybe I should have just done the navbar by hand
- BS 4 has made some good progress on dynamic variable overriding.
  - need to spend some more time with it

inner span not getting the scoped ID assigned (so styles were being ignored).

- menu-icon was a chore

vue-formatting won't work.

- extensions installed aren't registered properly?
- keeps saying no formatter for file type and none appear in available lists... ??
- meh, just do it by hand


## vue docs are all different

- even for version 2.x

  - hard to know which is the standard (future-proof) way.

- vue.extend?

  - as in the CLI-created examples

- or vue.component?
  
  - as in the docs?

Notes:

- Choose your weapon!

  - object syntax, extends/component syntax or class syntax?
  - vue.extend creates locally-scope components, so doesn't pollute the global space.

    - harder to refactor
    - naming collisions
    - breaks tooling (e.g. intellisense with Vetur)
  - vue.component calls 'extend' under the hood.

- interpolation syntax?

  - v-binds or colons?  
  
    - colons required

note: classes are not the way (any more)

- this is a shame, the syntax was familiar

Seems like there is no 'vue way', just use the one that works best for you.


## component building

consider using 'extends' syntax for variants of article units
  
- e.g. where they differ by having a subtitle or not

consider using 'slots' to override the same behaviour

## background colours

Just noticed the background isn't pure white.  
Can see on IPS monitor a slight difference between navbar and header bg.

- fix this after the responsive work.
- might have some margin/paddings creep

## painted into corner

By trying to put the pagination on the whole HN page.
i.e.  Rather than making button paginate two comps at once.
Forces me to use a single grid-item and makes the subsequent code messier.

## HN section pagination

Would have been better to keep them separate (I merged them half-way through when I realised they were both under same pagination element).
Having separate components that both listened to an observable pagination event stream would have been better.

## Time Spent

- 4h Tuesday

  - Reading about Vue use-cases, docs, V vs Ng, roadmap
  - Where is the SSoT?  Vue docs?  Most blogs seem to diverge from their examples.

- 9h Weds

  - setup, installs, tooling, tooling bugs, cli quickstarts (x3 variants)
  - extracting images and colours from XD file.
  - installing BS and setting up SCSS
  - 

- 2h Thurs
- 2h Fri
- 6h Sat
- 8h Sun

Total: 31 hours.  
